// SOUL-NETRA: Smart Real-Time Monitoring & Inspection Platform Data File
// Complete extracted data from the 48-page research document for SIH26095 (MoSJE)

const SOUL_NETRA_DATA = {
  metadata: {
    id: "SIH26095",
    title: "SOUL-NETRA: Smart Real-Time Monitoring & Inspection Mobile App",
    subtitle: "AI-Powered Video Analytics, Sequential Anti-Spoofing MFA & Algorithmic Surprise Inspection Engine",
    organization: "Ministry of Social Justice & Empowerment (MoSJE)",
    department: "Department of Social Justice and Empowerment (DoSJE)",
    category: "Software",
    theme: "Miscellaneous",
    statement: "Develop a centralized mobile application for real-time monitoring and inspection of institutions/NGOs/facilities receiving Grant-in-Aid (GIA) or operating under MoSJE schemes."
  },

  keyMetrics: [
    {
      value: "₹1.62 Cr",
      label: "Disbursed to Ghost Hostels",
      subtext: "CAG Audit in Maharashtra: 6 non-functional hostels received funds with 0 students across 4 years",
      icon: "alert-triangle",
      color: "#FF5252",
      tag: "CAG Audit"
    },
    {
      value: "94.53%",
      label: "Fake Bank Details (PMKVY)",
      subtext: "90.66 Lakh records had missing/dummy bank accounts ('11111111111', '123456', 'N/A')",
      icon: "file-x",
      color: "#FF9100",
      tag: "Data Fraud"
    },
    {
      value: "2.56 Lakh",
      label: "Duplicate Face Photos",
      subtext: "Rajasthan MGNREGA attendance fraud; 2.05 Lakh from Jaisalmer alone using static photo reuse",
      icon: "users-x",
      color: "#FF5252",
      tag: "Biometric Spoofing"
    },
    {
      value: "11 Months",
      label: "Annual Fraud Window",
      subtext: "Institutions operate without oversight between infrequent yearly scheduled inspections",
      icon: "clock",
      color: "#FFD600",
      tag: "Inspection Gap"
    },
    {
      value: "97%+ AUC",
      label: "AI Video Anomaly Detection",
      subtext: "State-of-the-art Deep Learning VAD benchmarks for detecting empty premises and irregular occupancy",
      icon: "cpu",
      color: "#00E676",
      tag: "AI Benchmark"
    },
    {
      value: "96.67%",
      label: "Sequential MFA Accuracy",
      subtext: "Multi-factor authentication combining dynamic geofencing, active liveness & anti-spoofing challenge",
      icon: "shield-check",
      color: "#00E676",
      tag: "Security Benchmark"
    },
    {
      value: "1,500",
      label: "PMU Inspections (2022)",
      subtext: "Only ~1,500 institutions inspected manually per year across tens of thousands of welfare centers",
      icon: "eye-off",
      color: "#00B0FF",
      tag: "Field Coverage"
    },
    {
      value: "100%",
      label: "DPDP Act 2023 Compliant",
      subtext: "Edge-based automated face blurring, purpose limitation, sovereign storage & 30-90 day auto-purge",
      icon: "lock",
      color: "#651FFF",
      tag: "Privacy"
    }
  ],

  cagAudits: [
    {
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
        { title: "CAG Compliance Audit Report 2024-25", url: "https://cag.gov.in/en/audit-report/details/124217" },
        { title: "India Today: Maharashtra Ghost Hostels Scam", url: "https://www.indiatoday.in/amp/india/story/maharashtra-ghost-hostels-cag-rs-1-62-crore-six-non-functional-hostels-ptag-2946602-2026-07-14" },
        { title: "NDTV: Zero Occupants Regular Funding", url: "https://www.ndtv.com/india-news/auditor-flags-ghost-hostels-in-maharashtra-zero-occupants-regular-funding-11770472" }
      ]
    },
    {
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
        { title: "MoneyLife: 94% Bank Details Missing in PMKVY - CAG", url: "https://www.moneylife.in/article/94-percentage-bank-details-missing-underage-candidates-certified-placements-unverifiable-in-pm-kaushal-vikas-yojana-cag/79358.html" },
        { title: "The Wire: Dummy Emails and Fake Accounts in PMKVY", url: "https://m.thewire.in/article/economy/dummy-emails-strange-bank-account-numbers-closed-centres-cag-flags-multiple-issues-with-pmkvy" }
      ]
    },
    {
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
        { title: "Times of India: Duplicate Face Authentication Triggers Probe", url: "https://timesofindia.indiatimes.com/city/jaipur/duplicate-face-authentication-triggers-probe-into-crore-rupee-irregularities-in-jaisalmers-vb-g-ram-g-works/articleshow/133442912.cms" },
        { title: "The News Mill: Over 2 Lakh Photo Duplication Cases Detected", url: "https://thenewsmill.com/2026/08/over-2-lakh-photo-duplication-cases-detected-in-rajasthans-jaisalmer-under-vb-g-ramg-scheme/" }
      ]
    },
    {
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
        { title: "TMV News: ₹55 Crore Misused - CAG Exposes Lapses", url: "https://tmv.in/article/55-crore-misused-cag-exposes-lapses-in-kalyana-lakshmi-scheme" }
      ]
    }
  ],

  schemesCoverage: [
    {
      category: "Education & Hostels",
      institutions: "SC/ST Residential Hostels, GIA Hostels, Eklavya Model Schools",
      schemes: ["Post-Matric Scholarship Scheme", "Pre-Matric Scholarship", "PM-AJAY (Adarsh Gram & Hostels)", "Babu Jagjivan Ram Chhatrawas Yojana"],
      currentMethod: "Annual manual inspections, paper attendance, GIA Portal form submissions",
      soulNetraEnhancement: "Continuous CCTV occupancy estimation, edge headcount verification, geo-tagged student check-in, random video call validation"
    },
    {
      category: "De-Addiction & Rehabilitation",
      institutions: "IRCAs (Integrated Rehab Centres), DDACs (District De-Addiction Centres), ATFs (Addiction Treatment Facilities)",
      schemes: ["NAPDDR (National Action Plan for Drug Demand Reduction)", "Nasha Mukt Bharat Abhiyaan (NMBA)"],
      currentMethod: "Quarterly inspection by PMU / District Committees; self-reported patient admission logs",
      soulNetraEnhancement: "Real-time doctor/counselor presence detection, inpatient bed occupancy verification, privacy-preserving face blurring"
    },
    {
      category: "Senior Citizens Welfare",
      institutions: "Old Age Homes, Continuous Care Homes, Respite Centres",
      schemes: ["AVYAY (Atal Vayo Abhyuday Yojana)", "Senior Citizen Welfare Fund Programs"],
      currentMethod: "Yearly physical inspection, photo uploads on GIA portal",
      soulNetraEnhancement: "Resident headcount monitoring, medical staff attendance tracking, nutrition & facility cleanliness video audit"
    },
    {
      category: "Skill Development & Transgender/Beggary Rehab",
      institutions: "Skill Training Centres, Garima Greh (Transgender Shelters), Beggary Rehabilitation Centres",
      schemes: ["SMILE (Support for Marginalised Individuals)", "PM-DAKSH (Skill Training)", "SHREYAS"],
      currentMethod: "Biometric thumb attendance (easily shared), periodic training partner audit",
      soulNetraEnhancement: "Sequential MFA with 3D liveness, classroom occupancy matching with enrolled batch list, cross-scheme fraud detection"
    }
  ],

  tenGaps: [
    {
      id: 1,
      title: "No Real-Time CCTV Integration for Welfare",
      problem: "Existing smart city and police camera networks (like Andhra CCTV360 or Gujarat 80k cameras) focus purely on law enforcement. Social welfare centers have disconnected standalone CCTV DVRs with zero central visibility.",
      solution: "SOUL-NETRA provides a lightweight RTSP/WebRTC edge gateway streaming metadata & anomaly clips to DoSJE central dashboard."
    },
    {
      id: 2,
      title: "No AI Video Anomaly Detection (VAD)",
      problem: "Audits rely entirely on humans viewing recordings after fraud occurs. Zero proactive detection of ghost hostels, empty classrooms, or missing staff.",
      solution: "Real-time Deep Learning VAD (97%+ AUC) detecting 0-occupancy, abnormal drop-offs, and unattended facilities."
    },
    {
      id: 3,
      title: "Advance-Notice Inspection Vulnerability",
      problem: "Institutions receive days of advance notice before PMU or officer visits, allowing private trusts to stage attendance and borrow students/patients.",
      solution: "Algorithmic surprise inspection dispatcher assigning inspections only 2 hours in advance via encrypted push notifications."
    },
    {
      id: 4,
      title: "Zero Cross-Verification Across Data Silos",
      problem: "Attendance registers, geotagged photos, CCTV footage, and meal expense claims are never cross-correlated.",
      solution: "Multimodal cross-verification engine reconciling biometric attendance + CCTV headcount + GPS location + food log volume."
    },
    {
      id: 5,
      title: "No Central Real-Time Command Dashboard",
      problem: "Ministry and state headquarters operate on delayed quarterly reports and offline files with no macro-level institutional risk heatmaps.",
      solution: "Central XAI Dashboard with live risk scoring, geofence status, offline alerts, and live video verification feeds."
    },
    {
      id: 6,
      title: "Vulnerability to Biometric & Photo Spoofing",
      problem: "Systems like NMMS allow static photo reuse (2.56 Lakh duplicate cases in Rajasthan). Standalone fingerprint devices suffer from fake silicone thumbs.",
      solution: "Sequential MFA combining dynamic geofencing, passive texture analysis, 3D depth check, and active random motion challenges (96.67% accuracy)."
    },
    {
      id: 7,
      title: "Absence of Direct Beneficiary Verification",
      problem: "Beneficiaries are never contacted directly by central officials to verify if they actually reside or receive benefits.",
      solution: "Automated random 30-second direct video call verification module connecting DoSJE desk officers directly to enrolled residents."
    },
    {
      id: 8,
      title: "Siloed Scheme Operations (Multi-Scheme NGOs)",
      problem: "An NGO running both an Old Age Home (AVYAY) and a De-addiction Centre (NAPDDR) is audited by separate teams without shared risk intelligence.",
      solution: "Unified NGO Entity Knowledge Graph correlating anomaly scores across all central and state schemes."
    },
    {
      id: 9,
      title: "11-Month Annual Fraud Window",
      problem: "Annual inspection cadence leaves institutions unmonitored for 350+ days each year.",
      solution: "Continuous automated health-checks via edge CCTV telemetry + random algorithmic surprise inspection triggers."
    },
    {
      id: 10,
      title: "Privacy Backlash & DPDP Act Non-Compliance",
      problem: "Blanket video surveillance infringes on patient and student privacy, risking legal challenge under DPDP Act 2023.",
      solution: "Edge-based automated face-blurring for non-target individuals, privacy masking in private zones, strict purpose limitation, and 30-90 day auto-purge."
    }
  ],

  architectureLayers: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ],

  literatureReview: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ],

  benchmarkComparison: [
    {
      feature: "Primary Focus",
      soulNetra: "Social Welfare & GIA Institutional Monitoring",
      cctv360: "City Surveillance & Traffic Enforcement",
      gujaratPolice: "Law Enforcement & Crime Investigation",
      nmms: "Rural Employment (NREGA) Muster Rolls",
      giaApp: "Periodic Manual GIA Form Submissions",
      mosjePortal: "MIS & Fund Management Dashboard"
    },
    {
      feature: "Real-Time CCTV Ingest",
      soulNetra: "Yes (Lightweight Edge Gateway)",
      cctv360: "Yes (Heavy Enterprise VMS)",
      gujaratPolice: "Yes (Dedicated Police Network)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No"
    },
    {
      feature: "AI Anomaly Detection",
      soulNetra: "Yes (Ghost Hostels, 0-Occupancy, Headcount)",
      cctv360: "Yes (Traffic, ANPR, Crowds)",
      gujaratPolice: "Yes (Facial Recognition, Suspect Tracking)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No (Only Static Rule Checks)"
    },
    {
      feature: "Sequential Anti-Spoofing MFA",
      soulNetra: "Yes (3D Liveness + Geofence + Mock Check)",
      cctv360: "N/A (Stationary Cameras)",
      gujaratPolice: "N/A",
      nmms: "No (Vulnerable to Static Photos)",
      giaApp: "No",
      mosjePortal: "N/A"
    },
    {
      feature: "Algorithmic Surprise Inspection Dispatch",
      soulNetra: "Yes (2-Hr JIT Risk-Weighted Dispatch)",
      cctv360: "No",
      gujaratPolice: "Yes (Patrol Beat Allocation)",
      nmms: "No",
      giaApp: "No (Pre-Scheduled Visits)",
      mosjePortal: "No"
    },
    {
      feature: "DPDP Act 2023 Face Blurring",
      soulNetra: "Yes (Edge Privacy Redaction)",
      cctv360: "No (Full Identification)",
      gujaratPolice: "No (Exempted Law Enforcement)",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "N/A"
    },
    {
      feature: "Direct Beneficiary Video Call Audit",
      soulNetra: "Yes (Automated Random 30s WebRTC Calls)",
      cctv360: "No",
      gujaratPolice: "No",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "No"
    },
    {
      feature: "Cross-Scheme NGO Fraud Correlation",
      soulNetra: "Yes (Unified Knowledge Graph across 30+ Schemes)",
      cctv360: "No",
      gujaratPolice: "No",
      nmms: "No",
      giaApp: "No",
      mosjePortal: "Partial (Separate Scheme Modules)"
    }
  ],

  dpdpCompliance: [
    {
      section: "Section 6 (Consent & Purpose)",
      requirement: "Notice and explicit lawful purpose for monitoring in welfare settings.",
      implementation: "Signage placed at institution premises; terms of Grant-in-Aid incorporate real-time monitoring clauses."
    },
    {
      section: "Section 7 (Data Minimization)",
      requirement: "Collect only strictly necessary biometric and visual data.",
      implementation: "Edge devices process video locally and transmit only numerical headcounts, occupancy status, and blurred anomaly clips."
    },
    {
      section: "Section 8 (Data Security & Safeguards)",
      requirement: "Prevent unauthorized access, tampering, or leaking of personal records.",
      implementation: "AES-256 encrypted video streams, SHA-256 hash chains for audit logs, and hardware-backed device keys."
    },
    {
      section: "Section 9 (Data Retention Limits)",
      requirement: "Personal data must not be stored beyond the necessary verification period.",
      implementation: "Automated FIFO lifecycle policy: Routine CCTV logs purged after 30 days; anomaly audit evidence retained for 90 days."
    },
    {
      section: "Section 16 (Sovereign Data Storage)",
      requirement: "Cross-border data transfer restrictions; sensitive data kept within India.",
      implementation: "Hosted strictly on MeitY-empanelled Tier-III/IV Cloud Data Centers located in India (NIC / AWS Mumbai / Azure India)."
    }
  ],

  threatMitigation: [
    {
      threat: "Deepfake & Printed Photo Spoofing",
      attackVector: "Holding high-res photos or deepfake video loops in front of inspector/beneficiary phone camera.",
      defense: "Multi-spectral reflection analysis, randomized micro-motion prompts (blink, smile, head rotation), and passive frequency analysis (96.67% accuracy)."
    },
    {
      threat: "GPS Mock Location & Virtual Emulators",
      attackVector: "Using developer mock location apps, rooted devices, or Android emulators to fake being inside the hostel geofence.",
      defense: "Fused Location Provider API + Cell Tower ID + Wi-Fi BSSID triangulation + native safety net / Play Integrity API checks."
    },
    {
      threat: "CCTV Tampering, Lens Occlusion & Loop Feed",
      attackVector: "Covering camera lenses with tape, turning cameras toward blank walls, or injecting static video loop files.",
      defense: "Structural Similarity Index (SSIM) anomaly detector flagging static feeds (>10 mins identical frame) and sudden dark/occluded frames."
    },
    {
      threat: "Rural Connectivity Dropouts & Offline Operation",
      attackVector: "Remote welfare institutions in hilly or tribal areas with zero 4G/5G mobile signal during inspections.",
      defense: "Encrypted offline SQLite database with cryptographic nonces, tamper-proof hardware clock validation, and automatic queued sync upon reconnection."
    },
    {
      threat: "Inspector-NGO Collusion & Advance Tip-offs",
      attackVector: "Corrupt field inspectors alerting NGO managers in advance to stage fake residents and borrow outside students.",
      defense: "Algorithmic surprise assignment revealed only 2 hours prior, mandatory dual-officer cross-signing, and AI anomaly alerts triggering independent re-audits."
    }
  ],

  presentationDeck: [
    {
      slide: 1,
      title: "The Crisis of Social Sector Audits",
      subtitle: "Why India's Welfare Schemes Lose Crores to Ghost Facilities",
      bulletPoints: [
        "CAG Audit 2024–2026 exposed ₹1.62 Crore paid to 6 ghost hostels in Maharashtra with 0 students across 4 years.",
        "PMKVY audit revealed 94.53% fake bank details and classes on impossible dates like '31st February'.",
        "Rajasthan MGNREGA uncovered 2.56 Lakh duplicate face photos used for attendance fraud.",
        "Root cause: Periodic annual inspections create an 11-month fraud window with advance notice allowing staged setups."
      ]
    },
    {
      slide: 2,
      title: "Problem Statement: SIH26095",
      subtitle: "Ministry of Social Justice & Empowerment (MoSJE)",
      bulletPoints: [
        "Challenge: Develop a centralized smart real-time monitoring and inspection mobile application.",
        "Scope: SC/ST hostels, De-addiction centres (IRCAs/DDACs), Old Age Homes (AVYAY), and GIA skill centres.",
        "Goal: Eliminate ghost institutions, prevent attendance manipulation, automate surprise inspections, and enforce DPDP compliance."
      ]
    },
    {
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
    },
    {
      slide: 4,
      title: "Introducing SOUL-NETRA",
      subtitle: "Smart Optical Ubiquitous Layer for Next-Gen Evaluation, Tracking & Risk Assessment",
      bulletPoints: [
        "Multi-layered AI-driven monitoring ecosystem transforming passive CCTV into active intelligence.",
        "Lightweight Edge CCTV Gateway connecting thousands of facilities with sub-second anomaly detection.",
        "Sequential Anti-Spoofing MFA with 96.67% accuracy against deepfakes and photo reuse.",
        "Algorithmic Surprise Inspection Dispatcher assigning unannounced visits 2 hours prior."
      ]
    },
    {
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
    },
    {
      slide: 6,
      title: "AI Anomaly Detection & Sequential MFA",
      subtitle: "State-of-the-Art Computer Vision & Security",
      bulletPoints: [
        "Deep Learning Video Anomaly Detection (VAD) achieving 97%+ AUC on standard benchmarks.",
        "Real-time headcount comparison against enrolled beneficiary rosters.",
        "Camera tampering, lens occlusion, and video freeze automated alerts.",
        "Sequential MFA pipeline: WGS84 Geofence -> Hardware Token -> Passive Texture -> Active Blink Challenge."
      ]
    },
    {
      slide: 7,
      title: "Algorithmic Surprise Inspection Workflow",
      subtitle: "Eliminating the Staged Inspection Phenomenon",
      bulletPoints: [
        "AI risk engine calculates dynamic institutional threat scores based on CCTV telemetry and attendance variance.",
        "High-risk institutions automatically prioritized for unannounced field audits.",
        "Inspectors receive encrypted assignment details only 2 hours before arrival via mobile push notification.",
        "Inspection forms are geo-locked and require cryptographic timestamping at the physical site."
      ]
    },
    {
      slide: 8,
      title: "Central XAI Command Dashboard",
      subtitle: "Actionable Intelligence for MoSJE & State Leadership",
      bulletPoints: [
        "National & State GIS heatmap visualizing high-risk, moderate-risk, and verified institutions.",
        "Explainable AI (XAI) anomaly cards: Displays exact discrepancy (e.g. 'CCTV: 0 vs Register: 50').",
        "Direct link between anomaly score and automated Grant-in-Aid disbursement holds.",
        "Unified NGO Knowledge Graph tracking compliance across multiple central and state schemes."
      ]
    },
    {
      slide: 9,
      title: "DPDP Act 2023 & Privacy Architecture",
      subtitle: "Balancing Accountability with Fundamental Rights",
      bulletPoints: [
        "Edge-based automated face blurring for non-target bystanders, students, and patients.",
        "Zero biometric streaming: Video processed at the edge, sending only metadata to central servers.",
        "Strict 30 to 90-day automated FIFO video retention policy.",
        "Sovereign data hosting strictly on MeitY-empanelled Tier-III/IV Cloud Data Centers in India."
      ]
    },
    {
      slide: 10,
      title: "Competitive Advantage & Benchmark",
      subtitle: "Why Existing Solutions Fall Short",
      bulletPoints: [
        "Unlike police systems (CCTV360, Gujarat Police), SOUL-NETRA is purpose-built for social welfare auditing.",
        "Unlike NMMS and GIA Apps, SOUL-NETRA incorporates active liveness, edge CCTV, and AI anomaly detection.",
        "Provides end-to-end integration across all 30+ DoSJE schemes under a single unified dashboard."
      ]
    },
    {
      slide: 11,
      title: "Tech Stack & Implementation Roadmap",
      subtitle: "Production-Ready, Scalable & Interoperable",
      bulletPoints: [
        "Frontend: Flutter Mobile App (Cross-platform Android/iOS) + React/Next.js Web Command Portal.",
        "Backend: FastAPI / Node.js Microservices + PostgreSQL (TimescaleDB) + Redis Caching.",
        "AI/ML Engine: PyTorch / ONNX Runtime + OpenCV + YOLOv10 + Spatio-Temporal Transformers.",
        "Rollout: Phase 1 (Pilot in 500 SC Hostels/IRCAs) -> Phase 2 (State-wide scaling) -> Phase 3 (Pan-India MoSJE integration)."
      ]
    },
    {
      slide: 12,
      title: "Expected Impact & Return on Investment",
      subtitle: "Transforming Social Justice Delivery in India",
      bulletPoints: [
        "80%+ Reduction in Ghost Institutions and fund siphoning.",
        "60% Faster Grant Processing for compliant, high-performing NGOs.",
        "10x Improvement in Inspection Efficiency through risk-targeted surprise audits.",
        "Ensures 100% of public welfare funds reach genuine students, elderly citizens, and rehabilitating patients."
      ]
    }
  ],

  references: [
  {
    "id": 1,
    "title": "PIB Press Release: Key Initiatives of DoSJE (PMU inspections, 1,500 GIA institutions in 2022)",
    "url": "https://www.pib.go",
    "category": "Academic Research",
    "page": 43
  },
  {
    "id": 2,
    "title": "www.pib.gov.in: Pressreleasepage.aspx?prid=1577164&reg=48&lang=2",
    "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1577164&reg=48&lang=2",
    "category": "Government & Policy",
    "page": 45
  },
  {
    "id": 3,
    "title": "DoSJE Schemes List",
    "url": "https://socialjustice.gov.in/schemes",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 4,
    "title": "DoSJE Annual Report 2024-25",
    "url": "https://www.dosje.gov.in/documents/annual-report-2024-25-4/",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 5,
    "title": "MoSJE Uniﬁed Portal (NeGD)",
    "url": "https://negd.gov.in/our_projects/mosje-unified-portal-unified-digital-platform-for-the-dep",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 6,
    "title": "CAG Report No. 20 of 2025 (PMKVY Performance Audit)",
    "url": "https://cag.gov.in/cen/delhi-v/en/audit-report/details/123641",
    "category": "CAG Audit Reports",
    "page": 43
  },
  {
    "id": 7,
    "title": "www.nationalheraldindia.com: New cag reports flag massive govt failures wheres the outcry",
    "url": "https://www.nationalheraldindia.com/amp/story/national/new-cag-reports-flag-massive-govt-failures-wheres-the-outcry",
    "category": "CAG Audit Reports",
    "page": 45
  },
  {
    "id": 8,
    "title": "PIB Press Release: AVYAY beneﬁciaries (10,00,456 over 2023-26)",
    "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRI",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 9,
    "title": "PIB Press Release: PM-DAKSH (80,185 trainees in 2023-24)",
    "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2085",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 10,
    "title": "PIB Press Release: Post-Matric Scholarship (61.71 lakh SC beneﬁciaries, ₹7,210.80 crore)",
    "url": "https://www.pib.gov.in/",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 11,
    "title": "PIB Press Release: NAPDDR infrastructure (344 IRCAs, 145 DDACs, 155 ATFs, etc.)",
    "url": "https://www.pib.gov.in/PressRel",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 12,
    "title": "PIB Press Release: 8.20 lakh people at 768 de-addiction centres",
    "url": "https://www.morungexpress.com/82-lakh-people-av",
    "category": "Academic Research",
    "page": 43
  },
  {
    "id": 13,
    "title": "Year-End Review 2025: DoSJE schemes overview",
    "url": "https://india.lawchronicle.com/article/year-end-review-2025-overvie",
    "category": "Academic Research",
    "page": 43
  },
  {
    "id": 14,
    "title": "DD News: SC scholarship growth (5.75 lakh Pre-Matric, 16.63 lakh Post-Matric)",
    "url": "https://ddnews.gov.in/en/social-ju",
    "category": "Government & Policy",
    "page": 43
  },
  {
    "id": 15,
    "title": "Times of India: G-RAM-G face authentication scam, 2.56 lakh duplicate photos in Rajasthan",
    "url": "https://timesofindi",
    "category": "Academic Research",
    "page": 43
  },
  {
    "id": 16,
    "title": "github.com: Smart india hackathon sih 2026 problem statements",
    "url": "https://github.com/NoBugNinja/Smart-India-Hackathon-SIH-2026-Problem-Statements",
    "category": "Academic Research",
    "page": 45
  },
  {
    "id": 17,
    "title": "India Today: Maharashtra ghost hostels, ₹1.62 crore funding",
    "url": "https://www.indiatoday.in/amp/india/story/maharasht",
    "category": "Investigative News & Media",
    "page": 44
  },
  {
    "id": 18,
    "title": "MoneyLife: 94% bank details missing in PMKVY",
    "url": "https://www.moneylife.in/article/94-percentage-bank-details-missin",
    "category": "Investigative News & Media",
    "page": 44
  },
  {
    "id": 19,
    "title": "The Wire: Dummy emails, strange bank account numbers in PMKVY",
    "url": "https://m.thewire.in/article/economy/dummy",
    "category": "Investigative News & Media",
    "page": 44
  },
  {
    "id": 20,
    "title": "National Herald: One scam, many schemes — 94.53% PMKVY beneﬁciaries with invalid bank details",
    "url": "https://w",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 21,
    "title": "Careers360: Maharashtra SC, ST hostels run without wardens, 33 new hostels non-operational",
    "url": "https://news.care",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 22,
    "title": "Hindustan Times: A\u0000er CAG report, state shuts down 11 SC hostels",
    "url": "https://www.hindustantimes.com/cities/mumb",
    "category": "CAG Audit Reports",
    "page": 44
  },
  {
    "id": 23,
    "title": "Deep Learning for Video Anomaly Detection: A Review — IEEE TNNLS 2026",
    "url": "https://pubmed.ncbi.nlm.nih.gov/414",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 24,
    "title": "Intelligent Video Surveillance: Systematic Review — AIET 2026",
    "url": "https://www.sciltp.com/journals/aiet/articles/26060",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 25,
    "title": "Privacy-Preserving Video Anomaly Detection: A Survey — IEEE TNNLS 2025",
    "url": "https://pubmed.ncbi.nlm.nih.gov/409",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 26,
    "title": "Sequential Multi-Factor Authentication for Attendance Using LBPH + GPS — JAIC 2026",
    "url": "https://jurnal.polibatam.a",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 27,
    "title": "Facial and Geofencing-Based Attendance Tracking (Philippines) — MJST 2025",
    "url": "https://mjst.ustp.edu.ph/index.php/",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 28,
    "title": "Android Student Attendance with FaceNet + GPS — 2026",
    "url": "https://eprints.unram.ac.id/53245/",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 29,
    "title": "Web-Based Attendance Using ArcFace + GPS + Passive Liveness — SMATIKA 2026",
    "url": "https://jurnal.ubhinus.ac.id/inde",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 30,
    "title": "AI-Based Smart Attendance with Face Recognition + Liveness — JAAFR 2026",
    "url": "https://rjwave.org/jaafr/viewpaperfor",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 31,
    "title": "Systematic Review of Face Recognition Attendance Systems — IJERT 2025",
    "url": "https://www.ijert.org/a-systematic-revie",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 32,
    "title": "ClassVision: AI-Powered Classroom Attendance — arXiv 2026",
    "url": "https://arxiv.org/abs/2608.26173v1",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 33,
    "title": "Geo-Attendance: Multi-Signal Attendance Veriﬁcation — IJSRD 2026",
    "url": "https://ijsrd.com/Article.php?manuscript=IJSR",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 34,
    "title": "Adoption and Eﬀectiveness of AI-Based Anomaly Detection in EHR — arXiv 2026",
    "url": "https://arxiv.org/abs/2604.09630",
    "category": "Academic & Technical Research",
    "page": 44
  },
  {
    "id": 35,
    "title": "pubmed.ncbi.nlm.nih.gov: 41489948",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41489948/",
    "category": "Academic & Technical Research",
    "page": 46
  },
  {
    "id": 36,
    "title": "NMMS (NREGA Mobile Monitoring System) — Google Play",
    "url": "https://play.google.com/store/apps/details?id=com.nic.n",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 37,
    "title": "GIA Inspection App — Google Play",
    "url": "https://play.google.com/store/apps/details?id=com.irform",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 38,
    "title": "RuralOne — Google Play",
    "url": "https://play.google.com/store/apps/details?id=r.rural.ruralone",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 39,
    "title": "AwaasSo\u0000 / Awaas+ — PMAY-G geo-tagging",
    "url": "https://righttoinformation.wiki/awaasso\u0000-beneficiary-list-2026",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 40,
    "title": "DGT ITI Inspection 2.0 — Google Play",
    "url": "https://play.google.com/store/apps/details?id=com.iti.itiaﬀililation",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 41,
    "title": "CCTV360 (Andhra Pradesh) — Videonetics",
    "url": "https://www.varindia.com/news/videonetics-deploys-ai-led-cctv360-real-ti",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 42,
    "title": "Gujarat 80,000 CCTV Integration — Gujarat Police",
    "url": "https://indianexpress.com/article/explained/gujarat-cctv-integratio",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 43,
    "title": "Goa AI CCTV Network — Info-Tech Corporation Goa",
    "url": "https://completeaitraining.com/news/goa-set-to-roll-out-ai-cctv-",
    "category": "Academic Research",
    "page": 44
  },
  {
    "id": 44,
    "title": "Digital Personal Data Protection Act, 2023 — Multiple compliance guides",
    "url": "https://www.vmukti.com/answers/dpdp-",
    "category": "DPDP Act & Legal Frameworks",
    "page": 45
  },
  {
    "id": 45,
    "title": "CCTV Laws in India (DPDP Act) — Parvekshak",
    "url": "https://parvekshak.com/blog/cctv-laws-in-india/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 45
  },
  {
    "id": 46,
    "title": "DPDP and Worker CCTV — AskTheMama",
    "url": "https://askthemama.com/compliance/dpdp-worker-cctv-indian-factories/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 45
  },
  {
    "id": 47,
    "title": "UK Surveillance Camera Code of Practice (2026)",
    "url": "https://www.gov.uk/government/publications/surveillance-camera-c",
    "category": "Government & Policy",
    "page": 45
  },
  {
    "id": 48,
    "title": "UK DWP CCTV Security Policy (2025)",
    "url": "https://www.gov.uk/government/publications/dwp-procurement-security-policie",
    "category": "Government & Policy",
    "page": 45
  },
  {
    "id": 49,
    "title": "apps.apple.com: Id6502624956?platform=tv",
    "url": "https://apps.apple.com/in/app/meri-panchayat/id6502624956?platform=tv",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 50,
    "title": "apps.apple.com: Id6754450473",
    "url": "https://apps.apple.com/in/app/ework/id6754450473",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 51,
    "title": "play.google.com: Details?id=com.iti.itiaﬀililation&hl=en_in",
    "url": "https://play.google.com/store/apps/details?id=com.iti.itiaﬀililation&hl=en_IN",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 52,
    "title": "play.google.com: Details?id=com.bisagn.amrit_sarovar_site_inspection&hl=en_us",
    "url": "https://play.google.com/store/apps/details?id=com.bisagn.amrit_sarovar_site_inspection&hl=en_US",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 53,
    "title": "apps.apple.com: Id6502989161",
    "url": "https://apps.apple.com/in/app/area-oﬀicer/id6502989161",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 54,
    "title": "www.newindianexpress.com: Ai powered surveillance platform redefines policing in andhra",
    "url": "https://www.newindianexpress.com/cities/vijayawada/2026/Jul/14/ai-powered-surveillance-platform-redefines-policing-in-andhra",
    "category": "Investigative News & Media",
    "page": 46
  },
  {
    "id": 55,
    "title": "www.varindia.com: Videonetics deploys ai led cctv360 real time governance system in andhra pradesh",
    "url": "https://www.varindia.com/news/videonetics-deploys-ai-led-cctv360-real-time-governance-system-in-andhra-pradesh",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 56,
    "title": "www.devdiscourse.com: 3964460 gujarat police to host indias largest ai powered cctv hackathon",
    "url": "https://www.devdiscourse.com/article/headlines/3964460-gujarat-police-to-host-indias-largest-ai-powered-cctv-hackathon",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 57,
    "title": "www.newindianexpress.com: Bsf to replace human surveillance with ai powered monitoring system",
    "url": "https://www.newindianexpress.com/india/2026/Feb/26/bsf-to-replace-human-surveillance-with-ai-powered-monitoring-system",
    "category": "Investigative News & Media",
    "page": 46
  },
  {
    "id": 58,
    "title": "www.medianama.com: 223 cisf facial recognition cameras airports natgrid",
    "url": "https://www.medianama.com/2026/06/223-cisf-facial-recognition-cameras-airports-natgrid/",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 59,
    "title": "play.google.com: Details?id=in.gov.apeda.peanut",
    "url": "https://play.google.com/store/apps/details?id=in.gov.apeda.peanut",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 60,
    "title": "www.indusappstore.com: ?page=details&id=in.gov.kvicdemo",
    "url": "https://www.indusappstore.com/apps/productivity/khadi-gis--india/in.gov.kvicdemo/?page=details&id=in.gov.kvicdemo",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 61,
    "title": "www.gov.uk: Surveillance camera code of",
    "url": "https://www.gov.uk/government/publications/surveillance-camera-code-of-practice-guidance-for-local-authorities/surveillance-camera-code-of",
    "category": "Government & Policy",
    "page": 46
  },
  {
    "id": 62,
    "title": "www.gov.uk: Closed circuit television security policy",
    "url": "https://www.gov.uk/government/publications/dwp-procurement-security-policies-and-standards/closed-circuit-television-security-policy",
    "category": "Government & Policy",
    "page": 46
  },
  {
    "id": 63,
    "title": "mjst.ustp.edu.ph: 2478",
    "url": "https://mjst.ustp.edu.ph/index.php/mjst/article/view/2478",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 64,
    "title": "eprints.unram.ac.id: 53245",
    "url": "https://eprints.unram.ac.id/53245/",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 65,
    "title": "pubmed.ncbi.nlm.nih.gov: 40902045",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40902045/",
    "category": "Academic & Technical Research",
    "page": 46
  },
  {
    "id": 66,
    "title": "www.vmukti.com: Dpdp act 2023 compliant video surveillance india",
    "url": "https://www.vmukti.com/answers/dpdp-act-2023-compliant-video-surveillance-india/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 46
  },
  {
    "id": 67,
    "title": "parvekshak.com: Cctv laws in india",
    "url": "https://parvekshak.com/blog/cctv-laws-in-india/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 46
  },
  {
    "id": 68,
    "title": "www.altacit.com: Guest data privacy for hotels dpdp act compliance india",
    "url": "https://www.altacit.com/guest-data-privacy-for-hotels-dpdp-act-compliance-india/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 46
  },
  {
    "id": 69,
    "title": "www.linkedin.com: Sonali tiwari 9b4a1b24b_dpdpact cctv surveillancecompliance activity 7446275822874898432 p9dw",
    "url": "https://www.linkedin.com/posts/sonali-tiwari-9b4a1b24b_dpdpact-cctv-surveillancecompliance-activity-7446275822874898432-P9DW",
    "category": "DPDP Act & Legal Frameworks",
    "page": 46
  },
  {
    "id": 70,
    "title": "askthemama.com: Dpdp worker cctv indian factories",
    "url": "https://askthemama.com/compliance/dpdp-worker-cctv-indian-factories/",
    "category": "DPDP Act & Legal Frameworks",
    "page": 46
  },
  {
    "id": 71,
    "title": "jurnal.polibatam.ac.id: 13629",
    "url": "https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/13629",
    "category": "Academic & Technical Research",
    "page": 46
  },
  {
    "id": 72,
    "title": "www.pib.gov.in: Pressreleasepage.aspx?prid=2299181&reg=1&lang=1",
    "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2299181&reg=1&lang=1",
    "category": "Government & Policy",
    "page": 46
  },
  {
    "id": 73,
    "title": "www.linkedin.com: Ramdas borhade 3967a522_pmkvy scam exposed 94 fake candidates activity 7412763894848585728 21a8",
    "url": "https://www.linkedin.com/posts/ramdas-borhade-3967a522_pmkvy-scam-exposed-94-fake-candidates-activity-7412763894848585728-21a8",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 74,
    "title": "www.telegraphindia.com: 2148477",
    "url": "https://www.telegraphindia.com/amp/opinion/a-reality-check-digital-systems-in-india-have-aided-not-ended-corruption-prnt/cid/2148477",
    "category": "Academic Research",
    "page": 46
  },
  {
    "id": 75,
    "title": "english.mathrubhumi.com: Rajasthan mgnrega cag report failures dues kg9ba1pj",
    "url": "https://english.mathrubhumi.com/news/india/rajasthan-mgnrega-cag-report-failures-dues-kg9ba1pj",
    "category": "CAG Audit Reports",
    "page": 46
  },
  {
    "id": 76,
    "title": "cag.gov.in: 125070",
    "url": "https://cag.gov.in/en/audit-report/details/125070",
    "category": "CAG Audit Reports",
    "page": 46
  },
  {
    "id": 77,
    "title": "cag.gov.in: 123641",
    "url": "https://cag.gov.in/cen/delhi-v/en/audit-report/details/123641",
    "category": "CAG Audit Reports",
    "page": 46
  },
  {
    "id": 78,
    "title": "arxiv.org: 2608.26173v1",
    "url": "https://arxiv.org/abs/2608.26173v1",
    "category": "Academic & Technical Research",
    "page": 46
  },
  {
    "id": 79,
    "title": "jurnal.ubhinus.ac.id: 2382",
    "url": "https://jurnal.ubhinus.ac.id/index.php/SMATIKA/article/view/2382",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 80,
    "title": "rjwave.org: Viewpaperforall.php?paper=jaafr2605021",
    "url": "https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFR2605021",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 81,
    "title": "www.ijert.org: A systematic review of face recognition attendance systems anti spoofing integration intelligent automation and researc",
    "url": "https://www.ijert.org/a-systematic-review-of-face-recognition-attendance-systems-anti-spoofing-integration-intelligent-automation-and-researc",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 82,
    "title": "www.mdpi.com: 374",
    "url": "https://www.mdpi.com/2073-431X/14/9/374",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 83,
    "title": "arxiv.org: 2604.09630",
    "url": "https://arxiv.org/abs/2604.09630",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 84,
    "title": "www.frontiersin.org: Full",
    "url": "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1762332/full",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 85,
    "title": "www.mdpi.com: 2330",
    "url": "https://www.mdpi.com/1424-8220/26/8/2330",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 86,
    "title": "ijsrd.com: Article.php?manuscript=ijsrdv14i20043",
    "url": "https://ijsrd.com/Article.php?manuscript=IJSRDV14I20043",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 87,
    "title": "www.mid-day.com: Cag flags ghost hostels poor infrastructure and safety lapses in maharashtra st",
    "url": "https://www.mid-day.com/amp/mumbai/mumbai-news/article/cag-flags-ghost-hostels-poor-infrastructure-and-safety-lapses-in-maharashtra-st",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 88,
    "title": "www.ndtv.com: 1",
    "url": "https://www.ndtv.com/india-news/auditor-flags-ghost-hostels-in-maharashtra-zero-occupants-regular-funding-11770472/amp/1",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 89,
    "title": "colab.ws: 10.1109%2faccess.2025.3631395",
    "url": "https://colab.ws/articles/10.1109%2Faccess.2025.3631395",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 90,
    "title": "isreview.net: 37",
    "url": "https://isreview.net/index.php/isr/article/view/37",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 91,
    "title": "ijrt.org: 620",
    "url": "https://ijrt.org/j/article/view/620",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 92,
    "title": "www.espjeta.org: Jeta v5i4p101",
    "url": "https://www.espjeta.org/jeta-v5i4p101",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 93,
    "title": "premierscience.com: Pjs 25 1320",
    "url": "https://premierscience.com/pjs-25-1320/",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 94,
    "title": "ideas.repec.org: V11y2026i4p857 897.html",
    "url": "https://ideas.repec.org/a/bjf/journl/v11y2026i4p857-897.html",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 95,
    "title": "www.cryotos.com: Cmms photo capture facility inspections",
    "url": "https://www.cryotos.com/blog/cmms-photo-capture-facility-inspections",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 96,
    "title": "www.dosje.gov.in: Annual report 2024 25 4",
    "url": "https://www.dosje.gov.in/documents/annual-report-2024-25-4/",
    "category": "Government & Policy",
    "page": 47
  },
  {
    "id": 97,
    "title": "github.com: Sih 2026 problem statements",
    "url": "https://github.com/vedantchalke36/sih-2026-problem-statements",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 98,
    "title": "aikosh.indiaai.gov.in: Dosje_annual_reports.html",
    "url": "https://aikosh.indiaai.gov.in/home/datasets/details/dosje_annual_reports.html",
    "category": "Government & Policy",
    "page": 47
  },
  {
    "id": 99,
    "title": "github.com: Readme.md",
    "url": "https://github.com/NoBugNinja/Smart-India-Hackathon-SIH-2026-Problem-Statements/blob/main/README.md",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 100,
    "title": "www.scribd.com: Sih shortlisted problem statements",
    "url": "https://www.scribd.com/document/1078552606/SIH-Shortlisted-Problem-Statements",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 101,
    "title": "www.scribd.com: Sih ps",
    "url": "https://www.scribd.com/document/1077324667/SIH-PS",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 102,
    "title": "www.scribd.com: Problem statements smart india hackathon sih",
    "url": "https://www.scribd.com/document/913856423/Problem-Statements-Smart-India-Hackathon-Sih",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 103,
    "title": "cag.gov.in: Audit report?ts",
    "url": "https://cag.gov.in/en/audit-report?ts",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 104,
    "title": "www.moneylife.in: 79428.html",
    "url": "https://www.moneylife.in/article/when-prevention-becomes-fraud-why-cag-warnings-fall-on-deaf-ears/79428.html",
    "category": "Investigative News & Media",
    "page": 47
  },
  {
    "id": 105,
    "title": "tmv.in: 55 crore misused cag exposes lapses in kalyana lakshmi scheme",
    "url": "https://tmv.in/article/55-crore-misused-cag-exposes-lapses-in-kalyana-lakshmi-scheme",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 106,
    "title": "www.apklinker.com: N",
    "url": "https://www.apklinker.com/apk/national-informatics-centre/nrega-mobile-monitoring-system/nrega-mobile-monitoring-system-3-3-0-release/n",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 107,
    "title": "www.governancenow.com: Cag flags major fiscal lapses in maharashtra",
    "url": "https://www.governancenow.com/news/regular-story/cag-flags-major-fiscal-lapses-in-maharashtra",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 108,
    "title": "www.amarujala.com: Maharashtra ghost hostels received rs 1 62 core govt funding in four years revealed in cag report 202",
    "url": "https://www.amarujala.com/india-news/maharashtra-ghost-hostels-received-rs-1-62-core-govt-funding-in-four-years-revealed-in-cag-report-202",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 109,
    "title": "www.ndtv.com: Auditor flags ghost hostels in maharashtra zero occupants regular funding 11770472",
    "url": "https://www.ndtv.com/india-news/auditor-flags-ghost-hostels-in-maharashtra-zero-occupants-regular-funding-11770472",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 110,
    "title": "www.lokmat.com: Cag unearths fraud rs 162 crore government funds given to 6 ghost hostels in maharashtra a a1001",
    "url": "https://www.lokmat.com/maharashtra/cag-unearths-fraud-rs-162-crore-government-funds-given-to-6-ghost-hostels-in-maharashtra-a-a1001/",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 111,
    "title": "remumbai.in: Cag report flags infrastructure gaps safety concerns ghost hostels in maharashtra",
    "url": "https://remumbai.in/2026/07/13/cag-report-flags-infrastructure-gaps-safety-concerns-ghost-hostels-in-maharashtra/",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 112,
    "title": "devmosje.negd.in: 3",
    "url": "https://devmosje.negd.in/page/3/",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 113,
    "title": "completeaitraining.com: Goa set to roll out ai cctv network for real time",
    "url": "https://completeaitraining.com/news/goa-set-to-roll-out-ai-cctv-network-for-real-time/",
    "category": "Academic Research",
    "page": 47
  },
  {
    "id": 114,
    "title": "cag.gov.in: 123447",
    "url": "https://cag.gov.in/en/audit-report/details/123447",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 115,
    "title": "cag.gov.in: 123447",
    "url": "https://cag.gov.in/ag2/uttar-pradesh/en/audit-report/details/123447",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 116,
    "title": "www.moneycontrol.com: Cag detects irregularities in pmay g jal jeevan mission mgnrega implementation in jharkhand 140",
    "url": "https://www.moneycontrol.com/news/india/cag-detects-irregularities-in-pmay-g-jal-jeevan-mission-mgnrega-implementation-in-jharkhand-140",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 117,
    "title": "www.nationalheraldindia.com: One scam many schemes what cag reports reveal about systemic data fraud",
    "url": "https://www.nationalheraldindia.com/amp/story/national/one-scam-many-schemes-what-cag-reports-reveal-about-systemic-data-fraud",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 118,
    "title": "www.nationalheraldindia.com: One scam many schemes what cag reports reveal about systemic data fraud",
    "url": "https://www.nationalheraldindia.com/national/one-scam-many-schemes-what-cag-reports-reveal-about-systemic-data-fraud",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 119,
    "title": "www.reddit.com: Cag_audit_exposes_massive_irregularities_in_pmkvy",
    "url": "https://www.reddit.com/r/unfilteredindia/comments/1q6gsaf/cag_audit_exposes_massive_irregularities_in_pmkvy/",
    "category": "CAG Audit Reports",
    "page": 47
  },
  {
    "id": 120,
    "title": "www.pib.gov.in: Pressreleasepage.aspx?prid=2222705&reg=3&lang=1",
    "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222705&reg=3&lang=1",
    "category": "Government & Policy",
    "page": 47
  },
  {
    "id": 121,
    "title": "www.gov.ie: Annual statistics report tables 2025",
    "url": "https://www.gov.ie/en/department-of-social-protection/collections/annual-statistics-report-tables-2025/",
    "category": "Government & Policy",
    "page": 47
  },
  {
    "id": 122,
    "title": "cdnbbsr.s3waas.gov.in: 202608122042072047.pdf",
    "url": "https://cdnbbsr.s3waas.gov.in/s395192c98732387165bf8e396c0f2dad2/uploads/2026/08/202608122042072047.pdf",
    "category": "Government & Policy",
    "page": 47
  },
  {
    "id": 123,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12623896",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12623896/",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 124,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12737123",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12737123/",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 125,
    "title": "dblp1.uni-trier.de: Dujaka24.html",
    "url": "https://dblp1.uni-trier.de/rec/journals/access/DujaKA24.html",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 126,
    "title": "www.ijprems.com: Smart attendance system using geofencing and face recognition",
    "url": "https://www.ijprems.com/ijprems-paper/smart-attendance-system-using-geofencing-and-face-recognition",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 127,
    "title": "ijsret.com: Ai enable gps based employee attendance and live monitoring system with real time alerts",
    "url": "https://ijsret.com/2025/11/22/ai-enable-gps-based-employee-attendance-and-live-monitoring-system-with-real-time-alerts/",
    "category": "Academic & Technical Research",
    "page": 47
  },
  {
    "id": 128,
    "title": "www.scribd.com: Eﬀicient employee tracking with smart attendance system using advanced face recognition ",
    "url": "https://www.scribd.com/document/924124418/Eﬀicient-Employee-Tracking-with-Smart-Attendance-System-Using-Advanced-Face-Recognition-",
    "category": "Academic Research",
    "page": 48
  },
  {
    "id": 129,
    "title": "www.dtnext.in: Maharashtras ghost hostels received rs 162 cr govt funding in four years cag report mh cag hostels",
    "url": "https://www.dtnext.in/news/national/maharashtras-ghost-hostels-received-rs-162-cr-govt-funding-in-four-years-cag-report-mh-cag-hostels",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 130,
    "title": "www.dtnext.in: Maharashtras ghost hostels received rs 162 cr govt funding in four years cag report mh cag h",
    "url": "https://www.dtnext.in/amp/story/news/national/maharashtras-ghost-hostels-received-rs-162-cr-govt-funding-in-four-years-cag-report-mh-cag-h",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 131,
    "title": "ianslive.in: Cag exposes dismal state of maharashtra government aided hostels flags ghost outlets and asset neglect  20260713105448",
    "url": "https://ianslive.in/cag-exposes-dismal-state-of-maharashtra-government-aided-hostels-flags-ghost-outlets-and-asset-neglect--20260713105448",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 132,
    "title": "link.springer.com: S10462 025 11429 x",
    "url": "https://link.springer.com/article/10.1007/s10462-025-11429-x",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 133,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12624084",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12624084/",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 134,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12455727",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12455727/",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 135,
    "title": "www.irejournals.com: 1715244",
    "url": "https://www.irejournals.com/paper-details/1715244",
    "category": "Academic Research",
    "page": 48
  },
  {
    "id": 136,
    "title": "cag.gov.in: 124697",
    "url": "https://cag.gov.in/mab/new-delhi-i/en/audit-report/details/124697",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 137,
    "title": "cag.gov.in: Audit report?sector[0]=27&_get[sector][0]=27&page=4",
    "url": "https://cag.gov.in/en/audit-report?sector[0]=27&_GET[sector][0]=27&page=4",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 138,
    "title": "cag.gov.in: 125489",
    "url": "https://cag.gov.in/en/audit-report/details/125489",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 139,
    "title": "cag.gov.in: Audit report?title=central+government+scheme",
    "url": "https://cag.gov.in/en/audit-report?title=central+government+scheme",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 140,
    "title": "saiindia.gov.in: 124217",
    "url": "https://saiindia.gov.in/cen/mumbai/en/audit-report/details/124217",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 141,
    "title": "saiindia.gov.in: Audit report?sector[0]=35&_get[sector][0]=35",
    "url": "https://saiindia.gov.in/en/audit-report?sector[0]=35&_GET[sector][0]=35",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 142,
    "title": "www.linkedin.com: Cag audit highlights implementation gaps vtwaf",
    "url": "https://www.linkedin.com/pulse/cag-audit-highlights-implementation-gaps-vtwaf",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 143,
    "title": "theaidem.com: En cag reports on up and chhattisgarh failed pmay scheme delivery promise",
    "url": "https://theaidem.com/en-cag-reports-on-up-and-chhattisgarh-failed-pmay-scheme-delivery-promise/",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 144,
    "title": "arcisai.io: Ai cctv smart cities maharashtra",
    "url": "https://arcisai.io/blog/ai-cctv-smart-cities-maharashtra",
    "category": "Academic Research",
    "page": 48
  },
  {
    "id": 145,
    "title": "cag.gov.in: 124454",
    "url": "https://cag.gov.in/en/audit-report/details/124454",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 146,
    "title": "www.socialnews.xyz: Nasha mukt bharat abhiyaan sensitises nearly 25 cr indians against drug abuse govt",
    "url": "https://www.socialnews.xyz/2025/12/02/nasha-mukt-bharat-abhiyaan-sensitises-nearly-25-cr-indians-against-drug-abuse-govt/",
    "category": "Academic Research",
    "page": 48
  },
  {
    "id": 147,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12514191",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12514191/",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 148,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc13076251",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13076251/",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 149,
    "title": "pmc.ncbi.nlm.nih.gov: Pmc12899597",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12899597/",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 150,
    "title": "www.nature.com: S41598 025 30799 4",
    "url": "https://www.nature.com/articles/s41598-025-30799-4",
    "category": "Academic & Technical Research",
    "page": 48
  },
  {
    "id": 151,
    "title": "www.scribd.com: Audit article 151 ic governor",
    "url": "https://www.scribd.com/document/985538229/Audit-Article-151-IC-Governor",
    "category": "CAG Audit Reports",
    "page": 48
  },
  {
    "id": 152,
    "title": "www.mahaswayam.gov.in: Districtskilldevelopmentfinalrfp.pdf",
    "url": "https://www.mahaswayam.gov.in/public/img/news/DistrictSkillDevelopmentfinalRFP.pdf",
    "category": "Government & Policy",
    "page": 48
  },
  {
    "id": 153,
    "title": "socialjustice.gov.in: Sitemap",
    "url": "https://socialjustice.gov.in/sitemap",
    "category": "Government & Policy",
    "page": 48
  },
  {
    "id": 154,
    "title": "sje.rajasthan.gov.in: Default.aspx?pageid=2280",
    "url": "https://sje.rajasthan.gov.in/default.aspx/orders/download/Default.aspx?PageID=2280",
    "category": "Government & Policy",
    "page": 48
  },
  {
    "id": 155,
    "title": "sje.rajasthan.gov.in: Default.aspx?pageid=1204",
    "url": "https://sje.rajasthan.gov.in/Default.aspx?PageID=1204",
    "category": "Government & Policy",
    "page": 48
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SOUL_NETRA_DATA;
}
