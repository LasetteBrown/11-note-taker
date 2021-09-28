const notes = require("express").Router();
const db = require("../db/db.json");

notes.get("/", (req, res) => {
  res.json(db);
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { noteTitle, noteText } = req.body;

  console.log(`Note Title: ${noteTitle}\nNote Text: ${noteText}`);
  res.send({ status: "SUCCESS" });
});

// notes.delete();

module.exports = notes;
