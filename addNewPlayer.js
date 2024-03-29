// функция, создающая игроков
// данные об игроке берутся из:
//1. формы: имя, количество стартовых стэков (ему будет равняться количество стэков, взятых из банка, но со знаком минус)
//2. конструкторов:
// 2.1  id (начинается с 1 и далее, для каждого нового игрока id увеличивается на 1 (где хранить id, чтобы увеличивать его для следующих игроков?)), 
//2.2. методы передачи стэка другому игроку или в банк

let arrayOfPlayersId = new Array();

function AddNewPlayer(name, stackInGame) {
    this.name = name;
    this.stackInGame = stackInGame;
    this.stackFromBank = - stackInGame;
    //id?
    this.addPlayersId = function (arr) {
        let lengthOfArray = arr.length;
        if (lengthOfArray === 0) {
            this.id = 1;
            arrayOfPlayersId.push(1);
        } else {
            this.id = lengthOfArray + 1;
            arrayOfPlayersId.push(lengthOfArray + 1);
        };
    };

    this.giveAStack = function (obj, numberOfStakcs) {
        this.stackInGame = this.stackInGame - numberOfStakcs;
        obj.stackInGame = obj.stackInGame + numberOfStakcs;
    };
};

let test = new AddNewPlayer('Roma', 1);
test.addPlayersId(arrayOfPlayersId);
console.log(test)