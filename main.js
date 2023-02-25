/**
 * Desafio Complementar: Ordernar um array de objetos
 * Turma 44260 Javascript
 * Erica Daikawa
 */

alert("Desafio: Ordernar um array de objetos\nVamos cadastrar uma pessoa");
/** declarando o array de objetos */
const pessoas = [];

/** classe Pessoa */
class Pessoa {
  constructor(user) {
    this.username = user.username;
    this.bornDate = user.bornDate;
  }
  /** método yearOld - calcula idade */
  yearOld() {
    const today = new Date();
    const birthDate = new Date(this.bornDate);
    let result = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      result--;
    }
    return result;
  }
}

/** função de cadastro */
const registrarPessoa = () => {
  cadastro = {
    username: prompt("Nome: "),
    bornDate: prompt("Digite a data de nascimento no formato YYYY/MM/DD"),
  };
  let pessoaAux = new Pessoa(cadastro);
  pessoaAux.age = pessoaAux.yearOld();
  /** push para o array de objetos */
  pessoas.push(pessoaAux);
  alert("Nome: " + pessoaAux.username + "\nIdade: " + pessoaAux.age);
};

/** função de novo cadastro */
const novoRegistro = () => {
  let novaPessoa = prompt("Registrar nova pessoa? s/n");
  if (novaPessoa === "s") {
    registrarPessoa();
    novoRegistro();
  }
};

let idades = [];
/**  função que ordena o array de objetos*/
const ordernarPorIdade = () => {
  /** método sort() no array de objetos */
  const maisVelho = pessoas.sort(function (a, b) {
    if (a.age > b.age) {
      return -1;
    }
    if (a.age < b.age) {
      return 1;
    }
    return 0;
  });
  /** mostra array de objetos ordernado por idade no console */
  console.log(
    "mostra array de objetos ordernado\nda pessoa mais velha para a mais nova"
  );
  console.log(maisVelho);
  /** percorrendo array de objetos ordernado por idade */
  const arrMaisVelho = [];
  for (const velho of maisVelho) {
    arrMaisVelho.push(velho.username);
    arrMaisVelho.push(velho.age);
  }
  idades = arrMaisVelho.join(", ");
};

let nomes = [];
/** função que cria um array apenas com os nomes */
const mostrarNomes = () => {
  /** array de nomes */
  const arrayNomes = [];
  /** percorrendo o array de objetos */
  for (const pessoa of pessoas) {
    arrayNomes.push(pessoa.username);
  }
  /** método join no array de nomes */
  nomes = arrayNomes.join(", ");
};

/** chamadas das funções */
registrarPessoa();
novoRegistro();
ordernarPorIdade();
mostrarNomes();
alert("alunos: " + nomes + "\nalunos do mais velho ao mais novo: " + idades);

/** função: recarregarAPagina */
const recarregarAPagina = () => {
  window.location.reload();
};
