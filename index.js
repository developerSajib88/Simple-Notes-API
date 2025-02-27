const app = require("./app");
const config = require("./config/config");
require("./config/db");

const PORT = config.app.port;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});