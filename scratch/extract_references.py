import json
import re

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract all references from pages 43-48
ref_list = []
ref_pattern = re.compile(r'(\d+)\.\s+(https?://[^\s]+|[^\n]+)')

for p in data[42:]:
    text = p['text']
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        m = re.match(r'^(\d+)\.\s+(.*)', line)
        if m:
            num = int(m.group(1))
            rest = m.group(2).strip()
            # check if url inside rest or line
            url_match = re.search(r'https?://[^\s]+', rest)
            url = url_match.group(0) if url_match else ""
            title = rest.replace(url, '').strip().strip('—').strip('-').strip()
            if not title and url:
                title = url
            ref_list.append({
                'id': num,
                'page': p['page'],
                'raw': line,
                'title': title,
                'url': url
            })

print(f"Extracted {len(ref_list)} references!")
with open('scratch/extracted_references.json', 'w', encoding='utf-8') as f:
    json.dump(ref_list, f, indent=2, ensure_ascii=False)
