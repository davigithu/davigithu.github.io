document.write("Olá mundo!");
window.alert(frase);

/*gerador*/

function gerar() {
    htmlfinal = Math.floor(Math.random() * 100);
    document.getElementById('Numeros').innerHTML = htmlfinal;
}


/*repetição*/

function repetir() {
    htmlfinal = '';
    for (var i = 0; i <= 10; i++) {
        if (i % 1 == 0)
            htmlfinal += i + '<br>';
    }
    document.getElementById('repetir').innerHTML = htmlfinal;
}


/*lista*/

var listaAlunos = [];

function preencher() {
    var htmlfinal = "";
    var tamanholista = listaAlunos.length;

    for (var i = 0; i < tamanholista; i++) {
        htmlfinal += "<option value = " + i + ">" + listaAlunos[i] + "</option>";
    }

    document.getElementById("meuSelect").innerHTML = htmlfinal;
}

function adicionarItem() {
    var valorInput = document.getElementById("inputItem").value;
    listaAlunos.push(valorInput);
    preencher();

}

function removerItem() {
    var valorSelect = document.getElementById("meuSelect").value;
    listaAlunos.splice(valorSelect, 1);
    preencher();
}


/*dado*/

function jogar() {
    var lados = document.getElementById("lados").value;
    dado = Math.floor(Math.random() * lados + 1);
    if (lados == dado) {
        dado += ' Acerto Crítico!';
    }
    document.getElementById('dado').innerHTML = dado;
}

/*Calculadora*/

function soma() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').innerHTML = valor1 + valor2;
}

function sub() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').innerHTML = valor1 - valor2;
}

function mult() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').innerHTML = valor1 * valor2;
}

function divisão() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').innerHTML = valor1 / valor2;
}

/*test2*/
var nome = 'Davi'
var sobrenome = 'Paim'
var idade = '12'

console.log("nome: " + nome);
console.log("sobrenome: " + sobrenome);
console.log("idade: " + idade);

var nome = 'Neymar'
var sobrenome = 'Junior'
var idade = '30'

console.log("nome: " + nome);
console.log("sobrenome: " + sobrenome);
console.log("idade: " + idade);

var pessoamessi = {nome:"Messi", nacionalidade:"Argentina",apelido:"et" };

var pessoaronaldo = {
 nome:"Ronaldo",
 nacionalidade:"Brasil",
 apelido:"cascão",
 copas : function() {
    alert(this.nome +" " + this.apelido + " tem duas copas do mundo")
 },
 nomecompleto: function() {
    return this.nome + " " + this.apelido;
 }
}

console.log("nome: " + pessoamessi.nome);
console.log("nacionalidade: " + pessoamessi.nacionalidade);
console.log("apelido: " + pessoamessi.apelido);

console.log("nome: " + pessoaronaldo.nome);
console.log("nacionalidade: " + pessoaronaldo.nacionalidade);
console.log("apelido: " + pessoaronaldo.apelido);

pessoaronaldo.copas();
console.log(pessoaronaldo.nomecompleto());


function pessoa(_nome,_sobrenome,_idade){
    this._nome=_nome;
    this._sobrenome=_sobrenome;
    this._idade=_idade;
}

var obj= new pessoa('karim','benzema','34');
var obj2= new pessoa('vinícius','juníor','22');
