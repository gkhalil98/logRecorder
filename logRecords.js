let obj = require("readline-sync");
let fs = require("fs");
let records = new Array();

let count = obj.question("How many entries would you like to create?");
debugger;
class Record {
    fName;
    lName;
    gender;
    date;
    constructor() {
        fName = this.fName;
        lName = this.lName;
        gender = this.gender;
        date = this.date;
    }
};

function createRecord() {
    fName = obj.question("What is your first name?");
    lName = obj.question("What is your last name?");
    gender = obj.question("What is your gender?");
    date = Date.now();
    let record1 = {
        fName: this.fName,
        lName: this.lName,
        gender: this.gender,
        date: this.date
    }
    records.push(record1);
}
for (let i=0; i < count; i++) {
    createRecord();
}
debugger;
let jsonData = JSON.stringify(records);
fs.writeFileSync("logRecords.json", jsonData);
debugger;



exports.Record = Record;
exports.records = records;
exports.addData = createRecord;
debugger;

