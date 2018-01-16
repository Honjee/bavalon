import { ajax } from 'jquery'

const signUp = (user) => {
  return ajax({
    url: '/v1/users',
    data: { user },
    method: 'POST'
  });
};

const signIn = (user) => {
  return ajax({
    url: '/v1/session',
    data: { user },
    method: 'POST'
  });
};

const signOut = () => {
  return ajax({
    url: '/v1/session',
    method: 'DELETE'
  });
};

const updateProfile = (user) => {
  return ajax({
    method: 'PATCH',
    url: '/v1/user',
    data: { user }
  });
};

export { signUp, signIn, signOut, updateProfile };
