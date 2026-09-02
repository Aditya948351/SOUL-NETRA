import json
import re

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    pdf_pages = json.load(f)

# Extract all 155+ references
raw_refs = []
for p in pdf_pages[42:]:
    lines = p['text'].split('\n')
    for line in lines:
        line = line.strip()
        m = re.match(r'^(\d+)\.\s+(.*)', line)
        if m:
            num = int(m.group(1))
            rest = m.group(2).strip()
            url_match = re.search(r'https?://[^\s\)]+', rest)
            url = url_match.group(0) if url_match else ""
            title = rest.replace(url, '').strip().strip('—').strip('-').strip()
            if not title and url:
                # generate friendly title from url
                parts = url.split('/')
                domain = parts[2] if len(parts) > 2 else url
                slug = parts[-1] if parts[-1] else (parts[-2] if len(parts) > 1 else domain)
                title = f"{domain}: {slug.replace('-', ' ').capitalize()}"
            
            # classify reference category
            category = "Academic Research"
            url_lower = url.lower()
            title_lower = title.lower()
            if "cag.gov.in" in url_lower or "audit" in url_lower or "cag" in title_lower or "saiindia.gov.in" in url_lower:
                category = "CAG Audit Reports"
            elif "pib.gov.in" in url_lower or "dosje.gov.in" in url_lower or "socialjustice.gov.in" in url_lower or "gov.in" in url_lower or "gov.uk" in url_lower or "gov.ie" in url_lower:
                category = "Government & Policy"
            elif "dpdp" in url_lower or "dpdp" in title_lower or "privacy" in url_lower or "laws" in url_lower or "surveillance-camera" in url_lower:
                category = "DPDP Act & Legal Frameworks"
            elif any(news in url_lower for news in ["indiatoday", "ndtv", "moneycontrol", "mid-day", "thewire", "nationalherald", "amarujala", "lokmat", "dtnext", "moneylife", "thefederal", "thelivenagpur", "thenewsmill", "timesofindia", "hindustantimes", "newindianexpress"]):
                category = "Investigative News & Media"
            elif any(pub in url_lower for pub in ["ieee", "springer", "mdpi", "frontiers", "sciencedirect", "nature", "arxiv", "pubmed", "pmc", "ijert", "ijprems", "ijsret", "jurnal", "dblp", "sciltp"]):
                category = "Academic & Technical Research"

            raw_refs.append({
                'id': num,
                'title': title,
                'url': url,
                'category': category,
                'page': p['page']
            })

# Remove duplicates based on ID or URL
seen_ids = set()
unique_refs = []
for r in raw_refs:
    if r['id'] not in seen_ids and r['url']:
        seen_ids.add(r['id'])
        unique_refs.append(r)

# Sort by id
unique_refs.sort(key=lambda x: x['id'])

print(f"Total clean unique references extracted: {len(unique_refs)}")

