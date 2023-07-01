import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/post-crud', homeController.postCrud);
    router.get('/create-crud', homeController.createCRUD);
    router.get('/get-crud', homeController.getCrud);
    router.get('/edit-crud', homeController.editCrud);
    router.post('/put-crud', homeController.putCrud);
    router.get('/delete-crud', homeController.deleteCrud);

    router.get('/api/login', userController.handleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;