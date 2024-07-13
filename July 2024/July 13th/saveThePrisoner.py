def saveThePrisoner(prisoners, sweets, start):
    return (start + sweets -1) % prisoners or prisoners

print(saveThePrisoner(559033664, 822024089, 131746755))