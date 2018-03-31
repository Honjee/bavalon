const SESSION = 'session'

export const bootStrapUser = (user) => {
  const currentUser = JSON.stringify(user)
  if(currentUser) {
    sessionStorage.setItem(SESSION, currentUser)
    return true
  } else {
    return false
  }
}

export const wipeSession = () => {
  sessionStorage.removeItem(SESSION)
}
