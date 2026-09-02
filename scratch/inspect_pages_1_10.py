import json

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Let's inspect page 1 to 24 in detail, then 25 to 48
def inspect_range(start, end):
    for p in data[start-1:end]:
        print(f"\n--- P{p['page']} ---")
        lines = [l for l in p['text'].split('\n') if l.strip()]
        for line in lines:
            print("  ", line[:120])

inspect_range(1, 10)
