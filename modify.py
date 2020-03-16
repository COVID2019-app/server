import json
f = open('data.json','r+')
fa = json.load(f)
s = open('country.json','r+')
sa = json.load(s)

for values in sa:
    for values in range(0,-1):

        fa.append(sa[0]['confirmed_cases'])
        print(fa)
    

    