export async function registerUser(data) {
  console.log('DATA', data);
  return fetch('http://127.0.0.1:8000/ravaana_auth/register/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: data.userName,
      email: data.email,
      password: data.password,
      password2: data.password2,
    }),
  });
}

export async function loginUser(data) {
  return fetch('http://127.0.0.1:8000/ravaana_auth/token/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: data.userName,
      password: data.password,
    }),
  });
}
