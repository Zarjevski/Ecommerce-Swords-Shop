const loginService = require('../services/login.js')


const login = async(req,res) => {
    const {name, password} = req.body;
    try {
        const doLogin = await loginService.logIn(name, password)
        res.send('logged in')
    } catch (error) {
        console.log(error.message);
        res.redirect('/login')
    }
}

module.exports = {login}