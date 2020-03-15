import pandas as pd





df = pd.read_csv (r'italy1.csv')



df.to_json (r'data.json')












# import csv
# import json

# csvFilePath = 'italy.csv'
# jsonFilePath = 'cases.json'
# data = {}

# with open(csvFilePath) as csvFile:
#     csvReader = csv.DictReader(csvFile)
#     for rows in csvReader:
#         id = rows['region']
      
#         data[id] = rows
#     for columns in csvReader:
#         id =rows['country']
#         data[id] = rows
  
# with open(jsonFilePath,'w') as jsonFile:
#     jsonFile.write(json.dumps(data,indent=2))
         