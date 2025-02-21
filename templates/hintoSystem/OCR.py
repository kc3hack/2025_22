import pytesseract
from PIL import Image
#1,2行目をpip installしてください


# Tesseract-OCRエンジンのパスを指定 (Windows環境の場合は必須)
# macOSやLinuxの場合は通常不要ですが、環境によって必要な場合があります。
# Windowsの例:
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# 画像ファイルのパス
image_path = 'C:\KC3Pra\ocr-test.png' #  ← ここにOCRしたい画像ファイルのパスを記述

# 画像を開く (Pillowを使用)
img = Image.open(image_path)

# OCRを実行
text = pytesseract.image_to_string(img, lang='jpn') # lang='jpn' で日本語指定

# OCR結果を表示
print("OCR結果:\n", text)