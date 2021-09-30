## Backend

# step 1: Import Mountain Lambda

No http path. Import mountains from CSV into DynamoDB

# step 2: GET Mountain Lambda

http paths

GET /country/{code}/mountains?name=
GET /country/{code}/mountains?lastKey=
GET /county/{code}/mountains?lastKey=
GET /region/{code}/mountains?lastKey=
GET /area/{code}/mountains?lastKey=
GET /classification/{code}/mountains?lastKey=
GET /classification/{code}/county/{code}/mountains?lastKey=
GET /classification/{code}/region/{code}/mountains?lastKey=
GET /classification/{code}/area/{code}/mountains?lastKey=

# step 3: GET Mountain by Id Lambda

GET /mountains/{id}

## Front end

Global Search Nav

- mountain search by name and country

Homepage

- links for countries (England, Scotland, Wales, England/Scotland Border)
- links for classifications (ie Wainwrights, Munroes)
- paginated list of mountains in height order

Country page

- links to related regions, areas, counties
- paginated list of mountains in height order

Classification page

- additional filters for regions, areas, counties
- paginated list of mountains in height order

Regions/Area/Counties page

- paginated list of mountains in height order

Mountain Page

- links to related region, area, county, country, classification pages
- more info (ie grid ref)
