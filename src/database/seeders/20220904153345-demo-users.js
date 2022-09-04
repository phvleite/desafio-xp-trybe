'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users',
    [
      {
        name: "Paulo Leite",
        email: "phvleite@gmail.com",
        password: "$2b$08$av9tXYcEgUVG4M8dk1s7heKNDweBifwKOXPjbdP9kW0QrFOkGhklO",
      },
      {
        name: "Lauro Evangelista Betran",
        email: "lauroeb@gmail.com",
        password: "$2b$08$AgT.FDnG6LbwRUGZUy3Bg.w47puFNk2dAxeOV5RdbjlXe95r2UXD2",
      },
      {
        name: "Julia Esmeralda do Amaral Almeida",
        email: "esmeralda@gmail.com",
        password: "$2b$08$uP3vZOStQpxyW/Xp7Wwn.Op1p6quJfyhqG.0D39LqbMOfmgW9lA9O",
      },
      {
        name: "Adriana Jambo Cantarelli",
        email: "aj_cantarelli@outlook.com",
        password: "$2b$08$FEt8KU6JF9V0lpZiTD9ArOGr/pRKKzh/FrCux0ghH7K7lKFLC6uHW",
      },
      {
        name: "Lucas Cansanção",
        email: "lucascansancao@hotmail.com",
        password: "$2b$08$5oxCgNeE0mt6JGNKpkNz/.BhiMIp0W8BIJqv0rQsHBQAJXliJN.Va",
      },
      {
        name: "Felinto Pedro Salgado",
        email: "felintopedrosalgado@uol.com.br",
        password: "$2b$08$aTs3UijW1AbpL8EGXxZmJeaKF9k85PBsmmdSI5bDWz6RwayTBcPs.",
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('users', null, {})
  }
};
