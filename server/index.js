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
        registration: 'https://masai-blog-assignment.herokuapp.com/api/auth/register',
        login: 'https://masai-blog-assignment.herokuapp.com/api/auth/login',
        getAllUsers: "https://masai-blog-assignment.herokuapp.com/api/users",
        getUserById: "https://masai-blog-assignment.herokuapp.com/api/users/:id",
        updateUser: "https://masai-blog-assignment.herokuapp.com/api/users/:id",
        getAllBlogs: "https://masai-blog-assignment.herokuapp.com/api/blogs",
        getPostById: "https://masai-blog-assignment.herokuapp.com/api/blogs/:id",
        createBlog: "https://masai-blog-assignment.herokuapp.com/api/blogs",
        updateBlog: "https://masai-blog-assignment.herokuapp.com/api/blogs/:id",
        deleteBlog: "https://masai-blog-assignment.herokuapp.com/api/blogs/:id"
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