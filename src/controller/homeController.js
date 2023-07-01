import db from '../models/index';
import CRUDSevice from '../service/CRUDServices';

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
    let data = await CRUDSevice.getAllUser();
    return res.render('viewUser.ejs', {
        dataTable: data
    });
}

let postCrud = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send('crud nef');
}

let createCRUD = async (req, res) => {
    return res.render('createUser.ejs');
}

let editCrud = async (req, res) => {
    let userID = req.query.id;

    if (userID) {
        let userData = await CRUDSevice.getUserInfoByID(userID);
        // if (userData) {
        //     return res.render('editUser.ejs');
        // }
        return res.render('editUser.ejs', {
            userData: userData
        });
    }
    else {
        return res.send('edit loi');
    }
}
let putCrud = async (req, res) => {
    let data = req.body;
    let updateUser = await CRUDSevice.updateUserData(data);
    return res.render('viewUser.ejs', {
        dataTable: updateUser
    });
}
let deleteCrud = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let data = await CRUDSevice.deleteUserById(id);
        return res.render('viewUser.ejs', {
            dataTable: data
        });
    }
    return res.send('Cannot find user');
}
module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    createCRUD: createCRUD,
    editCrud: editCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud,
}
