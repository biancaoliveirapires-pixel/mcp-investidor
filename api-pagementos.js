// Código gerado seguindo as regras do MCP
function criarPagamento(dados) {
  // Regra 2 - LGPD: não salva cartão, só criptografa
  const cartaoCriptografado = criptografar(dados.cartao);
  
  // Regra 3 - Todo clique em venda gera relatório
  registrarLog("venda_realizada");

  // Regra 1 - Retorno leve, sem dados pesados
  return { status: "ok", id: "123" };
}
