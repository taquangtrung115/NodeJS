import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/post-crud', homeController.postCrud);
    router.get('/view-crud', homeController.getCrud);

    return app.use("/", router);
}

module.exports = initWebRoutes;