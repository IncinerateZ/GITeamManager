from os import listdir
from os.path import isfile, join
path1 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-items\\'
path2 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-weapons\\'
path3 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\webp-characters\\'
path4 = 'D:\\Main Files\\Projects\\GITeamManager\\src\\img\\favicomatic\\'
paths = [path1, path2, path3, path4]
headers = ['/src/img/webp-items/', '/src/img/webp-weapons/', '/src/img/webp-characters/', '/src/img/favicomatic/']
res = []
h = 0
for mypath in paths:
    res += [(headers[h] + f) for f in listdir(mypath) if isfile(join(mypath, f))]
    h += 1
print(res)
