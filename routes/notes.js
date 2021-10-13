const notes = require("express").Router();
const db = require("../db/db.json");

notes.get("/", (req, res) => {
  res.json(db);
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;

  console.log(`Note Title: ${title}, ${text}`, req.body);
  res.send({ status: "SUCCESS" });
});

// notes.delete();

module.exports = notes;
