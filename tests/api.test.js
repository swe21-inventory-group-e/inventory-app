const { expect, test, describe } = require("@jest/globals")
const { sequelize } = require("../server/db.js");
const { Item } = require("../server/models/index.js");
const request = require("supertest");
const app = require("../server/app.js");

// apiUrl is the base local variable for holding the URL being tested;

// --- CREATE operations ---

describe("POST /api/items", function () {
    const apiUrl = "/api/items";
    const testItem = {
        name: "Red MINI One",
        description: "98BHP, the British icon",
        price: 6000,
        category: "cars",
        image: "https://hinkley.dev/wp-content/uploads/2024/10/maya_no_metadata-scaled.jpg"
    }
    test("returns 201", async function() {
        const response = await request(app).post(apiUrl).send(testItem);
        expect(response.status).toBe(201);
    })
    test("creates item properly", async function() {
        const response = await request(app).post(apiUrl).send(testItem);
        const parsed = await JSON.parse(response.text);
        expect(parsed.name).toBe(testItem.name);
        expect(parsed.description).toBe(testItem.description);
        expect(parsed.price).toBe(testItem.price);
        expect(parsed.category).toBe(testItem.category);
        expect(parsed.image).toBe(testItem.image);
    })
})

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