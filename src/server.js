import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connection from "./config/connectDB";

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connection();

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Has running in: " + port);
});



