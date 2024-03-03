const express = require("express");

const app = express();

app.use(express.json());

app.post("/todo", function (res, req) {});

app.get("/todos", function (req, res) {});

app.put("/complete", function (req, res) {});
