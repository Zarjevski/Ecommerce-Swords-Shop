const sendUserData = (req,res) => {
  const data = req.user
  res.status(200).json({data})
}

export default sendUserData