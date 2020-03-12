import csv
import json

csvFilePath = 'latest_home_data.csv'
jsonFilePath = 'latest_home_data.json'
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        id = rows['rec_territory']
        data[id] = rows
        
with open(jsonFilePath,'w') as jsonFile:
    jsonFile.write(json.dumps(data,indent=4))
        