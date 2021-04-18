

const getUser = (dispatch) => {
    fetch('http://localhost:3000/api/user', {
        method: 'GET',
        headers: { 'Content-Type':'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    }).then(async (data) => {
        const res = await data.json()
    });
}

module.exports = {
    getUser
}