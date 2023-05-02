let bank = {};
let players = [];
// let roma = {};
// let vova = {};
// let sasha = {};
// let stas = {};
// let artur = {};

// функция добавления стека игроку
let addOfStack = function (nameOfPlayer) {

}

// функция создания игрока
function Player(name, stack) {
    this.name = name;
    this.stack = stack;
}

let newPlayer = new Player("Roma", 1);
players.push(newPlayer);

let newPlayer1 = new Player("Stas", 1);
players.push(newPlayer1);

let stackCalculate = function() {
// найти нужный объект в массиве через перебор массива и сравнения со значением name необхожимого объекта
players.find(() => players.name == "Roma")
console.log(players.name);

}

stackCalculate()
//console.log(players[0].stack = players[0].stack + players[1].stack)

//$("p").click(function(){
    //var newPerson = new Person("John", "Doe", "50", "blue");
   // people.push(newPerson);
   // console.log("A new person has been created!");
//});