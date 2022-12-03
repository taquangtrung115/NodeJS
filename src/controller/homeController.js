import db from '../models/index';
import CRUDSevices from '../sevices/CRUDServices';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCrud = async (req, res) => {
    let data = await CRUDSevices.getAllUser();
    return res.render('viewUser.ejs', {
        dataTable: data
    });
}

let postCrud = async (req, res) => {
    let message = await CRUDSevices.createNewUser(req.body);
    console.log(message);
    return res.send('crud nef');
}

let createCRUD = async (req, res) => {
    return res.render('createUser.ejs');
}

let editCrud = async (req, res) => {
    let userID = req.query.id;

    if (userID) {
        let userData = await CRUDSevices.getUserInfoByID(userID);
        // if (userData) {
        //     return res.render('editUser.ejs');
        // }
        return res.render('editUser.ejs');
    }
    else {
        return res.send('edit loi');
    }
}
module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    createCRUD: createCRUD,
    editCrud: editCrud,
}
