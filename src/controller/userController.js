import userService from '../service/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!password || !email) {
        return res.status(500).json({
            errCode: 1,
            message: "Error",
        });
    }
    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        errMsg: userData.errMsg,
        user: userData.user
    });
}

module.exports = {
    handleLogin: handleLogin,
}
