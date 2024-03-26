const produtos = [
  {
    id: "1",
    nome: "Teclado",
    quantidade: 15,
    valorUnit: 188.99,
  },
  {
    id: "2",
    nome: "Monitor",
    quantidade: 1,
    valorUnit: 200.58,
  },
  {
    id: "3",
    nome: "Cadeira",
    quantidade: 42,
    valorUnit: 194.58,
  },
];

describe("Suite de testes de produtos", () => {
  it("Deverá retornar um objeto com o nome e valor total do estoque por produto", () => {
    const estoqueProdutos = produtos.map((produto) => {
      return {
        [produto.nome]:
          Math.round(produto.quantidade * produto.valorUnit * 100) / 100,
      };
    });
    expect(estoqueProdutos).toStrictEqual([
      { Teclado: 2834.85 },
      { Monitor: 200.58 },
      { Cadeira: 8172.36 },
    ]);
  });

  it("Deverá retornar o valor do estoque vezes a quantidade de todos os produtos", () => {
    const estoqueProdutos = produtos.reduce((prev, produto) => {
      return prev + produto.quantidade * produto.valorUnit;
    }, 0);
    const estoqueArredondado = Math.round(estoqueProdutos * 100) / 100;
    expect(estoqueArredondado).toEqual(11207.79);
  });

  it("Deverá retornar o id de um produto", () => {
    const produto = produtos.find((produto) => produto.id === "2");
    expect(produto.id).toEqual("2");
  });

  it("Não deverá retornar o id de um produto não existente", () => {
    const produto = produtos.find((produto) => produto.id === "100");
    expect(produto).toBeUndefined();
  });

  it("Deverá retornar o objeto de um produto", () => {
    const produto = produtos.find((produto) => produto.id === "2");
    expect(produto).toStrictEqual({
      id: "2",
      nome: "Monitor",
      quantidade: 1,
      valorUnit: 200.58,
    });
  });
});
