let users = []
fetch("https://reqres.in/api/users").then(data => data.json()).then(users_in_reqres => {
    users = users_in_reqres.data
    let users_div = document.getElementById("usuarios")
    for (let index in users) {
        let data = document.createElement("h3")
        data.append((parseInt(index)+1) + ".- "+users[index].first_name +" "+ users[index].last_name)
        users_div.append(data)
    }
    console.log(users)
})