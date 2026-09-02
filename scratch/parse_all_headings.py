import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== OVERVIEW OF ALL 48 PAGES ===")
for p in data:
    text = p['text'].strip()
    first_few = [l.strip() for l in text.split('\n') if l.strip()][:5]
    print(f"\n--- PAGE {p['page']} ---")
    print("\n".join(first_few))
