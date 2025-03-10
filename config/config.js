require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 3000,
    },
    db:{
        url: process.env.DB_URL || "mongodb://localhost:27017/database_name"

    }
}

module.exports = dev;