/* 
This script is meant to be used in order to change an Israeli phone number in domestic format (0XXXXXXXXX) into E.164 format (+972XXXXXXXXX).
In order to use it you will need to set an Airtable automation and get a record from the trigger.
As an action choose "run a script"
You will need the record ID as input variable (left side of the scripting window) named: "recordID" 
Copy all the script below and make sure to change the table name and the phone field's name as explained in the next comments.
*/

// Change <TABLE_NAME> to the name of your table
let table = base.getTable("TABLE_NAME");

// Change <PHONE_CULOMN_NAME> to the name of your phone number field's name
let phoneCulomn = "PHONE_CULOMN_NAME";

let inputConfig = input.config();
console.log("Record ID: " + inputConfig.recordID);

let queryResult = await table.selectRecordsAsync({});
let record = queryResult.getRecord(inputConfig.recordID);
console.log("Phone culomn value: " + record.getCellValue(phoneCulomn));

let oldPhone = record.getCellValue(phoneCulomn);
let newPhone = "+972" + oldPhone.replace(/-/g, "").substring(1,oldPhone.length);
console.log("New phone: " + newPhone);

let params = {}
params[phoneCulomn] = newPhone;
await table.updateRecordAsync(record.id, params)
