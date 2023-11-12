const fs = require("fs");

// loadData
const loadData = () => {
    try {
        const dataJSON = fs.readFileSync('dataOfPerson.json').toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

// -------------------------------------------------------
// SaveAllData
const saveAllData = (allData) => {
    const saveAllDataJSON = JSON.stringify(allData);
    fs.writeFileSync('dataOfPerson.json', saveAllDataJSON);
};


// add person 
const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData();
    const duplicatedData = allData.filter((obj) => {
        return obj.id === id;
    });

    if (duplicatedData.length === 0) {
        allData.push({
            id,
            fname,
            lname,
            age,
            city,
        });

        saveAllData(allData);
    } else {
        console.log("Error: The id already exists");
    }
};


// ------------------------------------------------------------------------------------------------
// delete 

const deletePerson = (id) => {
    const allData = loadData();

    const afterDelete = allData.filter((obj) => {
        return obj.id !== id;
    });

    saveAllData(afterDelete);
};

// ------------------------------------------------------------------------------------------------
// list 
const listData = () => {
    const allData = loadData();
    const returnedData = allData.forEach(obj => {
        console.log(
            `Fist Name : ${itemNeed.fname}
             Last Name : ${itemNeed.lname}
             City      : ${itemNeed.city}`);
    });
};
// -----------------------------------------------------
// read Data

const readData = (id) => {
    const allData = loadData();
    const itemNeed = allData.find((obj) => {
        return obj.id === id;
    });

    if (itemNeed) {
        console.log(
            `ID        : ${itemNeed.id} 
             Fist Name : ${itemNeed.fname}
             Last Name : ${itemNeed.lname}
             Age       : ${itemNeed.age}
             City      : ${itemNeed.city}`);
    } else {
        console.log("THIS ITEM NOT FOUND");
    }
};
// ------------------------------------------------------------------------------------------------

module.exports = {
    addPerson,
    deletePerson,
    listData,
    readData,
}