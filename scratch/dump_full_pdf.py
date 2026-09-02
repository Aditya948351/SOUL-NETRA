import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for p in data:
    print(f"\n========================================================")
    print(f"PAGE {p['page']} (Links: {len(p['links'])})")
    print(f"========================================================")
    print(p['text'])
