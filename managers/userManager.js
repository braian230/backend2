const fs = require("fs/promises")
const {existsSync} = require("fs")

class UserManager{

    constructor(path){
        this.path = path
    }

    async readFile(){
        return await fs.readFile(this.path,"utf-8")
    }

    async writeFile(string){
        return await fs.writeFile(this.path, string,"utf-8")
    }

    async getUsers(){
        try {
            if(existsSync(this.path)){
                const usersString = await this.readFile()
                const users = await JSON.parse(usersString);
                return users
            }else{
                return [];
            }
        } catch (error) {
            throw new Error(error)
        }
    }  

    async getUsersById(id){

        try {
            const users = await this.getUsers()
            const foundUser = users.find(elem=> elem.id===id);

            if(!foundUser){
                throw new Error("That user doesn't exist.")
            }

            return foundUser;
        } catch (error) {
            console.log(error.message)
        }

    }

    async updateUser(id,newProperties){
        const users = await this.getUsers()
        const foundUser = await this.getUsersById(id)

        const userUpdated = {...foundUser, ...newProperties}

        const updatedList = users.map(elem=>{
            if(elem.id=== userUpdated.id){
                return userUpdated
            }else{
                return elem
            }
        })

        const stringList = await JSON.stringify(updatedList,null, "\t")

        await this.writeFile(stringList)
        return stringList
    }
    
    async createUser(user){
        try {
            const usersArray = await this.getUsers()
            const newUser = {id: usersArray.length+1, ...user}
            usersArray.push(newUser) 

            const usersString = JSON.stringify(usersArray,null,"\t")

            await this.writeFile(usersString)
            console.log("User saved succesfully!")

        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = UserManager