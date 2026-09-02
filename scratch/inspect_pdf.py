import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total pages loaded: {len(data)}")
for page in data:
    lines = [l.strip() for l in page['text'].split('\n') if l.strip()]
    header = ' | '.join(lines[:3]) if lines else 'EMPTY'
    print(f"P{page['page']:02d} ({len(page['links'])} links): {header[:110]}")

all_links = set()
for page in data:
    for link in page['links']:
        all_links.add(link)

print("\n--- ALL UNIQUE EMBEDDED HYPERLINKS ---")
for l in sorted(all_links):
    print(l)

