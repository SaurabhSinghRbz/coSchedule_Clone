const express = require('express');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post.routes');
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
        getAllBlogs: "http://localhost:8080/api/blogs",
        getPostById: "http://localhost:8080/api/blogs/:id",
        createBlog: "http://localhost:8080/api/blogs",
        updateBlog: "http://localhost:8080/api/blogs/:id",
        deleteBlog: "http://localhost:8080/api/blogs/:id"
    });
});




app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", postRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port ${PORT}`);
});