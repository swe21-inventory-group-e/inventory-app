const { test, expect, beforeEach } = require("@jest/globals");
const sequelize = require("../server/db.js");
const { Item } = require("../server/models/index.js")

// Reset database each time
beforeEach(async function() {
    await sequelize.sync({force: true});
    await Item.create({name: "Shoes", description: "Feet", price: 10.50});
})

// Sanity check
test("The database connection works", async function() {
    const answer = await sequelize.query("SELECT 1+1 AS RESULT");
    expect(answer[0][0].RESULT).toBe(2);
})

// --- CREATE operations ---

// Can create items
test("Items can be created", async function () {
    const created = await Item.create({name: "Red shoes", description: "Red feet", price: 20.50, image:"http://example.com"});
    const fetched = await Item.findByPk(2);
    expect(created.name).toEqual(fetched.name);
    expect(fetched.name).toBe("Red shoes");
    expect(fetched.description).toBe("Red feet");
    expect(fetched.price).toBe(20.50);
    expect(fetched.image).toBe("http://example.com")
})

// --- READ operations --- 

// Check all columns
test("The database has the correct columns", async function() {
    const result = await Item.findByPk(1);
    expect(result.id).toBe(1)
    expect(result.name).toBe("Shoes");
    expect(result.description).toBe("Feet");
    expect(result.price).toBe(10.50);
    // TODO: Add description and image URL
})

// --- UPDATE operations --- 

// Check editing works correctly
test("The database gets edited correctly", async function() {
    let result = await Item.findByPk(1);
    await result.update({ name: "Blue shoes"})
    result = await Item.findByPk(1);
    expect(result.name).toBe("Blue shoes");
})

// --- DELETE operations --- 

// Check deletion works properly
test("The database can delete rows", async function () {
    const result = await Item.findByPk(1);
    await result.destroy();
    const deleted = await Item.findByPk(1);
    expect(deleted).toBeNull();    
})