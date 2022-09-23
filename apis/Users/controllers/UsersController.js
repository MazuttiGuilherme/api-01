const database = require('../../../dbConfig/db/models');



class UsersController {

    static async getAll(req, res) {
        try {
            const allUsers = await database.Users.findAll();
            return res.status(200).send(allUsers);
        }catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getOne(req, res) {
        const { userId }  = req.params;
        try {
            const user = await database.Users.findOne({
            where: {
                id: Number(userId)
            }
        });
        if(!user) {
            return res.status(404).send("Usuário não encontrado!")
        }
        return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async createUser(req, res) {
        const {name, email, active, role} = req.body; 
        try {
            const verifyingUser = await database.Users.findOne({
                where:{
                    email: email
                }
            });
    
            if(verifyingUser) {
                return res
                .status(400)
                .send("Usuário já cadastrado", { verifyingUser });
            }
            const user = await database.Users.create({
                name, 
                email, 
                active, 
                role
            });
            return res
            .status(200)
            .send({msg: "Usuário cadastrado com sucesso!", ...user});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}


module.exports = UsersController;