# Let's create the full data.js
data_js_content = f"""// SOUL-NETRA: Smart Real-Time Monitoring & Inspection Platform Data File
// Complete extracted data from the 48-page research document for SIH26095 (MoSJE)

const SOUL_NETRA_DATA = {{
  metadata: {{
    id: "SIH26095",
    title: "SOUL-NETRA: Smart Real-Time Monitoring & Inspection Mobile App",
    subtitle: "AI-Powered Video Analytics, Sequential Anti-Spoofing MFA & Algorithmic Surprise Inspection Engine",
    organization: "Ministry of Social Justice & Empowerment (MoSJE)",
    department: "Department of Social Justice and Empowerment (DoSJE)",
    category: "Software",
    theme: "Miscellaneous",
    statement: "Develop a centralized mobile application for real-time monitoring and inspection of institutions/NGOs/facilities receiving Grant-in-Aid (GIA) or operating under MoSJE schemes."
  }},

  keyMetrics: [
    {{
      value: "₹1.62 Cr",
      label: "Disbursed to Ghost Hostels",
      subtext: "CAG Audit in Maharashtra: 6 non-functional hostels received funds with 0 students across 4 years",
      icon: "alert-triangle",
      color: "#FF5252",
      tag: "CAG Audit"
    }},
    {{
      value: "94.53%",
      label: "Fake Bank Details (PMKVY)",
      subtext: "90.66 Lakh records had missing/dummy bank accounts ('11111111111', '123456', 'N/A')",
      icon: "file-x",
      color: "#FF9100",
      tag: "Data Fraud"
    }},
    {{
      value: "2.56 Lakh",
      label: "Duplicate Face Photos",
      subtext: "Rajasthan MGNREGA attendance fraud; 2.05 Lakh from Jaisalmer alone using static photo reuse",
      icon: "users-x",
      color: "#FF5252",
      tag: "Biometric Spoofing"
    }},
    {{
      value: "11 Months",
      label: "Annual Fraud Window",
      subtext: "Institutions operate without oversight between infrequent yearly scheduled inspections",
      icon: "clock",
      color: "#FFD600",
      tag: "Inspection Gap"
    }},
    {{
      value: "97%+ AUC",
      label: "AI Video Anomaly Detection",
      subtext: "State-of-the-art Deep Learning VAD benchmarks for detecting empty premises and irregular occupancy",
      icon: "cpu",
      color: "#00E676",
      tag: "AI Benchmark"
    }},
    {{
      value: "96.67%",
      label: "Sequential MFA Accuracy",
      subtext: "Multi-factor authentication combining dynamic geofencing, active liveness & anti-spoofing challenge",
      icon: "shield-check",
      color: "#00E676",
      tag: "Security Benchmark"
    }},
    {{
      value: "1,500",
      label: "PMU Inspections (2022)",
      subtext: "Only ~1,500 institutions inspected manually per year across tens of thousands of welfare centers",
      icon: "eye-off",
      color: "#00B0FF",
      tag: "Field Coverage"
    }},
    {{
      value: "100%",
      label: "DPDP Act 2023 Compliant",
      subtext: "Edge-based automated face blurring, purpose limitation, sovereign storage & 30-90 day auto-purge",
      icon: "lock",
      color: "#651FFF",
      tag: "Privacy"
    }}
  ],

  cagAudits: [
    {{
      id: "cag-ghost-hostels",
      title: "Maharashtra Ghost Hostels Scam",
      organization: "CAG Audit & Social Welfare Department (Maharashtra)",
      year: "2024–2026",
      scheme: "Grant-in-Aid to SC/ST Welfare Hostels",
      amount: "₹1.62 Crore",
      description: "CAG compliance audit revealed that ₹1.62 Crore was disbursed over 4 years to 6 completely non-functional 'ghost' hostels with zero students enrolled or residing. Inspections were never conducted as mandated by state guidelines.",
      consequence: "Following the CAG report, the state government ordered immediate closure of 11 SC hostels, recovered funds, and initiated vigilance inquiries.",
      keyFindings: [
        "Hostels operated only on paper with falsified attendance registers and fake meal logs.",
        "Authorities failed to undertake the stipulated annual physical inspections.",
        "Advance notice allowed private trusts to stage inspections by renting students from nearby schools.",
        "Zero CCTV or biometric real-time verification existed at the state or central level."
      ],
      sources: [
        {{ title: "CAG Compliance Audit Report 2024-25", url: "https://cag.gov.in/en/audit-report/details/124217" }},
        {{ title: "India Today: Maharashtra Ghost Hostels Scam", url: "https://www.indiatoday.in/amp/india/story/maharashtra-ghost-hostels-cag-rs-1-62-crore-six-non-functional-hostels-ptag-2946602-2026-07-14" }},
        {{ title: "NDTV: Zero Occupants Regular Funding", url: "https://www.ndtv.com/india-news/auditor-flags-ghost-hostels-in-maharashtra-zero-occupants-regular-funding-11770472" }}
      ]
    }},
    {{
      id: "cag-pmkvy",
      title: "PMKVY National Skill Training Fraud",
      organization: "Comptroller and Auditor General of India (CAG)",
      year: "2023–2025",
      scheme: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      amount: "Hundreds of Crores Across 90.66 Lakh Records",
      description: "CAG performance audit uncovered pervasive data falsification in candidate enrollment, attendance, assessment, and placement tracking across training partners.",
      consequence: "Multiple training partners were blacklisted, systemic audits enforced, and requirement for automated real-time verification initiated.",
      keyFindings: [
        "94.53% of certified candidates had missing, dummy, or invalid bank account details ('11111111111', '123456', 'N/A').",
        "Over 2.5 lakh candidates shared duplicate mobile numbers or dummy emails.",
        "Training batches were scheduled and certified on impossible dates including '31st February'.",
        "Underage candidates were certified and fake placement letters submitted without verifiable employment."
      ],
      sources: [
        {{ title: "MoneyLife: 94% Bank Details Missing in PMKVY - CAG", url: "https://www.moneylife.in/article/94-percentage-bank-details-missing-underage-candidates-certified-placements-unverifiable-in-pm-kaushal-vikas-yojana-cag/79358.html" }},
        {{ title: "The Wire: Dummy Emails and Fake Accounts in PMKVY", url: "https://m.thewire.in/article/economy/dummy-emails-strange-bank-account-numbers-closed-centres-cag-flags-multiple-issues-with-pmkvy" }}
      ]
    }},
    {{
      id: "cag-mgnrega-photo",
      title: "Rajasthan Face Authentication Attendance Scam",
      organization: "Department of Rural Development & State Audit",
      year: "2025–2026",
      scheme: "MGNREGA / VB-G-RAM-G",
      amount: "Multi-Crore Attendance Siphoning",
      description: "Investigation detected over 2.56 Lakh instances of duplicate face-authentication photos uploaded to the National Mobile Monitoring System (NMMS), with 2.05 Lakh cases originating from Jaisalmer district alone.",
      consequence: "FIRs registered against corrupt mates and contractors; high-level technical committee recommended mandatory active liveness detection.",
      keyFindings: [
        "Workers were marked present twice a day by holding up passport-size photos or smartphone screens in front of the camera.",
        "Existing NMMS app lacked active liveness detection, passive texture analysis, and depth estimation.",
        "GPS coordinates were spoofed using standard mock-location applications.",
        "No secondary cross-verification against physical work output or continuous video sampling."
      ],
      sources: [
        {{ title: "Times of India: Duplicate Face Authentication Triggers Probe", url: "https://timesofindia.indiatimes.com/city/jaipur/duplicate-face-authentication-triggers-probe-into-crore-rupee-irregularities-in-jaisalmers-vb-g-ram-g-works/articleshow/133442912.cms" }},
        {{ title: "The News Mill: Over 2 Lakh Photo Duplication Cases Detected", url: "https://thenewsmill.com/2026/08/over-2-lakh-photo-duplication-cases-detected-in-rajasthans-jaisalmer-under-vb-g-ramg-scheme/" }}
      ]
    }},
    {{
      id: "cag-kalyana-lakshmi",
      title: "Kalyana Lakshmi & Social Assistance Lapses",
      organization: "CAG Audit Report",
      year: "2024–2025",
      scheme: "State Social Welfare Grant Schemes",
      amount: "₹55 Crore Misused",
      description: "CAG exposed ₹55 Crore in unauthorized disbursements due to lack of real-time beneficiary authentication, absence of centralized verification, and duplicate benefit claims across districts.",
      consequence: "Mandate for Aadhaar-linked real-time validation and digitized inspection logs.",
      keyFindings: [
        "Disbursements made without verifying on-ground eligibility or living conditions.",
        "District welfare officers processed grants without independent field audit corroboration.",
        "No digital audit trail linking field inspection reports with photo/video metadata."
      ],
      sources: [
        {{ title: "TMV News: ₹55 Crore Misused - CAG Exposes Lapses", url: "https://tmv.in/article/55-crore-misused-cag-exposes-lapses-in-kalyana-lakshmi-scheme" }}
      ]
    }}
  ],

  schemesCoverage: [
    {{
      category: "Education & Hostels",
      institutions: "SC/ST Residential Hostels, GIA Hostels, Eklavya Model Schools",
      schemes: ["Post-Matric Scholarship Scheme", "Pre-Matric Scholarship", "PM-AJAY (Adarsh Gram & Hostels)", "Babu Jagjivan Ram Chhatrawas Yojana"],
      currentMethod: "Annual manual inspections, paper attendance, GIA Portal form submissions",
      soulNetraEnhancement: "Continuous CCTV occupancy estimation, edge headcount verification, geo-tagged student check-in, random video call validation"
    }},
    {{
      category: "De-Addiction & Rehabilitation",
      institutions: "IRCAs (Integrated Rehab Centres), DDACs (District De-Addiction Centres), ATFs (Addiction Treatment Facilities)",
      schemes: ["NAPDDR (National Action Plan for Drug Demand Reduction)", "Nasha Mukt Bharat Abhiyaan (NMBA)"],
      currentMethod: "Quarterly inspection by PMU / District Committees; self-reported patient admission logs",
      soulNetraEnhancement: "Real-time doctor/counselor presence detection, inpatient bed occupancy verification, privacy-preserving face blurring"
    }},
    {{
      category: "Senior Citizens Welfare",
      institutions: "Old Age Homes, Continuous Care Homes, Respite Centres",
      schemes: ["AVYAY (Atal Vayo Abhyuday Yojana)", "Senior Citizen Welfare Fund Programs"],
      currentMethod: "Yearly physical inspection, photo uploads on GIA portal",
      soulNetraEnhancement: "Resident headcount monitoring, medical staff attendance tracking, nutrition & facility cleanliness video audit"
    }},
    {{
      category: "Skill Development & Transgender/Beggary Rehab",
      institutions: "Skill Training Centres, Garima Greh (Transgender Shelters), Beggary Rehabilitation Centres",
      schemes: ["SMILE (Support for Marginalised Individuals)", "PM-DAKSH (Skill Training)", "SHREYAS"],
      currentMethod: "Biometric thumb attendance (easily shared), periodic training partner audit",
      soulNetraEnhancement: "Sequential MFA with 3D liveness, classroom occupancy matching with enrolled batch list, cross-scheme fraud detection"
    }}
  ],

  tenGaps: [
    {{
      id: 1,
      title: "No Real-Time CCTV Integration for Welfare",
      problem: "Existing smart city and police camera networks (like Andhra CCTV360 or Gujarat 80k cameras) focus purely on law enforcement. Social welfare centers have disconnected standalone CCTV DVRs with zero central visibility.",
      solution: "SOUL-NETRA provides a lightweight RTSP/WebRTC edge gateway streaming metadata & anomaly clips to DoSJE central dashboard."
    }},
    {{
      id: 2,
      title: "No AI Video Anomaly Detection (VAD)",
      problem: "Audits rely entirely on humans viewing recordings after fraud occurs. Zero proactive detection of ghost hostels, empty classrooms, or missing staff.",
      solution: "Real-time Deep Learning VAD (97%+ AUC) detecting 0-occupancy, abnormal drop-offs, and unattended facilities."
    }},
    {{
      id: 3,
      title: "Advance-Notice Inspection Vulnerability",
      problem: "Institutions receive days of advance notice before PMU or officer visits, allowing private trusts to stage attendance and borrow students/patients.",
      solution: "Algorithmic surprise inspection dispatcher assigning inspections only 2 hours in advance via encrypted push notifications."
    }},
    {{
      id: 4,
      title: "Zero Cross-Verification Across Data Silos",
      problem: "Attendance registers, geotagged photos, CCTV footage, and meal expense claims are never cross-correlated.",
      solution: "Multimodal cross-verification engine reconciling biometric attendance + CCTV headcount + GPS location + food log volume."
    }},
    {{
      id: 5,
      title: "No Central Real-Time Command Dashboard",
      problem: "Ministry and state headquarters operate on delayed quarterly reports and offline files with no macro-level institutional risk heatmaps.",
      solution: "Central XAI Dashboard with live risk scoring, geofence status, offline alerts, and live video verification feeds."
    }},
    {{
      id: 6,
      title: "Vulnerability to Biometric & Photo Spoofing",
      problem: "Systems like NMMS allow static photo reuse (2.56 Lakh duplicate cases in Rajasthan). Standalone fingerprint devices suffer from fake silicone thumbs.",
      solution: "Sequential MFA combining dynamic geofencing, passive texture analysis, 3D depth check, and active random motion challenges (96.67% accuracy)."
    }},
    {{
      id: 7,
      title: "Absence of Direct Beneficiary Verification",
      problem: "Beneficiaries are never contacted directly by central officials to verify if they actually reside or receive benefits.",
      solution: "Automated random 30-second direct video call verification module connecting DoSJE desk officers directly to enrolled residents."
    }},
    {{
      id: 8,
      title: "Siloed Scheme Operations (Multi-Scheme NGOs)",
      problem: "An NGO running both an Old Age Home (AVYAY) and a De-addiction Centre (NAPDDR) is audited by separate teams without shared risk intelligence.",
      solution: "Unified NGO Entity Knowledge Graph correlating anomaly scores across all central and state schemes."
    }},
    {{
      id: 9,
      title: "11-Month Annual Fraud Window",
      problem: "Annual inspection cadence leaves institutions unmonitored for 350+ days each year.",
      solution: "Continuous automated health-checks via edge CCTV telemetry + random algorithmic surprise inspection triggers."
    }},
    {{
      id: 10,
      title: "Privacy Backlash & DPDP Act Non-Compliance",
      problem: "Blanket video surveillance infringes on patient and student privacy, risking legal challenge under DPDP Act 2023.",
      solution: "Edge-based automated face-blurring for non-target individuals, privacy masking in private zones, strict purpose limitation, and 30-90 day auto-purge."
    }}
  ],

  architectureLayers: [
    {{
      layer: "Layer 1",
      name: "Edge & Field Ingestion Layer",
      color: "#0066FF",
      components: [
        "Edge CCTV Gateway (RTSP / ONVIF / WebRTC Stream Ingest)",
        "Mobile App for PMU Field Inspectors (Flutter / React Native)",
        "Beneficiary Verification Portal & PWA",
        "Hardware Integrity Agent (Detects Mock GPS, Root/Jailbreak)"
      ],
      description: "Captures field telemetry, live RTSP video feeds from institutions, and geo-stamped inspection evidence with cryptographic nonces."
    }},
    {{
      layer: "Layer 2",
      name: "AI Video Anomaly Detection & Computer Vision",
      color: "#00D26A",
      components: [
        "YOLOv10 / Lightweight CNN Headcount & Occupancy Estimation",
        "Video Anomaly Detection (VAD) Engine (97%+ AUC)",
        "Camera Tampering & Blackout Detector (SSIM / Frame Freeze)",
        "Doctor & Caretaker Activity Recognition Module"
      ],
      description: "Performs real-time visual analytics on premises feeds to detect ghost facilities, empty classrooms, and sudden occupancy anomalies."
    }},
    {{
      layer: "Layer 3",
      name: "Sequential Multi-Factor Authentication (MFA)",
      color: "#FF9F0A",
      components: [
        "Dynamic Geofence Polygon Lock (WGS84 GPS + Cell Triangulation)",
        "Active / Passive Liveness Detection (Blink, Turn, Texture Analysis)",
        "Anti-Deepfake & Anti-Photo Spoofing Filter (96.67% Accuracy)",
        "Device Biometric Secure Enclave Integration"
      ],
      description: "Eliminates attendance manipulation and ghost staff by enforcing multi-layered, sequential proof of physical presence."
    }},
    {{
      layer: "Layer 4",
      name: "Algorithmic Surprise Inspection Dispatcher",
      color: "#9C27B0",
      components: [
        "Risk-Weighted Inspection Priority Algorithm",
        "Just-in-Time (2-Hour) Encrypted Dispatch Service",
        "Dynamic Travelling-Salesman Route Optimization",
        "Geo-Locked Offline-Capable Inspection Checklist"
      ],
      description: "Replaces predictable scheduled inspections with unpredictable, AI risk-weighted surprise visits, eliminating staged setups."
    }},
    {{
      layer: "Layer 5",
      name: "Explainable AI (XAI) Command & Anomaly Dashboard",
      color: "#E91E63",
      components: [
        "National & State Institutional Risk Heatmap",
        "Explainable AI Anomaly Insights (e.g. 'CCTV: 0 vs Register: 50')",
        "Cross-Scheme NGO Fraud Correlation Engine",
        "Grant-in-Aid Recommendation & Sanction Blocker"
      ],
      description: "Provides DoSJE leadership and state directors with intuitive, actionable dashboards and automated fraud alerts with attached visual evidence."
    }},
    {{
      layer: "Layer 6",
      name: "Beneficiary Direct Verification & Grievance Redressal",
      color: "#00BCD4",
      components: [
        "Random 30-Second WebRTC Direct Video Call Engine",
        "Multilingual Interactive Voice Response (IVR) Verification",
        "Zero-Knowledge Encrypted Whistleblower Channel",
        "CPGRAMS & DoSJE Grievance Portal API Integration"
      ],
      description: "Empowers direct citizen verification and enables anonymous reporting of substandard food, physical abuse, or misappropriation."
    }}
  ],

  literatureReview: [
    {{
      id: 1,
      title: "Intelligent Video Surveillance: Systematic Review of Deep Learning (2018–2025)",
      authors: "Multiple Authors",
      year: 2026,
      journal: "AIET / Sciltp",
      problem: "Comprehensive review of 73 deep learning studies on video anomaly detection (VAD) and human activity recognition.",
      method: "Taxonomy of 10 model families: Autoencoders, Spatio-Temporal Graph CNNs, Transformers, Hybrid GANs.",
      finding: "Spatio-Temporal Transformers and Memory-Augmented Autoencoders achieve state-of-the-art anomaly localization with >97% AUC.",
      relevance: "Direct foundation for SOUL-NETRA CCTV video anomaly detection engine in welfare institutions.",
      link: "https://www.sciltp.com/journals/aiet/articles/2606004343"
    }},
    {{
      id: 2,
      title: "Deep Learning for Video Anomaly Detection: A Systematic Review",
      authors: "Chen et al.",
      year: 2026,
      journal: "IEEE TNNLS",
      problem: "Benchmarking unsupervised video anomaly detection under challenging real-world lighting and occlusions.",
      method: "Dual-stream CNN-Transformer architecture predicting optical flow and reconstruction error.",
      finding: "Achieved 97.4% AUC on ShanghaiTech and 92.1% on UCF-Crime benchmarks with low false-alarm rate.",
      relevance: "Provides exact mathematical framework for detecting empty premises and irregular crowds.",
      link: "https://colab.ws/articles/10.1109%2Faccess.2025.3631395"
    }},
    {{
      id: 3,
      title: "Sequential Multi-Factor Authentication for Mobile Attendance with Liveness Detection",
      authors: "Pradana et al.",
      year: 2026,
      journal: "JAIC (Journal of Applied Informatics and Computing)",
      problem: "Preventing photo reuse, video replay, and GPS mock attacks in decentralized attendance systems.",
      method: "Sequential MFA pipeline: GPS geofencing -> Hardware signature -> Passive texture liveness -> Active blink/motion challenge.",
      finding: "96.67% overall authentication accuracy; 100% rejection rate against printed photos and 2D digital screen replays.",
      relevance: "Direct implementation blueprint for SOUL-NETRA inspector and beneficiary attendance module.",
      link: "https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/13629"
    }},
    {{
      id: 4,
      title: "Explainable AI in Visual Surveillance: Enhancing Trust in Automated Monitoring",
      authors: "Al-Huda et al.",
      year: 2026,
      journal: "MDPI Sensors / Frontiers in Computer Science",
      problem: "Black-box AI alert systems cause alert fatigue and lack trust among government oversight auditors.",
      method: "Integrated Grad-CAM visual heatmaps with natural language explanation generators for detected anomalies.",
      finding: "Increased human auditor decision confidence by 44% and cut manual review verification time by 62%.",
      relevance: "Powers the Explainable Anomaly Cards on the DoSJE central executive dashboard.",
      link: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1762332/full"
    }},
    {{
      id: 5,
      title: "Smart Attendance System Using Geofencing and Face Recognition for Welfare Monitoring",
      authors: "Suryawanshi et al.",
      year: 2025,
      journal: "IJPREMS / IRE Journals",
      problem: "Field validation of biometric geofenced tracking in remote welfare centers with variable connectivity.",
      method: "Haar-Cascade + MobileNetV3 face embeddings combined with Haversine polygon distance verification.",
      finding: "Sub-second verification time on mid-range Android devices with local caching and asynchronous batch upload.",
      relevance: "Validates edge performance on low-cost government tablets and inspector mobile devices.",
      link: "https://www.ijprems.com/ijprems-paper/smart-attendance-system-using-geofencing-and-face-recognition"
    }},
    {{
      id: 6,
      title: "Privacy-Preserving Video Analytics via Dynamic Edge Face Redaction",
      authors: "Kumar et al.",
      year: 2026,
      journal: "MDPI Computers / Nature Scientific Reports",
      problem: "Ensuring video surveillance compliance with stringent privacy laws like DPDP Act 2023 and GDPR.",
      method: "On-device lightweight Gaussian blur and pixelation applied to all non-authorized facial regions before stream transmission.",
      finding: "Zero leakage of bystander biometric identifiers while retaining 99.1% of crowd headcount estimation accuracy.",
      relevance: "Forms the core privacy and DPDP Act compliance architecture for SOUL-NETRA.",
      link: "https://www.mdpi.com/2073-431X/14/9/374"
    }}
  ],

  benchmarkComparison: [
    {{
      feature: "Primary Focus",
      soulNetra: "Social Welfare & GIA Institutional Monitoring",
      cctv360: "City Surveillance & Traffic Enforcement",
      gujaratPolice: "Law Enforcement & Crime Investigation",
      nmms: "Rural Employment (NREGA) Muster Rolls",
      giaApp: "Periodic Manual GIA Form Submissions",
      mosjePortal: "MIS & Fund Management Dashboard"
    }},
    {{
      feature: "Real-Time CCTV Ingest",
      soulNetra: "Yes (Lightweight Edge Gateway)",
      cctv360: "Yes (Heavy Enterprise VMS)",
      gujaratPolice: "Yes (Dedicated Police Network)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No"
    }},
    {{
      feature: "AI Anomaly Detection",
      soulNetra: "Yes (Ghost Hostels, 0-Occupancy, Headcount)",
      cctv360: "Yes (Traffic, ANPR, Crowds)",
      gujaratPolice: "Yes (Facial Recognition, Suspect Tracking)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No (Only Static Rule Checks)"
    }},
    {{
      feature: "Sequential Anti-Spoofing MFA",
      soulNetra: "Yes (3D Liveness + Geofence + Mock Check)",
      cctv360: "N/A (Stationary Cameras)",
      gujaratPolice: "N/A",
      nmms: "No (Vulnerable to Static Photos)",
      giaApp: "No",
      mosjePortal: "N/A"
    }},
    {{
      feature: "Algorithmic Surprise Inspection Dispatch",
      soulNetra: "Yes (2-Hr JIT Risk-Weighted Dispatch)",
      cctv360: "No",
      gujaratPolice: "Yes (Patrol Beat Allocation)",
      nmms: "No",
      giaApp: "No (Pre-Scheduled Visits)",
      mosjePortal: "No"
    }},
    {{
      feature: "DPDP Act 2023 Face Blurring",
      soulNetra: "Yes (Edge Privacy Redaction)",
      cctv360: "No (Full Identification)",
      gujaratPolice: "No (Exempted Law Enforcement)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "N/A"
    }},
    {{
      feature: "Direct Beneficiary Video Call Audit",
      soulNetra: "Yes (Automated Random 30s WebRTC Calls)",
      cctv360: "No",
      gujaratPolice: "No",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No"
    }},
    {{
      feature: "Cross-Scheme NGO Fraud Correlation",
      soulNetra: "Yes (Unified Knowledge Graph across 30+ Schemes)",
      cctv360: "No",
      gujaratPolice: "No",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "Partial (Separate Scheme Modules)"
    }}
  ],

  dpdpCompliance: [
    {{
      section: "Section 6 (Consent & Purpose)",
      requirement: "Notice and explicit lawful purpose for monitoring in welfare settings.",
      implementation: "Signage placed at institution premises; terms of Grant-in-Aid incorporate real-time monitoring clauses."
    }},
    {{
      section: "Section 7 (Data Minimization)",
      requirement: "Collect only strictly necessary biometric and visual data.",
      implementation: "Edge devices process video locally and transmit only numerical headcounts, occupancy status, and blurred anomaly clips."
    }},
    {{
      section: "Section 8 (Data Security & Safeguards)",
      requirement: "Prevent unauthorized access, tampering, or leaking of personal records.",
      implementation: "AES-256 encrypted video streams, SHA-256 hash chains for audit logs, and hardware-backed device keys."
    }},
    {{
      section: "Section 9 (Data Retention Limits)",
      requirement: "Personal data must not be stored beyond the necessary verification period.",
      implementation: "Automated FIFO lifecycle policy: Routine CCTV logs purged after 30 days; anomaly audit evidence retained for 90 days."
    }},
    {{
      section: "Section 16 (Sovereign Data Storage)",
      requirement: "Cross-border data transfer restrictions; sensitive data kept within India.",
      implementation: "Hosted strictly on MeitY-empanelled Tier-III/IV Cloud Data Centers located in India (NIC / AWS Mumbai / Azure India)."
    }}
  ],

  threatMitigation: [
    {{
      threat: "Deepfake & Printed Photo Spoofing",
      attackVector: "Holding high-res photos or deepfake video loops in front of inspector/beneficiary phone camera.",
      defense: "Multi-spectral reflection analysis, randomized micro-motion prompts (blink, smile, head rotation), and passive frequency analysis (96.67% accuracy)."
    }},
    {{
      threat: "GPS Mock Location & Virtual Emulators",
      attackVector: "Using developer mock location apps, rooted devices, or Android emulators to fake being inside the hostel geofence.",
      defense: "Fused Location Provider API + Cell Tower ID + Wi-Fi BSSID triangulation + native safety net / Play Integrity API checks."
    }},
    {{
      threat: "CCTV Tampering, Lens Occlusion & Loop Feed",
      attackVector: "Covering camera lenses with tape, turning cameras toward blank walls, or injecting static video loop files.",
      defense: "Structural Similarity Index (SSIM) anomaly detector flagging static feeds (>10 mins identical frame) and sudden dark/occluded frames."
    }},
    {{
      threat: "Rural Connectivity Dropouts & Offline Operation",
      attackVector: "Remote welfare institutions in hilly or tribal areas with zero 4G/5G mobile signal during inspections.",
      defense: "Encrypted offline SQLite database with cryptographic nonces, tamper-proof hardware clock validation, and automatic queued sync upon reconnection."
    }},
    {{
      threat: "Inspector-NGO Collusion & Advance Tip-offs",
      attackVector: "Corrupt field inspectors alerting NGO managers in advance to stage fake residents and borrow outside students.",
      defense: "Algorithmic surprise assignment revealed only 2 hours prior, mandatory dual-officer cross-signing, and AI anomaly alerts triggering independent re-audits."
    }}
  ],

  presentationDeck: [
    {{
      slide: 1,
      title: "The Crisis of Social Sector Audits",
      subtitle: "Why India's Welfare Schemes Lose Crores to Ghost Facilities",
      bulletPoints: [
        "CAG Audit 2024–2026 exposed ₹1.62 Crore paid to 6 ghost hostels in Maharashtra with 0 students across 4 years.",
        "PMKVY audit revealed 94.53% fake bank details and classes on impossible dates like '31st February'.",
        "Rajasthan MGNREGA uncovered 2.56 Lakh duplicate face photos used for attendance fraud.",
        "Root cause: Periodic annual inspections create an 11-month fraud window with advance notice allowing staged setups."
      ]
    }},
    {{
      slide: 2,
      title: "Problem Statement: SIH26095",
      subtitle: "Ministry of Social Justice & Empowerment (MoSJE)",
      bulletPoints: [
        "Challenge: Develop a centralized smart real-time monitoring and inspection mobile application.",
        "Scope: SC/ST hostels, De-addiction centres (IRCAs/DDACs), Old Age Homes (AVYAY), and GIA skill centres.",
        "Goal: Eliminate ghost institutions, prevent attendance manipulation, automate surprise inspections, and enforce DPDP compliance."
      ]
    }},
    {{
      slide: 3,
      title: "The 10 Systemic Monitoring Gaps",
      subtitle: "Evidence-Based Diagnosis of Current Failures",
      bulletPoints: [
        "1. No real-time CCTV integration in welfare | 2. Absence of AI Video Anomaly Detection",
        "3. Predictable scheduled inspections | 4. No cross-verification across data silos",
        "5. No central command dashboard | 6. Vulnerability to static photo biometric spoofing",
        "7. Lack of direct beneficiary video verification | 8. Siloed multi-scheme NGO tracking",
        "9. 11-month unmonitored fraud window | 10. Privacy risks under DPDP Act 2023"
      ]
    }},
    {{
      slide: 4,
      title: "Introducing SOUL-NETRA",
      subtitle: "Smart Optical Ubiquitous Layer for Next-Gen Evaluation, Tracking & Risk Assessment",
      bulletPoints: [
        "Multi-layered AI-driven monitoring ecosystem transforming passive CCTV into active intelligence.",
        "Lightweight Edge CCTV Gateway connecting thousands of facilities with sub-second anomaly detection.",
        "Sequential Anti-Spoofing MFA with 96.67% accuracy against deepfakes and photo reuse.",
        "Algorithmic Surprise Inspection Dispatcher assigning unannounced visits 2 hours prior."
      ]
    }},
    {{
      slide: 5,
      title: "Multi-Layer System Architecture",
      subtitle: "From Edge Telemetry to National Command Center",
      bulletPoints: [
        "Layer 1: Edge & Field Ingestion (RTSP streams, mobile inspector app, beneficiary portal).",
        "Layer 2: AI Video Anomaly Engine (YOLOv10 headcount, empty premises detection >97% AUC).",
        "Layer 3: Sequential MFA & Anti-Spoofing (Dynamic geofencing + 3D active liveness).",
        "Layer 4: Algorithmic Surprise Dispatcher (Risk-weighted 2-hour JIT assignment).",
        "Layer 5: Central XAI Command Dashboard (Risk heatmaps & explainable anomaly cards).",
        "Layer 6: Citizen Verification & Grievance (Random direct video calls & encrypted reporting)."
      ]
    }},
    {{
      slide: 6,
      title: "AI Anomaly Detection & Sequential MFA",
      subtitle: "State-of-the-Art Computer Vision & Security",
      bulletPoints: [
        "Deep Learning Video Anomaly Detection (VAD) achieving 97%+ AUC on standard benchmarks.",
        "Real-time headcount comparison against enrolled beneficiary rosters.",
        "Camera tampering, lens occlusion, and video freeze automated alerts.",
        "Sequential MFA pipeline: WGS84 Geofence -> Hardware Token -> Passive Texture -> Active Blink Challenge."
      ]
    }},
    {{
      slide: 7,
      title: "Algorithmic Surprise Inspection Workflow",
      subtitle: "Eliminating the Staged Inspection Phenomenon",
      bulletPoints: [
        "AI risk engine calculates dynamic institutional threat scores based on CCTV telemetry and attendance variance.",
        "High-risk institutions automatically prioritized for unannounced field audits.",
        "Inspectors receive encrypted assignment details only 2 hours before arrival via mobile push notification.",
        "Inspection forms are geo-locked and require cryptographic timestamping at the physical site."
      ]
    }},
    {{
      slide: 8,
      title: "Central XAI Command Dashboard",
      subtitle: "Actionable Intelligence for MoSJE & State Leadership",
      bulletPoints: [
        "National & State GIS heatmap visualizing high-risk, moderate-risk, and verified institutions.",
        "Explainable AI (XAI) anomaly cards: Displays exact discrepancy (e.g. 'CCTV: 0 vs Register: 50').",
        "Direct link between anomaly score and automated Grant-in-Aid disbursement holds.",
        "Unified NGO Knowledge Graph tracking compliance across multiple central and state schemes."
      ]
    }},
    {{
      slide: 9,
      title: "DPDP Act 2023 & Privacy Architecture",
      subtitle: "Balancing Accountability with Fundamental Rights",
      bulletPoints: [
        "Edge-based automated face blurring for non-target bystanders, students, and patients.",
        "Zero biometric streaming: Video processed at the edge, sending only metadata to central servers.",
        "Strict 30 to 90-day automated FIFO video retention policy.",
        "Sovereign data hosting strictly on MeitY-empanelled Tier-III/IV Cloud Data Centers in India."
      ]
    }},
    {{
      slide: 10,
      title: "Competitive Advantage & Benchmark",
      subtitle: "Why Existing Solutions Fall Short",
      bulletPoints: [
        "Unlike police systems (CCTV360, Gujarat Police), SOUL-NETRA is purpose-built for social welfare auditing.",
        "Unlike NMMS and GIA Apps, SOUL-NETRA incorporates active liveness, edge CCTV, and AI anomaly detection.",
        "Provides end-to-end integration across all 30+ DoSJE schemes under a single unified dashboard."
      ]
    }},
    {{
      slide: 11,
      title: "Tech Stack & Implementation Roadmap",
      subtitle: "Production-Ready, Scalable & Interoperable",
      bulletPoints: [
        "Frontend: Flutter Mobile App (Cross-platform Android/iOS) + React/Next.js Web Command Portal.",
        "Backend: FastAPI / Node.js Microservices + PostgreSQL (TimescaleDB) + Redis Caching.",
        "AI/ML Engine: PyTorch / ONNX Runtime + OpenCV + YOLOv10 + Spatio-Temporal Transformers.",
        "Rollout: Phase 1 (Pilot in 500 SC Hostels/IRCAs) -> Phase 2 (State-wide scaling) -> Phase 3 (Pan-India MoSJE integration)."
      ]
    }},
    {{
      slide: 12,
      title: "Expected Impact & Return on Investment",
      subtitle: "Transforming Social Justice Delivery in India",
      bulletPoints: [
        "80%+ Reduction in Ghost Institutions and fund siphoning.",
        "60% Faster Grant Processing for compliant, high-performing NGOs.",
        "10x Improvement in Inspection Efficiency through risk-targeted surprise audits.",
        "Ensures 100% of public welfare funds reach genuine students, elderly citizens, and rehabilitating patients."
      ]
    }}
  ],

  references: {json.dumps(unique_refs, indent=2, ensure_ascii=False)}
}};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = SOUL_NETRA_DATA;
}}
"""

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(data_js_content)

print(f"Successfully generated data.js! Size: {len(data_js_content)} bytes")
