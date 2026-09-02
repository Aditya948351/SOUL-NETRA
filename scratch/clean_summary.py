import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for p in data:
    txt = p['text'].strip()
    lines = [l.strip() for l in txt.split('\n') if l.strip()]
    first_two = ' | '.join(lines[:2]) if lines else 'EMPTY'
    print(f"P{p['page']:02d} [{len(lines)} lines, {len(p['links'])} links]: {first_two[:110]}")
