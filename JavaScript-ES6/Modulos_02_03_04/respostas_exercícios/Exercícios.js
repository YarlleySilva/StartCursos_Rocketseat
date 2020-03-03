//Exercício 02:
//Export dele está no arquivo ExercícioExport.js

import ClasseUsuario from "./ExercícioExport";

ClasseUsuario.info();

import { idade } from "./ExercícioExport";

console.log(idade);

import Usuario, { idade as IdadeUsuario } from "./ExercícioExport";

console.log(Usuario);
console.log(IdadeUsuario);


//Exercício 03

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


async function umPorSegundo() {
  await delay();
  console.log("1s");

  await delay();
  console.log("2s");

  await delay();
  console.log("3s");
}

umPorSegundo();



//Exercício 03.2

import axios from 'axios';

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);

  } catch (error) {
    console.warn("Usuário não Existe");
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


//Exercício 03.3

import axios from 'axios';
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch (error) {
      console.warn("Repositório não existe");
    }
  }
}

Github.getRepositories("Rocketseat/starter-javascript-es6-exercicios");
Github.getRepositories('rocketseat/dslkvmskv');



//Exercício 03.4

import axios from 'axios';

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);

    console.log(response.data);

  } catch (error) {

    console.warn("Usuário não existe");

  }
}

buscaUsuario("diego3g");

