import db from "../models/index";

let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                resolve();
            }
            else {
                userData.errCode = 1;
                userData.errMsg = `Cannot find email ${email}`;
                resolve(userData);
            }
        } catch (e) {
            reject(e);
        }
    });
}
let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
}
let comparePassWord = (passWord) => {
    return new Promise(async (resolve, reject) => {
        try {

        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    handleLogin: handleLogin,
}