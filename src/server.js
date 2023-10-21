const app = require("./app");
const db = require("./config/database");
const port = 3000;
const userModel = require("./models/user");
app.listen(port, () => {
    console.log(`Server connected to port ${port}`);
});
