import db from "../models/index";
import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ['email', 'roleid', 'password'],
                    where: { email: email },
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMsg = 'OK';
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMsg = 'wrong password';
                        userData.user = {};
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMsg = `Cannot find email ${email}`;
                    userData.user = {};
                }
            }
            else {
                userData.errCode = 1;
                userData.errMsg = `Cannot find email ${email}`;
                userData.user = {};
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            debugger;
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

module.exports = {
    handleUserLogin: handleUserLogin,
}