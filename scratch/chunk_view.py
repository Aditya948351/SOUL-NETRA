import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/cleaned_pdf_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for i in range(0, 48, 4):
    chunk = data[i:i+4]
    print(f"\n=================== PAGES {i+1} to {min(i+4, 48)} ===================")
    for p in chunk:
        print(f"\n--- PAGE {p['page']} ---")
        lines = [l.strip() for l in p['text'].split('\n') if l.strip()]
        for l in lines[:10]:
            print("  ", l[:100])
        if len(lines) > 10:
            print(f"   ... [{len(lines)-10} more lines]")
