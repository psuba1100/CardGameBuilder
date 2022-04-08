export function double(n) {
    return n * 2;
}

export class Address{
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



export class UserBuilder {
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