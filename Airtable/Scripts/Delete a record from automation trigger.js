/*
This script is meant to be used in order to delete a record coming from an Automation trigger.
In order to use it you will need to set an Airtable automation and get a record from the trigger.
As an action choose "run a script"
You will need the record ID as input variable (left side of the scripting window) named: "recordId" 
Copy all the script below and make sure to change the table name as explained in the next note.
*/

// Change <TABLE_NAME> to the name of your table
let table = base.getTable("TABLE_NAME");

let inputConfig = input.config();
await table.deleteRecordAsync(inputConfig.recordId);
