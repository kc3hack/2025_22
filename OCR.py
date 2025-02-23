import easyocr

reader = easyocr.Reader(['ja'])
path = ""

result = reader.readtext(path,detail=0)

