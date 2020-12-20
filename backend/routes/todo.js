const express = require("express");
const Todo = require("../models/Todo.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.get("/:todoId", async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.findById(id);
    res.send(todo);
  } catch (err) {
    res.send({ message: "There is no todo with that id", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({
      name: req.body.name,
      complete: req.body.complete,
    });
    res.send({ message: "Successfully created a new todo!", data: todo });
  } catch (err) {
    res.send({ message: "could not create a new todo", error: err });
  }
});

router.put("/updateName/:todoId", async (req, res) => {
  try {
    const id = req.params.todoId;
    const name = req.body.name;
    const todo = await Todo.updateOne({ _id: id }, { name: name });
    res.send({ message: "Successfully updated the todo", data: todo });
  } catch (err) {
    res.send({ message: "could not updated a new todo", error: err });
  }
});

router.put("/updateComplete/:todoId", async (req, res) => {
  try {
    const id = req.params.todoId;
    const complete = req.body.complete;
    const todo = await Todo.updateOne({ _id: id }, { complete: complete });
    res.send({ message: "Successfully updated the todo", data: todo });
  } catch (err) {
    res.send({ message: "could not updated a new todo", error: err });
  }
});

router.delete("/:todoId", async (req, res) => {
  try {
    const id = req.params.todoId;
    const todo = await Todo.deleteOne({ _id: id });
    res.send({ message: "Successfully deleted the todo", data: todo });
  } catch(err) {
    res.send({ message: "could not delete the todo", error: err });

  }
});

module.exports = router;
