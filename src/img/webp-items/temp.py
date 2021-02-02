import os
from os import listdir
from os.path import isfile, join

import pyperclip

def listToString(l):
    res = '['
    c = 0
    for item in l:
        res += '"'
        res += item
        res += '"'
        if c != len(l) - 1:
            res += ','
        c += 1
    res += ']'
    return res

def clipboard(txt):
    cmd = 'echo ' + txt.strip() + '| clip'
    os.system(cmd)
    pyperclip.copy(txt)

path1 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-items\\'
path2 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-weapons\\'
path3 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-characters\\'
path4 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\favicomatic\\'
paths = [path1, path2, path3, path4]
headers = ['/src/img/webp-items/', '/src/img/webp-weapons/', '/src/img/webp-characters/', '/src/img/favicomatic/']
res = []
h = 0
for mypath in paths:
    res += [(headers[h] + f) for f in listdir(mypath) if isfile(join(mypath, f)) and f != "temp.py"]
    h += 1

asda = ['a', 'b', 'c', 'd']
clipboard(listToString(res))
print(len(listToString(res)))

