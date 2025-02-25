const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});