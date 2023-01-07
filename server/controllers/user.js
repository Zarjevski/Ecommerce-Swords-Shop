const sendUserData = (req,res) => {
  const data = req.user
  res.status(200).json({data})
}

const updateUser = async(req,res) => {
  res.send("hello")
}

export default {sendUserData, updateUser}