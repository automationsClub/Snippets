/* 
This script is meant to be used in order to send a record coming from an Automation trigger, to a webhook.
In order to use it you will need to set an Airtable automation and get a record from the trigger.
As an action choose "run a script"
You will need the record ID as input variable (left side of the scripting window) named: "recordID" 
Copy all the script below and make sure to change the table name ans webhook URL as explained in the next 4 lines.
*/

// Change <TABLE_NAME> to the name of your table
let table = base.getTable("TABLE_NAME");

// Change <YOUR_WEBHOOK_URL> to your webhook's URL
let webhookUrl = "YOUR_WEBHOOK_URL";



let inputConfig = input.config();
console.log(inputConfig);
let queryResult = await table.selectRecordsAsync({});
console.log(queryResult);

let record = queryResult.getRecord(inputConfig.recordID);
console.log(record);

let recordObject = {};
for (let i = 0; i < table.fields.length; i++) {
    recordObject[table.fields[i].name] = record.getCellValueAsString(table.fields[i].name)
}
console.log(recordObject);

let response = await fetch(
    webhookUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(recordObject)
    }
);
