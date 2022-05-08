import {Shuffle, Random, RandomBi} from './ssapi.js'

export var CGBE = {
    version: '0.1',
}

class rule {
    constructor(_type){
        this.type = _type

        if(this.type != 'settings'){
            console.error(`${this.type} can't be used in Rule class.`)
        }
    }
}

/**
 * @description Create new game rule
 */

 export class Rule {
    constructor(_type){
        this.type = new rule(_type)
        
    }

    setNumOfPlayers(_nop){
        this.type.nop = _nop
    }

    /**
     * Set id for player one divider
     * @description There is no need to fill up this parameter in case you are using example html document
     * @param {String} _p1divid Enter id of main div for player one
     * @returns 
     */

    setPlayerOneDivId(_p1divid, _p2divid, _p3divid, _p4divid){
        this.type.nop <= 1 ? this.type.p1divid = _p1divid : console.error('number of players and number of player divs do not match!')
        this.type.nop <= 2 ? this.type.p2divid = _p2divid : console.error('number of players and number of player divs do not match!')
        if(this.type.nop >= 1) this.type.p1divid = _p1divid; else console.error('')
        if(typeof this.type.p1divid != "string"){
            console.error("Value of PlayerOneDivId can't be anything else than string.")
        }
        return this
    }

    setPlayerOneNameId(_p1nid){
        this.type.p1nid = _p1nid
        if(typeof this.type.p1nid != "string"){
            console.error("Value of PlayerOneNameId can't be anything else than string.")
        }
        return this
    }

    setPlayerOneName(_input){
        this.type.p1n = _input
        return this
    }

    setPlayerOneNamePromptMessage(_p1npm){
        this.type.p1npm = _p1npm
        if(this.type.p1n != 'prompt'){
            console.error("You can't use setPlayerOneNamePromptMessage in case setPlayerOneName is not defined or it does't equals to prompt")
        }
        return this
    }

    setPlayerTwoDivId(_p2divid){
        this.type.p2divid = _p2divid
        if(typeof this.type.p2divid != "string"){
            console.error("Value of PlayerTwoDivId can't be anything else than string.")
        }
        return this
    }

    setPlayerTwoNameId(_p2nid){
        this.type.p2nid = _p2nid
        if(typeof this.type.p2nid != "string"){
            console.error("Value of PlayerTwoNameId can't be anything else than string.")
        }
        return this
    }

    setPlayerTwoName(_input){
        this.type.p2n = _input
        return this
    }

    setPlayerTwoNamePromptMessage(_p2npm){
        this.type.p2npm = _p2npm
        if(this.type.p2n != 'prompt'){
            console.error("You can't use setPlayerTwoNamePromptMessage in case setPlayerTwoName is not defined or it does't equals to prompt")
        }
        return this
    }

    build() {
        console.log(`CARDGAMEBUILDER DEBUG: Class Rule has been created`)
        return this.type
    }
}

/**
 * @description This varieble contains all enviroment data
 */


