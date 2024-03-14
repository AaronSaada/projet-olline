export const getUser = async (req, res, next) => {
    if(req.params.id === req.user.id){
      try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
          $set: res.body
        })
        res.status(200).json(updateUser)
      } catch(err){

      }
    }else{
      return next(createError(403, "Vous ne pouvez pas modifier le compte d'un autre"))
    }
}