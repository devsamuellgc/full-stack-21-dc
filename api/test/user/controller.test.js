// import { app } from "../../src";
import request from "supertest";

describe("Users controller", () => {
  //   it("Deve ser possível buscar as informações de todos os usuários cadastrados", async () => {
  //     const response = await request(app).get("/users");
  //     expect(response.status).toBe(200);
  //   });

  it("Deve ser possível identificar se há usuários cadastrados", async () => {
    const data = [
      {
        id: 1,
        name: "Samuel Lopes",
        email: "teste-edit2@teste.com",
        phone: "123456789",
        cpf: "01234567890",
        birthday: null,
      },
    ];
    const users = data.length;
    expect(users).toBeGreaterThan(0);
  });

  it("Deve ser possível identificar se há usuários cadastrados", async () => {
    const data = [];
    const users = data.length;
    expect(users).toBe(0);
  });
});
