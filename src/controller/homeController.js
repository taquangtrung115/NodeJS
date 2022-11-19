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
    console.log(data);
    return res.render('viewUser.ejs', {
        dataTable: data
    });
}

let postCrud = async (req, res) => {
    let message = await CRUDSevices.createNewUser(req.body);
    console.log(message);
    return res.send('crud nef');
}

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
}
