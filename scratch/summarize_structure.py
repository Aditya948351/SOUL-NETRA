import json
import re

with open('scratch/cleaned_pdf_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Let's inspect page by page titles and main topics
pages_summary = []
for p in data:
    txt = p['text']
    lines = [l.strip() for l in txt.split('\n') if l.strip()]
    pages_summary.append({
        'page': p['page'],
        'first_lines': lines[:4],
        'total_lines': len(lines),
        'links_count': len(p['links'])
    })

for ps in pages_summary:
    print(f"P{ps['page']:02d} [{ps['total_lines']} lines, {ps['links_count']} links]: {' | '.join(ps['first_lines'][:2])}")
