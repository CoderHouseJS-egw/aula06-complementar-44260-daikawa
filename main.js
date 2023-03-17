/**
 * Desafio Complementar: Gerar HTML
 * Turma 44260 Javascript
 * Erica Daikawa
 */

alert("Desafio: Gerar HTML\nVamos cadastrar uma pessoa");
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

  /** percorrendo array de objetos ordenado por idade que gera uma seção no HTML */
  let pai = document.getElementById("pessoas");

  for (const velho of maisVelho) {
    let li = document.createElement("li");
    li.innerHTML = `pessoa: ${velho.username}, data de nasc: ${velho.bornDate}, idade: ${velho.age}`;
    pai.appendChild(li);
  }
};

/** chamadas das funções */
registrarPessoa();
novoRegistro();
ordernarPorIdade();

/** função: recarregarAPagina */
const recarregarAPagina = () => {
  window.location.reload();
};
