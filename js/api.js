import {Shuffle, Random, RandomBi} from './ssapi.js'





class rule {
    constructor(_type){
        this.type = _type

        if(this.type != 'settings'){
            console.error(`${this.type} can't be used in Rule class.`)
        }
    }
}



 export class Rule {
    constructor(_type){
        this.type = new rule(_type)
        
    }

    /**
     * 
     * @param {string} ID Id of player 1's divider 
     * @returns 
     */

    setPlayerOneDivId(_p1divid){
        this.type.p1divid = _p1divid
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

export var CGBE = {version: '0.1'}

/**
 * This function will accept details about a person and create an object for them
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {boolean} isDeveloper 
 * @deprecated this function is still working however, it wont. There is updated function for this. Check out docs
 */

export function createPerson(name, age, isDeveloper){
    console.warn('Function createPerson is deprecated')
    return {
        name: name,
        age: age,
        isDeveloper: isDeveloper
    }
}