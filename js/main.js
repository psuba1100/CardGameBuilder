import { Rule } from "./api.js";

window.addEventListener("load", function () {
    let playerRule = new Rule('settings')
        .setPlayerOneDivId('uwu')
        .setPlayerOneNameId('uwu')
        .setPlayerOneName('prompt')
        .setPlayerOneNamePromptMessage('Aké je tvoje meno')
        .setPlayerTwoDivId('uwu')
        .setPlayerTwoNameId('uwu')
        .setPlayerTwoName('prompt')
        .setPlayerTwoNamePromptMessage('OWOWOWOWOWOWOWOWO')
        .build()

});

