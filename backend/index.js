const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const blogRoutes=require('./routes/blogRoutes');

const app=express();

app.use(cors());
app.use(bodyparser.json());

//routes
app.use('/api/blogs',blogRoutes);

//start server
const port=50000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
