//EXERCíCIO 1
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//*********************************************************

//EXERCíCIO 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


// MAP () Para pecorrer a lista
const idade = usuarios.map(function (users) {
  return users.idade;
});

console.log(idade);


//Filter () retorna apenas os que passarem no teste
const user = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === "Rocketseat";
});

console.log(user);


//find () procura elementos dentro do array
const user = usuarios.find(function (item) {
  return item.empresa === "Google";
});

console.log(user);


// Utilizando Map e Filter juntos
const idade = usuarios.map(function (users) {
  const oldUser = { ...users, idade: users.idade * 2 };

  return oldUser;
}).filter(function (users) {
  return users.idade <= 50;
});

console.log(idade);


//*********************************************************

//EXERCíCIO 3
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);


const usuario = { nome: "Diego", idade: 23 };
const mostrarIdade = (usuario) => usuario.idade;
console.log(mostrarIdade(usuario));


const nome = "Diego";
const idade = 23;
const mostrarUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });
console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));


const promise = () => new Promise((resolve, reject) => resolve());

//*********************************************************

//EXERCíCIO 4
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);


const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos`;
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//*********************************************************

//EXERCíCIO 5
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);



const soma = (...numbs) => numbs.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));



const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" } };
console.log(usuario2);
console.log(usuario3);

//*********************************************************

//EXERCíCIO 6
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos.`);

//*********************************************************

//EXERCíCIO 7
const nome = 'Diego';
const idade = 23;
const usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};
console.log(usuario);