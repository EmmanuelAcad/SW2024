const request = require("supertest");
const app = require("../app"); // Supondo que app.js exporte o seu app Express
const chai = require("chai");
const expect = chai.expect;

describe("User API", () => {
  // Teste para GET /users
  it("should return all users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  // Teste para POST /users
  it("should create a new user", async () => {
    const newUser = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "password123",
    };

    const response = await request(app).post("/users").send(newUser);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("name", newUser.name);
    expect(response.body).to.have.property("email", newUser.email);
  });

  // Teste para GET /users/:id
  it("should return a user by id", async () => {
    const userId = 1; // eu te odeio userId, nao ta funcionando esses testes
    const response = await request(app).get(`/users/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("id", userId);
  });

  // Teste para PUT /users/:id
  it("should update a user by id", async () => {
    const userId = 1;
    const updatedUser = {
      name: "Jane Doe Updated",
      email: "jane.doe.updated@example.com",
      password: "newpassword123",
    };

    const response = await request(app)
      .put(`/users/${userId}`)
      .send(updatedUser);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("name", updatedUser.name);
  });

  // Teste para DELETE /users/:id
  it("should delete a user by id", async () => {
    const userId = 1;

    const response = await request(app).delete(`/users/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property(
      "message",
      "Usuário deletado com sucesso"
    );
  });
});
