const user = async(req,res) => {
    console.log(req.user);
    res.send('user route')
}

export default {user}