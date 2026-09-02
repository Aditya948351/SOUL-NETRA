import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for p in data:
    print(f"\n==================== PAGE {p['page']} ====================")
    lines = p['text'].split('\n')
    for line in lines[:15]:
        if line.strip():
            print(f"  {line.strip()[:100]}")
    if len(lines) > 15:
        print(f"  ... [{len(lines)-15} more lines]")
    if p['links']:
        print(f"  LINKS ({len(p['links'])}): {p['links']}")
