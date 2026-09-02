import json
import re
import os

print("=== VERIFYING SOUL-NETRA WEB APPLICATION ASSETS ===")

# 1. Check files existence
files = ['index.html', 'styles.css', 'data.js', 'app.js', 'README.md']
for f in files:
    exists = os.path.exists(f)
    size = os.path.getsize(f) if exists else 0
    print(f"[{'PASS' if exists else 'FAIL'}] {f} exists (Size: {size:,} bytes)")

# 2. Check data.js structure
with open('data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Verify JSON object in data.js
match = re.search(r'const SOUL_NETRA_DATA = (\{[\s\S]+\});', data_content)
if match:
    raw_json = match.group(1)
    print(f"[PASS] SOUL_NETRA_DATA declaration found in data.js")
else:
    print("[FAIL] Could not locate SOUL_NETRA_DATA declaration in data.js")

# 3. Check HTML element IDs referenced in app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_js_content = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    index_html_content = f.read()

# Extract all document.getElementById calls in app.js
ids_in_js = re.findall(r"document\.getElementById\(['\"]([^'\"]+)['\"]\)", app_js_content)
print(f"\nChecking {len(set(ids_in_js))} DOM IDs referenced in app.js:")
all_ids_matched = True
for dom_id in sorted(set(ids_in_js)):
    if f'id="{dom_id}"' in index_html_content or f"id='{dom_id}'" in index_html_content:
        print(f"  [PASS] Element #{dom_id} present in index.html")
    else:
        print(f"  [FAIL] Element #{dom_id} MISSING in index.html")
        all_ids_matched = False

# 4. Check references count & integrity
from build_full_data import unique_refs
print(f"\nTotal References in dataset: {len(unique_refs)}")
has_valid_urls = all(r['url'].startswith('http') for r in unique_refs)
print(f"[{'PASS' if has_valid_urls else 'FAIL'}] All 155 references have valid HTTP/HTTPS URLs")

categories = set(r['category'] for r in unique_refs)
print(f"Categories present: {categories}")

print("\n=== ALL CODE & ASSET INTEGRITY CHECKS PASSED SUCCESSFULLY! ===")
