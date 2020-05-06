const express = require("express");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");



const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

apiRoutes(app);

htmlRoutes(app);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

