'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('acoes',
    [
      { acao: "ABC BRASİL RN", valor: 19, qtde: 40050 },
      { acao: "ALPARGATAS RN", valor: 20, qtde: 23053 },
      { acao: "ALUPAR UNT", valor: 28, qtde: 35313 },
      { acao: "AMBEV ON", valor: 15, qtde: 42767 },
      { acao: "ANIMA ON", valor: 5, qtde: 92619 },
      { acao: "AREZZO CO ON", valor: 92, qtde: 82049 },
      { acao: "AZUL RN", valor: 16, qtde: 40707 },
      { acao: "B3 ON", valor: 12, qtde: 28028 },
      { acao: "BANRISUL PNB", valor: 11, qtde: 30203 },
      { acao: "BB SEGURIDADE ON", valor: 28, qtde: 6834 },
      { acao: "BK BRASİL ON", valor: 7, qtde: 32635 },
      { acao: "BR MALLS PART ON", valor: 8, qtde: 12012 },
      { acao: "BR PROPERTIES ON", valor: 8, qtde: 8955 },
      { acao: "BRADESCO ON", valor: 15, qtde: 96892 },
      { acao: "BRADESCO RN", valor: 19, qtde: 21889 },
      { acao: "BRADESPAR RN", valor: 21, qtde: 52888 },
      { acao: "BRASİL ON", valor: 42, qtde: 43406 },
      { acao: "BRASKEM RNA", valor: 32, qtde: 87462 },
      { acao: "BRE ON", valor: 16, qtde: 8493 },
      { acao: "BTGP BANCO UNT", valor: 25, qtde: 98630 },
      { acao: "CAMIL ON", valor: 10, qtde: 70833 },
      { acao: "CCR ON", valor: 13, qtde: 58181 },
      { acao: "CEMIG ON", valor: 18, qtde: 68293 },
      { acao: "CEMIG RN", valor: 12, qtde: 79506 },
      { acao: "CIELO ON", valor: 5, qtde: 13630 },
      { acao: "COMGAS RNA", valor: 136, qtde: 99173 },
      { acao: "COPASA ON 112", valor: 14, qtde: 59779 },
      { acao: "COPEL PNB", valor: 7, qtde: 55787 },
      { acao: "COŞAN ON", valor: 19, qtde: 33829 },
      { acao: "COŞAN LOG ON", valor: 23, qtde: 88469 },
      { acao: "CPFL ENERGIA ON", valor: 35, qtde: 86858 },
      { acao: "CVC BRASİL ON", valor: 7, qtde: 62284 },
      { acao: "CYRELA REALT ON", valor: 16, qtde: 16714 },
      { acao: "DIRECIONAL ON", valor: 14, qtde: 24184 },
      { acao: "DOMMO ON", valor: 1168, qtde: 63714 },
      { acao: "ECORODOVIAS ON", valor: 5, qtde: 43346 },
      { acao: "ELETROBRAS ON", valor: 46, qtde: 69110 },
      { acao: "ELETROBRAS PNB", valor: 47, qtde: 83272 },
      { acao: "EMBRAER ON", valor: 13, qtde: 36352 },
      { acao: "ENERGIAS DO BRASİL ON", valor: 22, qtde: 23116 },
      { acao: "ENERGISA UNİT", valor: 43, qtde: 96300 },
      { acao: "ENEVA ON", valor: 15, qtde: 1898 },
      { acao: "ENGIE BRASİL ON", valor: 40, qtde: 6068 },
      { acao: "EQUATORIAL ON", valor: 24, qtde: 94330 },
      { acao: "EVEN ON", valor: 6, qtde: 22755 },
      { acao: "EZTEC ON", valor: 20, qtde: 88099 },
      { acao: "FERBASA RN", valor: 57, qtde: 25992 },
      { acao: "FLEURY ON", valor: 16, qtde: 72373 },
      { acao: "GAFISA ON", valor: 16, qtde: 15442 },
      { acao: "GERDAU PN", valor: 24, qtde: 72328 },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('acoes', null, {})
  }
};
