import  loginService from '../services/login.js'


const login = async(req,res) => {
    const {email, password} = req.body;
    try {
        await loginService.logIn(email, password)
        res.send('logged in')
    } catch (error) {
        res.status(400).send('something wrong')
    }
}

export default {login}