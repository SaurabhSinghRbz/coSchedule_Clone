const express = require('express');
const session = require('express-session');
const passport = require('passport');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task.routes');
const userRouter = require('./routes/user.routes');
const cors = require('cors');
require('./middleware/auth');

const app = express();
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}


app.get('/google', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);

app.get('/http://localhost:3000/calender', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});



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