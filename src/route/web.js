import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/post-crud', homeController.postCrud);
    router.get('/create-crud', homeController.createCRUD);
    router.get('/get-crud', homeController.getCrud);
    router.get('/edit-crud', homeController.editCrud);

    return app.use("/", router);
}

module.exports = initWebRoutes;