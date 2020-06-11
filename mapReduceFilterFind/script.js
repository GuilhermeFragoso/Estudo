const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

// MAP: Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idades = usuarios.map(function (item) {
  return item.idade;
});

console.log(idades);

//----------------------------------------------------------------------------------------------------------
// FILTER: Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos

const rocketseat = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa == "Rocketseat";
});

console.log(rocketseat);

//-----------------------------------------------------------------------------------------------------------
// FIND: Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const google = usuarios.find(function (item) {
  return item.empresa === "Google";
});

console.log(google);

//------------------------------------------------------------------------------------------------------------
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos

const calculo = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);

console.log(calculo);
