



let commonBank = {
    Roma: -1,
    Stas: -1,
    Vova: -1
}

let keysOfBank = Object.keys(commonBank);

let roma = {
    name: 'Roma',
    stackFromBank: -1,
    stackInGame: 1,
    giveAStack: function (obj, numberOfStakcs) {
        this.stackInGame = this.stackInGame - numberOfStakcs;
        obj.stackInGame = obj.stackInGame + numberOfStakcs;

    },
    
    returnStakInBank: function (commonBank, numberOfStakcs) {
        this.stackInGame = this.stackInGame - numberOfStakcs;
        this.stackFromBank = this.stackFromBank + numberOfStakcs;
        let playersInBankArray = Object.keys(commonBank);
        for (var i = 0; i < playersInBankArray.length; i++) {
            if (playersInBankArray[i] == this.name) {
                let steckToTheBank = this.name;
                console.log(commonBank[steckToTheBank] = commonBank[steckToTheBank] + numberOfStakcs);
                //console.log(commonBank['this.name'] = this.stackFromBank); не правильно работает

            }
        }
    }
}

let stas = {
    name: 'Stas',
    stackFromBank: -1,
    stackInGame: 1,
    giveAStack: function (obj, numberOfStakcs) {
        this.stackInGame = this.stackInGame - numberOfStakcs;
        obj.stackInGame = obj.stackInGame + numberOfStakcs;
    },
    returnStakInBank: function (stack) {
        this.stackInGame = this.stackInGame - stack;
        this.stackFromBank += stack;
    }
}

let vova = {
    name: 'Vova',
    stackFromBank: -1,
    stackInGame: 1,
    giveAStack: function (obj, numberOfStakcs) {
        this.stackInGame = this.stackInGame - numberOfStakcs;
        obj.stackInGame = obj.stackInGame + numberOfStakcs;

    },
    returnStakInBank: function (stack) {
        this.stackInGame = this.stackInGame - stack;
        this.stackFromBank += stack;
    }
}