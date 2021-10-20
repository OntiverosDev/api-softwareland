const {Router} = require('express');
const { createTask, getAllTasks, readTask, updateTask, deleteTask } = require('../controllers/todoListController');

const router = Router();


//ROUTES
router.post('/', createTask)
router.get('/', getAllTasks)
    

router.get('/:taskId', readTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask);

module.exports = router;