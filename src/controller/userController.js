import db from '../models/index';
import userService from '../service/userService';
import bcrypt from 'bcryptjs';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let passWord = req.body.passWord;
    if (!passWord || !email) {
        return res.status(500).json({
            errCode: 1,
            message: "Error",
        });
    }
    let user = await userService.handleLogin(email, passWord);
    return res.status(200).json({
        user,
        errCode: user.errCode,
        errMsg: user.errMsg,
    });
}

module.exports = {
    handleLogin: handleLogin,
}
