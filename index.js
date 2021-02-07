// Add your code here
function submitData(name, email) {
    const url = `http://localhost:3000/users`
    let newUser = {name, email}

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(function(user) {
        let p = document.createElement("p")
        p.textContent = user.id
        document.body.append(p)
    })
    .catch(function(error) {
        let p = document.createElement("p")
        p.textContent = error.message
        document.body.append(p)
    })
}   