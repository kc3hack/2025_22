import easyocr

reader = easyocr.Reader(['ja'])

# 画像にtextが含まれているか確認する
def checkImgData(img,text):
    result = reader.readtext(img)
    for data in result:
        if data[1] == text:
            return True
    return False

# 画像のデータを変換
list = ["チク","デン","池"]
ans = ["竹","池","城"]
def check(text):
    for i in range(len(list)):
        if(list[i]==text):
            return i
    return None

def chengeImage(img):
    ret = []    # 分析結果
    result = reader.readtext(img)
    for data in result:
        resNum = check(data[1])
        if resNum!=None:
            ret.append(f"{data[1]} = {ans[resNum]}")
        else:
            ret.append(f"{data[1]} = none")
    return ret
    