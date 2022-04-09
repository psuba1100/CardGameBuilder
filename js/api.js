 function double(n) {
    return n * 2;
}

 class Address{
    constructor(_zip, _street){
        this.zip = _zip
        this.street = _street
    }
}

 class User{
    constructor(_name){
        this.name = _name
    }
}



 class UserBuilder {
    constructor(_name) {
        this.user = new User(_name)
    }

    setAge(_age){
        this.user.age = _age
        return this
    }

    setPhone(_phone){
        this.user.phone = _phone
        return this
    }

    setAddress(_address){
        this.user.address = _address
        this.user.zip = this.user.address.zip || 0
        this.user.street = this.user.address.street || 0
        return this
    }

    build() {
        return this.user
    }
}


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

    build() {
        console.log(`CARDGAMEBUILDER DEBUG: Class Rule has been created`)
        return this.type
    }
}