import { app } from "../../src";
import request from "supertest";

describe("Users controller", () => {
  it("Deve ser possível buscar as informações de todos os usuários cadastrados", async () => {
    const response = await request(app).get("/stores");
    expect(response.status).toBe(200);
  });
});
