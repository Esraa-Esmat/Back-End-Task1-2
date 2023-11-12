/*
Task 2 :
1- to add 7 persons with ids from 1-7
(id - fname - lname - age - city )
2- to delete id 4 - 6
3- to list fname & lname & city for all .
4- to read all data for only the 5th person .
*/
// ------------------------------------------------------------------------------------------------
const yargs = require("yargs")
const operationsData = require("./operationsData");



// 1- to add 7 persons with ids from 1-7
// (id - fname - lname - age - city )

yargs.command({
    command: "add",
    describe: "To Add Item",
    builder: {
        id: {
            describe: "The unique id",
            demandOption: true,
            type: "string",
        },
        fname: {
            describe: "The First Name",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "The Last Name",
            demandOption: false,
            type: "string",
        },
        age: {
            describe: "The Age",
            demandOption: false,
            type: "string",
        },
        city: {
            describe: "The City",
            demandOption: false,
            type: "string",
        },
    },
    handler: (pram) => {
        operationsData.addPerson(pram.id, pram.fname, pram.lname, pram.age, pram.city);
    }
})

// ------------------------------------------------------------------------------------------------

// 2- to delete id 4 - 6


yargs.command({
    command: "delete",
    describe: "To Delete Item",
    builder: {
        id: {
            describe: "The unique id",
            demandOption: true,
            type: "string",
        }
    },
    handler: (pram) => {
        operationsData.deletePerson(pram.id);
    }
});

// ------------------------------------------------------------------------------------------------

// 3- to list fname & lname & city for all .


yargs.command({
    command: "list",
    describe: "to list items",
    handler: () => {

        operationsData.listData()
    }
})

// ------------------------------------------------------------------------------------------------

// 4- to read all data for only the 5th person .
yargs.command({
    command: "read",
    describe: "to Read items",
    builder: {
        id: {
            describe: "This is ID read command",
            demandOption: true,
            type: "string",
        }
    },
    handler: (x) => {
        operationsData.readData(x.id)
    }
})

// ------------------------------------------------------------------------------------------------
yargs.parse();
