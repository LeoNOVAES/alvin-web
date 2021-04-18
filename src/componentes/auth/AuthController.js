
const login = (email, password, e, history, dispatch) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({email, password})
    }).then(async (data) => {
        const res = await data.json()
        localStorage.setItem('token', res.token)
        dispatch({ type: 'GET_USER', user:res.user });
        history.push('/dashboard');
    });
}

module.exports = {
    login
}