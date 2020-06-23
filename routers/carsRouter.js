const express = require("express");
const db = require("../data/config.js");

const router = express.Router();

// GET - get all the cars
router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars");

        res.json(cars);
    }
    catch (error) {
        next(error);
    }
})

// GET by ID - get cars by ID
router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        const car = await db("cars").where({ id }).first();

        res.json(car);
    }
    catch (error) {
        next(error)
    }
})

// POST - post new cars 
router.post("/", async (req, res, next) => {
    try {
        const newCarData = req.body
        const [id] = await db("cars").insert(newCarData)
        const newCar = await db("cars").where({ id })

        res.status(201).json(newCar);
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;