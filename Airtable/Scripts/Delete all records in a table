/*
This script is meant to be used in order to delete all the records in a table.
In order to use it you will need to set an Airtable automation for the trigger.
As an action choose "run a script"
Copy all the script below and make sure to change the table name as explained in the next note.

Script was provided by Itamar Mayer
*/

// Change <TABLE_NAME> to the name of your table

let table = base.getTable("TABLE_NAME");

// Change <ANY_FIELD_NAME> to the name of any of your fields

let query = await table.selectRecordsAsync({
  fields: ["ANY_FIELD_NAME"]
});
let records = query.records;
let recordIds = records.map(record => record.id);

const batchSize = 50;
for (let i = 0; i < recordIds.length; i += batchSize) {
  let batch = recordIds.slice(i, i + batchSize);
  await table.deleteRecordsAsync(batch);
}
