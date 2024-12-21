// 1. Import
const express = require('express');
require("./connection");
const empModel = require("./model/Employee");
var cors = require("cors");

// 2. Initialize
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API
app.get("/trial", (req, res) => {
    res.send("Hello");
});

app.post("/add", async (req, res) => {
    try {
        await new empModel(req.body).save();
        res.status(201).send({ message: "Data added" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error adding data" });
    }
});

app.get("/view", async (req, res) => {
    try {
        const employees = await empModel.find();
        res.send(employees);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error retrieving data" });
    }
});

app.put("/update/:id", async (req, res) => {
    try {
        const updatedEmployee = await empModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send({ message: "Employee not found" });
        }
        res.send({ message: "Data updated", employee: updatedEmployee });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating data" });
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id);
       
         res.send({ message: "Employee deleted" });
        }
       
     catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error deleting data" });
    }
});

app.get("/name", (req, res) => {
    res.send("Amar");
});

// Port
app.listen(3004, () => {
    console.log('Server is running on port 3004');
});