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

  it("Deverá retornar um objeto com as informações de um único produto", async () => {
    const response = await request(app).get("/produto/2");
    const product = response.body.data.id;
    expect(product).toEqual("2");
  });

  // it("Não deverá retornar um objeto com as informações de um único produto", async () => {
  //   const response = await request(app).get("/produto/2");
  //   const product = response.body;
  //   expect(product).toStrictEqual({ mensagem: "Produto não encontrado!" });
  // });

  it("Não deverá permitir criar uma loja com o mesmo id", async () => {
    const response = await request(app).post("/loja").send({
      id: "5",
      nome: "Loja 5",
      faturamento: 100000,
    });
    expect(response.body).toEqual({ mensagem: "ID já cadastrado!" });
  });

  it("Não deverá permitir criar uma loja sem um id", async () => {
    const produto = {
      nome: "Loja 5",
      faturamento: 100000,
    };
    const response = await request(app).post("/loja").send(produto);
    expect(response.body).toEqual({ mensagem: "Id não identificado!" });
  });

  it("Não deverá permitir criar uma loja sem um nome enviado pelo usuário", async () => {
    const produto = {
      id: "50",
      faturamento: 100000,
    };

    const response = await request(app).post("/loja").send(produto);

    expect(response.body).toEqual({
      mensagem: "O nome da loja é obrigatório!",
    });
  });

  it("Não deverá permitir criar uma nova loja com um faturamento em formato de string", async () => {
    const produto = {
      id: "50",
      nome: "Loja 5",
      faturamento: "100000",
    };
    // expect(typeof produto.faturamento).toBe('number');
    const response = await request(app).post("/loja").send(produto);
    expect(response.body).toEqual({
      mensagem: "O faturamento precisa ser número!",
    });
  });

  it("Deverá ser possível criar uma loja", async () => {
    const produto = {
      id: "50",
      nome: "Loja 5",
      faturamento: 100000,
    };
    const response = await request(app).post("/loja").send(produto);
    expect(response.body).toStrictEqual({
      id: "50",
      nome: "Loja 5",
      faturamento: 100000,
    });
  });

  /**
   *    Testes
   * Loja criada com sucesso (retornar o objeto que foi enviado no post)
   */
});
