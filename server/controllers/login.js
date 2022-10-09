import  loginService from '../services/login.js'


const login = async(req,res) => {
    const {email, password} = req.body;
    try {
        const accessToken = await loginService.logIn(email, password)
        res.cookie('token', accessToken, {httpOnly: true})
        res.status(200).json({msg: 'logged in', accessToken})
    } catch (error) {
        res.status(401).json({error})
        console.log(error);
    }
}


export default {login}