const users = []

const findAll = () => {
  return users;
}

const save = (user) => {
  const userValid = validateUser(user);
  if(userValid){
    users.push(user)
    return user
  }

  return null;
}

const validateUser = (user) => {
  if(!user.name || !user.password){
    return false
  }
  
  return true
}


module.exports = {findAll, save}
