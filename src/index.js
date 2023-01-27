const UserManager = require("./managers/userManager");

const manager = new UserManager("./data/Users.json")

const queries = async ()=>{


    try {
        console.log("Primera consulta")
        let users = await manager.getUsers()
        console.log(users);

        console.log("Nuevo usuario")
        const userDemo = {name: "Lionel", lastname: "Messi", age: 35, curse:"Argentina"};
        await manager.createUser(userDemo)

        console.log("Segunda consulta")
        users = await manager.getUsers()
        console.log(users);

        console.log("Nuevo usuario")
        const userDemo2 = {name: "Angel", lastname: "Di Maria", age: 34, curse:"Argentina"};
        await manager.createUser(userDemo2)

        console.log("Tercera consulta")
        users = await manager.getUsers()
        console.log(users);

        console.log("Actualizar usuario")
        const list = await manager.updateUser(1,{age:24})
        console.log(list)

        
    } catch (error) {
        console.log(error)
    }
}

queries()

const express = require('express');

const apiRoutes = require('./pets/pets.routes');
const usersRoutes = require('./users/users.routes');


const PORT = 8080;
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('src/public'));
app.use(cors());
app.use((error, req, res, next)=>{
    console.log(`[${req.method}]=>${req.url}`);
    console.log(`Time: ${new Date().toDateString(
        
    )}`);
})

app.listen(PORT, ()=>{
    console.log("Listening on port =>", PORT);
})