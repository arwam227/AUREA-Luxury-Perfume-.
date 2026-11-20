with open(r'C:\Users\PC\.gemini\antigravity\scratch\aurea_website\data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

with open(r'C:\Users\PC\.gemini\antigravity\scratch\aurea_website\app.js', 'r', encoding='utf-8') as f:
    app_content = f.read()

data_clean = data_content.replace('export const ', 'const ')

# Remove import line
lines = app_content.splitlines()
app_lines = [l for l in lines if not l.startswith('import ')]
app_clean = '\n'.join(app_lines)

bundle = '// AURÉA HAUTE PARFUMERIE — Standalone Universal Runtime\n' + data_clean + '\n\n' + app_clean

with open(r'C:\Users\PC\.gemini\antigravity\scratch\aurea_website\bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle)

print('bundle.js generated! Size:', len(bundle))
