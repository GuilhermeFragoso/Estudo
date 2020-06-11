//-----Desestruturação-----
/*Na seguinte função:

function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: "Diego", idade: 23 });

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas:
return `${nome} tem ${idade} anos.`;
*/

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: "Diego", idade: 23 });
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//----------REST----------
//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

//----------SPREAD----------
//Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
//A partir do objeto e utilizando o operador spread:

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };

const usuario3 = { ...usuario, cidade: "Lontras" };

console.log(usuario2);
console.log(usuario3);

//----------TEMPLATE LITERALS----------
//Converta o seguinte trecho de código utilizando Template Literals:
const templateUsuario = "Diego";
const templateIdade = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${templateUsuario} possui ${templateIdade} anos`);

//----------OBJECT SHORT SYNTAX----------
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
/*
const nome = 'Diego';
const idade = 23;
*/
const usuario = {
  nome,
  idade,
  cidade: "Rio do Sul",
};
