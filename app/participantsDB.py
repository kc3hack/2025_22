# 現在の参加者
participantAoi = []
participantShota = []

# 翔太を登録
def setShota(teamName):
    if(teamName in participantShota):
        return False
    else:
        participantShota.append(teamName)
        return True

# 葵を登録
def setAoi(teamName):
    if(teamName in participantAoi):
        return False
    else:
        participantAoi.append(teamName)
        return True

# 翔太を解除
def outShota(teamName):
    if(teamName in participantShota):
        participantShota.remove(teamName)

# 葵を登録
def outAoi(teamName):
    if(teamName in participantAoi):
        participantAoi.remove(teamName)




