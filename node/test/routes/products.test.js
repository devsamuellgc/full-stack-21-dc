const produtos = [
  {
    id: "1",
    nome: "Teclado",
    quantidade: 15,
    valorUnit: 100,
  },
  {
    id: "2",
    nome: "Monitor",
    quantidade: 1,
    valorUnit: 200,
  },
];

describe("Suite de testes de produtos", () => {
  it("Deverá retornar um objeto com o nome e valor total do estoque por produto", () => {
    const estoqueProdutos = produtos.map((produto) => {
      return {
        [produto.nome]: produto.quantidade * produto.valorUnit,
      };
    });
    expect(estoqueProdutos).toStrictEqual([
      { Teclado: 1500 },
      { Monitor: 200 },
    ]);
  });

  it("Deverá retornar o valor do estoque vezes a quantidade de todos os produtos", () => {
    const estoqueProdutos = produtos.reduce((prev, produto) => {
      return prev + produto.quantidade * produto.valorUnit;
    }, 0);
    expect(estoqueProdutos).toEqual(1700);
  });
});
