import { Rule } from "./api.js";

window.addEventListener("load", function () {
    let uwu = new Rule('settings')
        .setPlayerOneDivId('uwu')
        .setPlayerOneNameId('uwu')
        .build()

    console.log(uwu)
});

