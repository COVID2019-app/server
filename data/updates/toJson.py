import csv , json
pathToCsv = 'data.csv'
pathToJson = 'data.json'

data = {}
with open(pathToCsv) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        id = rows['id']
        data[id] = rows
        
        
with open(pathToJson,'w') as jsonFile:
    jsonFile.write(json.dumps(data,indent=2))
    