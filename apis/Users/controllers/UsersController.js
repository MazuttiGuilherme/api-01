const database = require('../../../dbConfig/db/models');



class UsersController {

    static async getAllTrue(req, res) {
        try {
            const allTrueUsers = await database.Users.scope("allSoftDelete").findAll();
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
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getOne(req, res) {
        const { inscriptionId } = req.params;
        try {
            const user = await database.Users.findOne({
                where: {
                    id: Number(inscriptionId)
                }
            });
            if (!user) {
                return res.status(404).send("User not found.")
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async createUser(req, res) {
        const { name, email, active, role } = req.body;
        try {
            const verifyingDeveloper = await database.Users.findOne({
                where: {
                    email: email
                }
            });

            if (verifyingDeveloper) {
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
                .send({ msg: "User registered successfully!", ...user });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async editUser(req, res) {
        const { inscriptionId } = req.params
        const newUser = req.body;
        try {
            await database.Users.update(newUser, {
                where: {
                    id: Number(inscriptionId)
                }
            });

            const updatedUser = await database.Users.findOne({
                where: {
                    id: Number(inscriptionId)
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
        const { inscriptionId } = req.params
        try {
            await database.Users.destroy({
                where: {
                    id: Number(inscriptionId)
                }
            });

            return res.status(200).send("user successfully deleted.")

        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getInscription(req, res) {
        const { user_id, inscription_id } = req.params;
        try {
            const oneInscription = await database.Inscriptions.findOne({
                where: {
                    id: Number(inscription_id),
                    user_id: Number(user_id)
                }
            });
            if (!oneInscription) {
                return res.status(404).send({ msgError: "Inscription not found!" });
            }
            return res.status(200).send(oneInscription);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async createInscription(req, res) {
        const { user_id } = req.params;
        const newInscription = { ...req.body, user_id: Number(user_id) };
        try {
            const verifyingUser = await database.Inscriptions.findOne({
                where: {
                    user_id: Number(user_id)
                }
            });
            if (!verifyingUser) {
                return res.status(400).send({ msgError: "User already registred!" });
            }
            const createdInscription = await database.Inscriptions.create(newInscription);
            return res
                .status(200)
                .send({ msgSuccess: "Registered successfully", ...createdInscription })
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async editInscription(req, res) {
        const { user_id, inscription_id } = req.params
        const newInscriptionInfo = req.body
        try {
            await database.Inscriptions.update(newInscriptionInfo, {
                where: {
                    id: Number(inscription_id),
                    user_id: Number(user_id)
                }
            });

            const updatedInscription = await database.Inscriptions.findOne({
                where: {
                    id: Number(inscription_id)
                }
            });
            return res.status(200).send(updatedInscription);
        }catch (error) {
            return res.status(500).send({msg: "Error.message", error: error.message });
        }
    }

    static async deleteInscription(req, res) {
        const { inscription_Id } = req.params
        try {
            await database.Inscriptions.destroy({
                where: {
                    id: Number(inscription_Id)
                }
            });
            return res.status(200).send({msg: "Inscription successfully deleted."})
        } catch (error) {
            return res.status(500).send({msg: "Error Message!", error: error.message });
        }
    }
}
module.exports = UsersController;
    