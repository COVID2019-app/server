import csv , json

pathToCsv = 'resu.csv'
pathToJson = 'data.json'

data = []
with open(pathToCsv) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        data.append(csvRow)
     
        
        
with open(pathToJson,'w') as jsonFile:
    jsonFile.write(json.dumps(data,indent=2))
    