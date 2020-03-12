import json

with open('latest_home_data.json','r+') as f:
    data = json.load(f)
    datas = {}
    values = data.values()
    k = data.keys()

    #n = delattr(data.keys)
    f.write(str(data.values()))
    f.close()    
    print(f)

    