//é possivel atribuir a uma variavel , varios tipos para a variavel.

//Variavel global que mesmo sendo declarada dentro de um escobo é acessivel de qualquer parte do codigo.
var a:string = "a";
//variavel de escopo local que so é acessivel dentro do seu escopo
let b:string|number = "b";
//variavel de escopo local que so é acessivel dentro do seu escopo e não pode ser editada.
const c:string|boolean|number|undefined = "c";
//obejetos variaveis que existem como coleções nelas podem ser atribuidas vvarios valores neles, um exemplo de objeto é se voce criar um objeto pessoa,
//ele pode conter todos os atributos de uma pessoa:nome, idade, sexo, altura, peso, etc..
interface Pessoa{
    nome: string,
    idade: number,
    altura: number,
    peso: number,
    sexo: string,
    profissao?: string
}
const pessoa:Pessoa = {
    nome: "Lucas Guimaraes Moreira",
    idade: 25,
    altura: 184.7,
    peso: 160,
    sexo: "Masculino"
}
//console.log(pessoa.nome+"\n"+ pessoa.idade+"\n"+pessoa.altura+"\n"+pessoa.peso+"\n"+pessoa.sexo);
const pessoa1:Pessoa = {
    nome: "Matheus",
    idade: 19,
    altura: 160.8,
    peso: 70,
    sexo: "Masculino"
}
//console.log(pessoa1.nome+"\n"+ pessoa1.idade+"\n"+pessoa1.altura+"\n"+pessoa1.peso+"\n"+pessoa1.sexo);

//array do tipo pessoa, no qual pode ser atribuido varios objetos a uma lista.
const listaPessoa : Array<Pessoa> = [
    pessoa,
    pessoa1
]
/*
if(pessoa.peso > 90 && pessoa.peso < 120){
    console.log(pessoa.nome + " tem " + pessoa.peso + " quilos ele esta Com Sobrepeso!");
}else if(pessoa.peso < 90){
    console.log(pessoa.nome + " está " + pessoa.peso + " quilos ele esta no peso ideal!");
}else{
    console.log(pessoa.nome + " está " + pessoa.peso + " quilos ele esta Obeso!");
}

for (let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++){
        console.log(i+"*"+j+"="+i*j);
    }
    console.log("-------------------------------------");
}
*/
/*
const arr: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
arr.forEach(num=>{
    if(num%2==0){
        console.log("PAR!");
    }else{
        console.log("IMPAR!");
    }
})
const User = {
    nome: "Lucas Guimaraes Moreira",
    age: 25,
    //é possivel criar uma função dentro de um objeto, e de dentro do objeto voce pode acessar seus atributos através do this,
    //o this aponta para ele mesmo, então quando eu chamo this.nome ele diz que é para printar o nome armazenado no objeto.
    showName(){
        console.log("Olá "+ this.nome)
    }
}
const User1 = {
    nome: "Lucas Guimaraes Moreira",
    age: 25,
    //é possivel criar uma função dentro de um objeto, e de dentro do objeto voce pode acessar seus atributos através do this,
    //o this aponta para ele mesmo, então quando eu chamo this.nome ele diz que é para printar o nome armazenado no objeto.
    showName(){
        return "Olá " + this.nome + " Seja bem vindo!"
    }
}*/
//POO: paradigma de programação orientada a objetos.

// diferença quando eu so chamo o nome da variavel ele me retorna o objeto, quando voce faz a chamada atraves do objeto.atributo, ele retorna o valor armazenado
//no objeto .

//nunca chamar uma função de um objeto dentro de um console.log(), fiz isso e ele retornou undefined por que a função so printa ela não retorna nada, uma correção
//seria em vez de printar dentro da função um retornar uma string com a mensagem e printar ela fora do objeto.

//User.showName()
//console.log(User1.showName())

//como é possivel ver o problema foi resolvido retornando uma string.


//CLASSES: utilizadas como blocos de padronização, no caso do exemplo usado, voce pode ter milhares de usuarios, para serem criados não vai ser como os objetos
//vistos acima, eles vão criar instancias da classe usuario.
class Usuario {
    name:string = ""
    age:number = 0
    permission = 0

    //construtor: quando você cria a classe o construtor pede os atributos para finalizar a criação
    //no caso ele pede os valores necessarios, esses ja vão ser atribuidos
    constructor(name: string,age: number,permission: number) {
        this.name = name
        this.age = age
        this.permission = permission
    }
    greet(){
        return "Olá " + this.name + " Vejo que você tem "+this.age+" idade.\nSua permissão esta no nivel: "+this.permission
    }
}
//Instancia, diferentes versoes de uma classe que foram criadas e cada uma é individualmente elá mesma, uma instancia não é a mesma da outra.
let user1 = new Usuario("Lucas Guimaraes Moreira", 25 , 1)
console.log(user1.greet())
let user2 = new Usuario("Josias", 11 , 0)
console.log(user2.greet())
let user3 = new Usuario("Josiana", 19 , 0)
console.log(user3.greet())