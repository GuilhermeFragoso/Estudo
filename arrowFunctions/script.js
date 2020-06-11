// 3.1
const arr = [1, 2, 3, 4, 5];
const arrow1 = arr.map(function (item) {
  return item + 10;
});

const arrow3dot1 = arr.map((item) => item + 10);

console.log(arrow1);
console.log(arrow3dot1);

//3.2
//Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}
mostraIdade(usuario);
console.log(mostraIdade(usuario));

const arrow3dot2 = (usuario) => usuario.idade;
console.log(arrow3dot2(usuario));

//3.3
//Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = "Diego", idade = 18) {
  return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const arrow3dot3 = (nome = "Diego", idade = 18) => ({
  nome,
  idade,
});

console.log(arrow3dot3(nome, idade));
console.log(arrow3dot3(nome));

//3.4
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

const promise34 = () => new Promise((resolve, reject) => resolve());
