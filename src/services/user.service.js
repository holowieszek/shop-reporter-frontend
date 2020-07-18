import { Auth } from 'aws-amplify'

const signUp = async ({ email, password }) => {
  const signUp = await Auth.signUp({
    username: email,
    password,
    attributes: {
      email
    }
  })
  
  return signUp
}

export {
  signUp
}