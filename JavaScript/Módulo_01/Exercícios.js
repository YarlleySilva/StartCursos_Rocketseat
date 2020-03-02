//Exercício 01:
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

console.log("O Usuário mora em " + endereco.cidade + " / "
  + endereco.uf + ", no bairro " + endereco.bairro + ", na rua "
  + endereco.rua + " com n° " + endereco.numero + ".");


//************************************************************************

// Exercício 02:
function pares(x, y) {

  while (x <= y) {

    if (x % 2 == 0) {
      console.log(x);
    }
    x++
  }

};
pares(32, 321);
console.log(pares());

//************************************************************************

//Exercício 03:
function temHabilidade(skills) {

  if (skills.indexOf("Javascript") !== -1) {
    return true;
  }
  else {
    return false;
  }
};

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

//************************************************************************

//Exercício 04:
function experiencia(anos) {

  if (anos >= 7) {
    console.log("Jedi Master");
  }
  else if (anos >= 3 && anos <= 6) {
    console.log("Avançado");
  }
  else if (anos >= 1 && anos <= 3) {
    console.log("Intermediário");
  }
  else if (anos >= 0 && anos <= 1) {
    console.log("Iniciante");
  }

};

var anosEstudo = 7;
experiencia(anosEstudo);

//************************************************************************

// Exercício 05:
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

pecorrer(usuarios);
function pecorrer(usuarios) {

  for (let user of usuarios) {
    console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join()}.`);
  }
};