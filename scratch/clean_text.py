import json
import sys
import unicodedata

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/pdf_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def clean_text(text):
    text = unicodedata.normalize('NFKD', text)
    # replace common ligature artifacts
    text = text.replace('\ufb00', 'ff').replace('\ufb01', 'fi').replace('\ufb02', 'fl').replace('\ufb03', 'ffi').replace('\ufb04', 'ffl')
    text = text.replace('', "'")
    return text

print("Extracting cleaned text for all 48 pages...")
cleaned_data = []
for p in data:
    cleaned = {
        'page': p['page'],
        'text': clean_text(p['text']),
        'links': p['links']
    }
    cleaned_data.append(cleaned)

with open('scratch/cleaned_pdf_data.json', 'w', encoding='utf-8') as f:
    json.dump(cleaned_data, f, indent=2, ensure_ascii=False)

print("Saved scratch/cleaned_pdf_data.json!")
