const taskRouter = require('express').Router();
const User = require('../models/User');
const Task = require('../models/Task');


// get all tasks
taskRouter.get('/', async (req, res) => {
    const email = req.query.email;
    try {
        let tasks;
        if (email) {
            tasks = await Task.find({ email });
        } else {
            tasks = await Task.find();
        }
        return res.status(200).send(tasks);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// get a Task by id
taskRouter.get('/:id', async (req, res) => {
    try {
        const Task = await Task.findById(req.params.id);
        res.status(200).json(Task);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a Task
taskRouter.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        return res.status(200).send(savedTask);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


// Update a Task
taskRouter.put('/:id', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const Task = await Task.findById(req.params.id);
        if (!Task) {
            return res.status(400).json({ error: "Task not found" });
        }
        if (Task.username === req.body.username) {
            try {
                const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                return res.status(200).send(updatedTask);
            } catch (error) {
                return res.status(500).send({ error: error.message });
            }
        } else {
            return res.status(401).json({ error: "You can update only your Task" });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


// Delete a Task
taskRouter.delete('/:id', async (req, res) => {
    try {
        const username = req.body.username;
        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }
        const Task = await Task.findById(req.params.id);
        if (!Task) {
            return res.status(400).json({ error: "Task not found" });
        }
        if (Task.username === req.body.username) {
            try {
                await Task.delete();
                return res.status(200).send("Task has been deleted");
            } catch (error) {
                return res.status(500).send({ error: error.message });
            }
        } else {
            return res.status(401).json({ error: "You can delete only your Task" });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports = taskRouter;