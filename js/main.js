import { double, UserBuilder, Address } from "./notmain.js";

window.addEventListener("load", function () {
    console.log(double(5))

    function ds(programmers) {

    }


    
    let address = new Address(200, "uwu street")

    let builder = new UserBuilder('bob')
        .setAge(69)
        .setPhone(949666696)
        .setAddress(address)
        .build()

    console.log(builder)

});
