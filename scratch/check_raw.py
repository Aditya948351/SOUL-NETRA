import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for i in [0, 1, 2, 3, 4, 10, 20, 24, 27, 40, 43]:
    p = data[i]
    print(f"=== PAGE {p['page']} ===")
    print(repr(p['text'][:300]))
