
const Task = require('../models/todoListModel');



exports.getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find();

        res.json(tasks)
    } catch (error) {
        res.send(error)
    }

}


exports.createTask = async (req, res) => {
    
    try {
        const newTask = new Task(req.body);

        await newTask.save();

        res.json(newTask)
    } catch (error) {
        res.send(error)
    }

}


exports.readTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.taskId);

        if(task !== null){
            return res.json(task)
        }
        
        res.send('Esta tarea no existe')
       
    } catch (error) {
        
        res.send(error)

    }

};


exports.updateTask = async (req, res) => {

    try {
        const task = await Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true});

        res.json(task)
    } catch (error) {
        res.send(error)
    }

};


exports.deleteTask = async (req, res) => {

    try {
        
        await Task.deleteOne({_id: req.params.taskId});

        res.json({message: 'Task successfully deleted' })

    } catch (error) {
        res.send(error)
    }

};