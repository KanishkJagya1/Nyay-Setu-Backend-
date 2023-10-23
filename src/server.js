const app = require("./app");
const db = require("./config/database");
const port = 3000;
const userModel = require("./models/user");
const body_parser = require("body-parser");

body_parser.urlencoded({extended:true});
app.listen(port, () => {
    console.log(`Server connected to port ${port}`);
});
