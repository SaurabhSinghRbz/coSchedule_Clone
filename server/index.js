const express = require('express');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task.routes');
const userRouter = require('./routes/user.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    return res.send({
        message: 'Welcome to my blog API',
        registration: 'http://localhost:8080/api/auth/register',
        login: 'http://localhost:8080/api/auth/login',
        getAllUsers: "http://localhost:8080/api/users",
        getUserById: "http://localhost:8080/api/users/:id",
        updateUser: "http://localhost:8080/api/users/:id",
        getAllTasksByemail: "http://localhost:8080/api/tasks",
        getAllTasks: "http://localhost:8080/api/tasks/all",
        getTaskById: "http://localhost:8080/api/tasks/:id",
        createTask: "http://localhost:8080/api/tasks",
        updateTask: "http://localhost:8080/api/tasks/:id",
        deleteTask: "http://localhost:8080/api/tasks/:id"
    });
});




app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port ${PORT}`);
});