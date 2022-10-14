const database = require('../../../dbConfig/db/models');



class UsersController {

    static async getAllTrue(req, res) {
        try {
          const allTrueUsers = await database.Users.findAll();
          return res.status(200).send(allTrueUsers);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    
      static async getAllFalse(req, res) {
        try {
          const allFalseUsers = await database.Users.scope("allFalse").findAll();
          return res.status(200).send(allFalseUsers);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    

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
            return res.status(404).send("User not found.")
        }
        return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async createUser(req, res) {
        const {name, email, active, role} = req.body; 
        try {
            const verifyingDeveloper = await database.Users.findOne({
                where:{
                    email: email
                }
            });
    
            if(verifyingDeveloper) {
                return res
                .status(401)
                .send("User already registered.", { verifyingDeveloper });
            }
            const user = await database.Users.create({
                name, 
                email, 
                active, 
                role
            });
            return res
            .status(200)
            .send({msg: "User registered successfully!", ...user});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async editUser(req, res) {
        const {userId} = req.params
        const newUser = req.body;
        try {
           await database.Users.update(newUser, {
            where: {
                id: Number(userId)
            }
          });

           const updatedUser = await database.Users.findOne({
            where: {
                id: Number(userId)
            }
           })
           return res
            .status(200)
            .send({ msg: "User updated successfully!", ...updatedUser });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async deleteUser(req, res) {
        const {userId} = req.params
        try {
            await database.Users.destroy({
                where: {
                    id: Number(userId)
                }
            });

            return res.status(200).send("user successfully deleted.")

        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getInscription(req, res) {
        const {user_id, inscription_id} = req.params;
        try {
            const oneInscription = await database.Inscriptions.findOne({
                where: {
                    id: Number(inscription_id),
                    user_id: Number(user_id)
                }
            });
            if (!oneInscription) {
            return res.status(404).send({msgError: "Inscription not found!"});
            }
            return res.status(200).send(oneInscription);
        }catch (error) {
            return res.status(500).send(error.message);
        }
    }
}

module.exports = UsersController;