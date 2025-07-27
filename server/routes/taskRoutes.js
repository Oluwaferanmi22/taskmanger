const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { text, completed } = req.body;
  const task = new Task({ text, completed });
  await task.save();
  res.json(task);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.sendStatus(204);
});

module.exports = router;
