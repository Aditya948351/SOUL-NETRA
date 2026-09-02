import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for p in range(12, 48):
    print(f"\n========================================================")
    print(f"PAGE {p+1} (Links: {len(data[p]['links'])})")
    print(f"========================================================")
    print(data[p]['text'])
