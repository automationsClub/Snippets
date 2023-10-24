// query for all the records in a table
let table = base.getTable("שהיות"); // Change to table name

// Fields to get in query
let queryResult = await table.selectRecordsAsync({
    fields: ["rooms", "email", "Name (from Customers)"] // Change to whichever fields you need to pull
});

// Creating reultsArray
let array = [];

// Loop through query results, filtering records and pushing objects to the array. Change condition and pushed fields as needed
for (let record of queryResult.records) {
    if(record.getCellValueAsString("rooms") === "1") {
        reultsArray.push({
            "customer": record.getCellValueAsString("Name (from Customers)"),
            "email": record.getCellValueAsString("email")
        })
    }
}
console.log(reultsArray);

// Do somthing with this array
