export const ensureLoggedIn = (session, history) => {
  if(session.isEmpty()) {
    history.replace('/login')
  }
}

export const redirectLoggedIn = (session, history) => {
  if(session && !session.isEmpty()) {
    history.replace('/lobby')
  }
}
