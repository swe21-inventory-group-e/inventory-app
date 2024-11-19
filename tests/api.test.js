const { expect, test, describe } = require("@jest/globals")
const { sequelize } = require("../server/db.js");
const { Item } = require("../server/models/index.js");
const request = require("supertest");
const app = require("../server/app.js");

// apiUrl is the base local variable for holding the URL being tested;

// --- READ operations ---

describe("GET /api/items", function () {
    const apiUrl = "/api/items";
    test("returns 200", async function() {
        const response = await request(app).get(apiUrl)
        expect(response.status).toBe(200);
    })

    test("returns correct items", async function() {
        const response = await request(app).get(apiUrl)
        const parsed = await JSON.parse(response.text); // Convert to an array
        const comparison = await Item.findAll();
        for(let index = 0; index < parsed.length; index++) {
            expect(parsed[index].name).toBe(comparison[index].name);
            expect(parsed[index].description).toBe(comparison[index].description);
            expect(parsed[index].id).toBe(comparison[index].id);
        }
    })

    test("returns correct amount", async function() {
        const response = await request(app).get(apiUrl)
        const parsed = await JSON.parse(response.text); // Convert to an array to compare length
        const comparison = await Item.findAll();
        expect(parsed.length).toBe(comparison.length);
    })
})

describe("GET /api/items/:id", function() {
    const apiUrl = "/api/items/1";
    test("returns 200", async function () {
        const response = await request(app).get(apiUrl)
        expect(response.status).toBe(200);
    })
    test("returns correct item", async function() {
        const response = await request(app).get(apiUrl)
        const parsed = await JSON.parse(response.text); // Convert to an array
        const comparison = await Item.findByPk(1);
        expect(parsed.name).toBe(comparison.name);
        expect(parsed.description).toBe(comparison.description);
        expect(parsed.id).toBe(comparison.id);
    })
})