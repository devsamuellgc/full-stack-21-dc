import { app } from ".";
import request from "supertest";
import { users } from "./routes/users";

describe("Teste para requisição inicial", () => {
  it("Deverá retornar status 200 ao chamar o endpoint /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("Deverá retornar status 200 ao chamar o endpoint /users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("Deverá retornar um array com 3 objetos", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toStrictEqual(users);
  });

  it("Deverá retornar um array com um tamanho de 3", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toHaveLength(users.length);
  });

  it("Deverá retornar um status 200 e também um array de objetos contendo o nome e o valor do estoque total por produto", async () => {
    const response = await request(app).get("/produtos/total-estoque");
    expect(response.status).toBe(200);
  });
});
