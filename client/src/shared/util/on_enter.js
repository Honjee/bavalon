export const ensureLoggedIn = (session, history) => {
  if(!session) {
    this.history.replace('/login')
  }
}

export const redirectLoggedIn = (session, history) => {
  if(session) {
    this.history.replace('/lobby')
  }
}
