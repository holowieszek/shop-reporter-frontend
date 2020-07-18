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

const signIn = async ({ email, password }) => {
  const signIn = await Auth.signIn({
    username: email,
    password
  })

  return signIn
}

const isAuthenticated = async () => {
  const isAuthenticated = await Auth.currentAuthenticatedUser()

  return isAuthenticated
}

export {
  signUp,
  signIn,
  isAuthenticated
}