/* 
This script is meant to be used in order to send a record coming from an Automation trigger, to a webhook.
In order to use it you will need to set an Airtable automation and get a record from the trigger.
As an action choose "run a script"
Copy all the script below and make sure to change the table name ans webhook URL as explained in the next 4 lines.
*/

// Change <TABLE_NAME> to the name of your table
let table = base.getTable("TABLE_NAME");

// Change <YOUR_WEBHOOK_URL> to your webhook's URL
let webhookUrl = "YOUR_WEBHOOK_URL";

// Get the record from button clik
let record = await input.recordAsync('Pick a record', table);
console.log(record);

// Create the reccord object
let recordObject = {};
for (let i = 0; i < table.fields.length; i++) {
    recordObject[table.fields[i].name] = record.getCellValue(table.fields[i].name);
}
recordObject["Record ID"] = record.id
console.log(recordObject);

// Sending the record object to the webhook
let response = await fetch(
    webhookUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(recordObject)
    }
);
