![Imgur](https://i.imgur.com/nxLsXex.png)

# HTML Card Game Builder
___
This API is licensed as MIT

___
___

## Docs In Slovak Language

___

### Návod
___

#### Ako nastaviť projekt

<br/>

**1. Sťahovanie example súboru**

Toto je veľmi jednoduchý proces. Váše súbory by mali vyzerať nejako takto:

* js
    * api.js
    * main.js
* index.html
* style.css

**Index.html**
> index.html je html súbor obsahujúci všetky potrebné html elementy. **Tento súbor upravujte len za predpokladu, že poznáte html syntax. Nezabúdajte že aj upravný html tag musí obsahovať určité elementy!** *K týmto elementom sa dostaneme ďalej neskôr*

**style.ccs**
> style.css je súbor, obsahujúci celé štýlovanie stránky. Predvolené štýlovanie je veľmi jednoduché (*ak používate betu tak môže vyzerať neesteticky a neupravene*). Tento súbor odporúčame upraviť na vaše vlastné štýlovanie. **Na upravenie tohto súboru je dôležité, aby ste ovládaly css syntax.**

**js/main.js**

>main.js je súbor, obsahujúci kompletnú logiku vašej stránky. Tento súbor je nutné upraviť aby bolo možné používať vašu kartovú hru správne (*ako na to si ukážeme ďalej*). **Na Upravenie tohto súboru je *nutné* aby ste ovládali JavaScript.**

**js/api.js**

>api.js je súbor, obsahujúci všetky potrebné funkcie a logiku na chod vašej webovej kartovej hry. **Tento súbor *vysoko odporúčame* neupravovať! Jeho úpravy môžu viesť k chýbam spôsobujúcim, že vaša aplikácia *prestane kompletne fungoavať*.**

**2. Sťahovanie api**

Za predpokladu že si stiahnete samotný api.js súbor sa musíte uistiť, že je všetko urobené tak aby to fungovalo dohromady. Na to musíte urobiť niekoľko krokov:

1. Spojenie html súboru a hlavného JavaScript súboru

> Najpr musíte prepojiť hlavný javascriptový súbor s hlavným html súborom. JavaScriptový súbor musí byť navyše typu **module** urobíte to pridaním následovného tagu do html súboru.

```html
<script type="module" src="./main.js"></script>
```

2. Importovanie API z api.js do main.js
> Na to aby ste vôbec mohli používať API v hlavnom javascript súbore musíte doň vložiť na samý vrch túto líniu:

```javascript
import { double, UserBuilder, Address } from "./api";
```
3. použitie

> Následne urobte load funkciu do ktorej vložíte váš kód v ktorom môžete použiť aj Card Game Builder API

```javascript
window.addEventListener("load", function () {
    //your code
});
```
****

<br/>

#### Základné nastavenia

Každá aplikácia potrebuje settings na to aby fungovala správne. Settings **musia obsahovať:**

1. Id základného divider-u pre hráča *(1,2,3,4)*
1. Id textu obsahujúceho meno hráča *(1,2,3,4)*
1. Zdroj mena hráča *(1,2,3,4)*

**Ako to nastaviť:**

**1. vytvorenie class**
> Musíte sa usitiť, že **váš hlavný súbor obsahuje základný import.** *O základný import sa nemusíte starať pokiaľ sti si sitahli example source code.*

**Import:**

```javascript
import { Rule } from "./api.js";
```

<br/>

Následne vytvorte class rule pod názvom aký si zvolíte. Je na vás aký typ premennej použijete (var, let, const) my však odporúčame **let alebo const** pretože zaberajú menej výkonu.

```javascript
let settings = new Rule('settings')
```

>Uistite sa že ste do rule pridali parameter **'settings'**. Následne pridávajte ďalšie nastavenia.

```javascript
    let settings = new Rule('settings')
        .setPlayerOneDivId('div1')
        .setPlayerOneNameId('h1')
        .setPlayerOneName('prompt')
        .setPlayerOneNamePromptMessage('Aké je tvoje meno')
        .build()
```

<br/>

```javascript
    .setPlayerOneDivId('div1')
```

Pomocou tohto nastavenia nastavíte Id pre divider v ktorom sa nachádza meno hráča a karty. **Za predpokladu že ste si stiahli example source code, nemusíte definovať túto hodnotu**

<br/>

```javascript
    .setPlayerOneNameId('h1')
```

Pomocou tohto nastavenia nastavíte Id textu ktorý obsahuje meno hráča. **Za predpokladu že ste si stiahli example source code, nemusíte definovať túto hodnotu**

<br/>

```javascript
    .setPlayerOneName('prompt')
```

Pomocou tohto nastavenia nastavíte meno hráča 1. Táto hodnota môže byť object (premenná) alebo string. Pokiaľ chcete aby bola hráčovi položená otázka na jeho meno, môžete použiť 'prompt'. *'prompt' je defaultná hodnota.*

<br/>

```javascript
    .setPlayerOneNamePromptMessage('Aké je tvoje meno')
```

Za predpokladu že ste .setPlayerOneName nastavili na prompt, môžete nastaviť otázku, ktorá sa položí hráčovi. *Táto hodnota je defaultne nastavená na "Hey player one! How should we call you?*

<br/>

```javascript
    .build()
```

Na úplnom konci sa musí nachádzať **.build()**. Toto nastavenie dokončí nastavovanie pravidiel.

Toto isté platí aj pre player two, theree a four (nezabudnite nahradiť čísla v názvoch)

```javascript
let playerRule = new Rule('settings')
    .setPlayerOneDivId('div1')
    .setPlayerOneNameId('h1')
    .setPlayerOneName('prompt')
    .setPlayerOneNamePromptMessage('Aké je tvoje meno')
    .setPlayerTwoDivId('div2')
    .setPlayerTwoNameId('h2')
    .setPlayerTwoName('prompt')
    .setPlayerTwoNamePromptMessage('Aké je tvoje meno')
    .build()
```


























<!--->

![Imgur](https://i.imgur.com/6DsejwJ.png)
# Card Game Builder Docs
---
___
### by simon's studios
*MIT license*

---
**UwU**

~~uwu~~

> quote
> **quote**

* uwu
    * **uwu**
    * uwu
    * uwu
* owo

1. uwu
1. owo

` let rule = new rule('Settings') `

```javascript
let rule = new Rule('Settings')
    .setPlayerOneDivId('playerone')
    .setPlayerOneNameId('playertwoname')
```


|Name   | Email        |
|-------|--------------|
|John   |uwu           |
|bruh   |owo           |

* [ ] task1
<!--->