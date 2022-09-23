const usersController = require("../controllers/UsersController");
const expect = require('chai').expect;

describe("Testando a classe controller com os seus respectivos métodos, mas atenção tal biblioteca precisa ser instalada.", () => {
    it("testando método soma", () => {
        let a = 14
        let b = 50
        let resul = 64
        expect(usersController.sum(a, b)).to.equal(result);
    });
});