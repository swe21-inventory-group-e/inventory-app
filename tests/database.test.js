const { test, expect, beforeEach } = require("@jest/globals");
const sequelize = require("../server/db.js");
const { Item } = require("../server/models/index.js")

// Reset database each time
beforeEach(async function() {
    await sequelize.sync({force: true});
    //await Item.create(/* TODO:  Add details here of test items */);
})

// Sanity check
test.only("The database connection works", async function() {
    const answer = await sequelize.query("SELECT 1+1 AS RESULT");
    expect(answer[0][0].RESULT).toBe(2);
})

// --- CREATE operations ---

// Can create items
test("Items can be created", async function () {
    const created = await Item.create(/* TODO: Add variables here */);
    const fetched = await Item.findByPk(2);
    expect(created).toEqual(fetched);
    expect(created).toEqual(/* Other values */);
})

// --- READ operations --- 

// Check all columns
test("The database has the correct columns", async function() {
    const result = await Item.findByPk(1);
    // TODO: Check columns match diagram once created
})

// --- UPDATE operations --- 

// Check editing works correctly
test("The database gets edited correctly", async function() {
    let result = await Item.findByPk(1);
    await Item.update({ /* TODO: Add variables here to test */})
    result = await Item.findByPk(1);
    expect(/* TODO: Make comparison */).toBe();
})

// --- DELETE operations --- 

// Check deletion works properly
test("The database can delete rows", async function () {
    const result = await Item.findByPk(1);
    await result.destroy();
    const deleted = await Item.findByPk(1);
    expect(deleted).toBeUndefined();    
})