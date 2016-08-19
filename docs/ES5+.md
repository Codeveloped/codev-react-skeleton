# De ES5+ Syntax
Een overzicht van de syntax die gebruikt wordt, die geen onderdeel van ES5 is. Uitgewerkt met noodzakelijke packages, voorbeelden, vergelijkingen en af en toe wat uithalen naar Python.

## Packages
Allereerst een overzicht van de noodzakelijk packages, die nodig zijn voor het uitvoeren van de code. 

### Babel
Babel is een compiler voor javascript, dit stelt je in staat om nieuwere functies te gebruiken in de hedendaagste javascript https://babeljs.io/docs/plugins/

> Als je op de website een preset aanklikt kun je zien welke functionaliteit deze ondersteunt. Het Skeleton bevat alle presets die momenteel ondersteund worden.

### Webpack
Is een packaging tool, die wordt gebruikt om de javascript en zelfs andere dingen als plaatjes en css te transpilen, babel wordt aangestuurd door de webpack configs.

### NPM en package.json
NPM is naast een package tool zoals pip voor python ook een tool om processen mee te starten, deze scripts zijn gedefinieerd in de package.json onder “scripts”. Je kunt zo’n script aanroepen door het volgende commando uit te voeren.
```js
$ npm run <scriptnaam>
```
## Code voorbeelden
Een verzameling code voorbeelden om aan te duiden wat er in het skeleton wordt gebruikt.

### Classes
De volgende classes zijn vergelijkbaar met elkaar.
```js
class Login extends Component {...}
```
```js
React.createClass({...})
```

Met redux gebruiken we in principe geen state meer, maar ondanks dat kan het nog 
wel bruikbaar zijn, classes ondersteunen niet die getInitialState methode, in plaats daarvan gebruik je de constructor:
```js
class Login extends Component {
	constructor() {
		super();
		this.state = {some: ‘state’};
	}
}
```

Hieronder een voorbeeld van het verschil tussen ES5 en ES6.

ES5:
```js
class Login extends Component {
	function render () {
		…
	}
}
```
in ES6:
```js
class Login extends Component {
	render () {
		...
    }
}
```

### Functies
In ES6 heb je een short-hand voor functies. Soms is het handig, maar vaak ook onleesbaar.

ES5:
```js
function (arg1, arg2) {
	return arg1 * arg2
}
```
ES6:
```js
(arg1, arg2) => {
	arg1 * arg2
}
```

### Objecten expanden 
ES5:
```js
var x = {a:1, b:2};
var x2 = {c: 3};
var y = {a: x.a, b: x.b, c: x2.c}
```
ES6:
```js
var x = {a:1, b:2}
var x2 = {c:3}
var y = {x, x2}		// y = { a: 1, b: 2, c: 3}
var x = {a: 1, b: 2}
var y = {...x, b: 3}       // y = { a: 1, b: 3}  ...x voegt alles van x toe, maar dan overschrijft b:3 de key b
```
### Objecten uitpakken 
ES5:
```js
var a = y.a
// or
var a = y[‘a’]
```
ES6:
```js
var { a } = y;
var { a, b } = y;
var { a, ....rest } = y;	// a = y.a, rest = { b: x.b, c: x2.c}
```
### Interpolatie 
ES5:
```js
var x = {a: ‘aap’, b: ‘blij’}
var y = {}
y[x.a] = 1
y[x.b] = 2		// y = { aap: 1, blij: 2}
```
ES6:
```js
var x = {a: ‘aap’, b: ‘blij’}
var y = {
	[x.a]: 1,
	[x.b]: 2
}
```
	
### Decorators
In ES5 heb je er geen, in ES6 wel, maar ze werken niet met mijn babel config mocht je nu wel een voorbeeld hebben dat iemand een decorator gebruikt kun je dat eenvoudig omzetten naar een functie call:

ES6:
```js
@connect(state => {
	x, y
})
export default class Login extends Component {...}
```
ES5:
```js
class Login extends Component {...}

export default connect(state => {
	x, y
})(Login);
```
In principe idem aan python, het resultaat van de decorator wordt uitgevoerd op het object dat je decorate je kunt ook gewoon de decorator als functie aanroepen met het object om hetzelfde resultaat te krijgen.

### Import en export
Im- en exports zijn static, zoals python, ze worden eenmalig uitgevoerd, en het resultaat opgeslagen 2x een file die console.log(‘...’) doet logt 1 maal

In ES5 met webpack heb je (zoals in nodejs) een global module.exports en require(...) methode dat is de AMD module style, in ES6 is een formele universele module definitie en deze gebruikt exports en import .. from ..
```js
//fileA.js
exports function test () {...}
exports function test2 () {...}
	
de export van fileA is:
{ 
	default: {
		test: function test (),
		test2: function test2()
	}
}

// en 
	
//fileB.js
exports default function test () {...}
exports function test3() {...}

de export van fileB is:
{ 
	default: function test(),
	test3: function test3
}

/file-import-test.js
import test from ‘./fileA’
// test is undefined, er is geen default export
import {test} from ‘./fileA’
// test is de functie test
import {test, test2} from ‘./fileA’
// test is de functie test, en test2 de functie test2
import {lol} from ‘./fileA’
// lol is undefined, er is geen export met de naam “lol”
import lol from ‘./fileA’
// lol is undefined, er is geen export met de naam “lol”
import * as functions from ‘./fileA’
// functions is een object {test: .., test2..}

import test from ‘./fileB’
// test is de functie test
import lol from ‘./fileB’
// lol is de functie test
import {test} from ‘./fileB’
// test is undefined (de default export, de functie test, heeft geen attribuut .test)
```
### Shorthand bind
```js
//JSX
<button onClick={this.handleClick}> ik ben een button </button>
```
Als je die button aanklikt en deze gemaakt is in jsx in een react classe (extends Component) dan is de functie ongebonden, ed. de this. binnen die functie na het aanklikken is niet de this van de classe (eg. een statische functie in python, cls vs self) nu kun je bv. in de constructor die this.handleClick bij het instantieren binden aan this
```js
constructor () {
	super()
	this.handleClick = this.handleClick.bind(this);
}
```
Maar dat kun je ook inline doen
```js
//JSX
<button onClick={::this.handleClick}> ik ben een button </button>

// of

<button onClick={this.handleClick.bind(this)}> ik ben een button </button>
```
De eerste variant kan meestal geoptimaliseerd worden zonder de bind en is dus beter. (die met :: )

### Promise
ES6:
```js
var promise = new Promise(function (resolve, reject) {
	//doe iets async, zoals een api call
	request.get(‘/api/status’).done(function (error, result) {
		if (error) { reject(error) }
		else { resolve(result) }
	}); 
});
```
ES5:
Er zijn geen promises, je kunt wel een promise lib gebruiken zoals Bluebird of Q ES6 promise kunnen vaak herschreven worden naar simpele varianten (zoal die hierboven)
en hebben dus de voorkeur.

### Variabelen
ES5:
De scope van “var” is de dichtsbijzijnde functie (boven hem), en/of het file/document
```js
var x = 10;		// scope file als het een module is, of document als het html is
function () {
	var y = 11;	// scope alles binnen deze functie, niet erbuiten
}
```
ES6:
de scope van “var” is de dichtsbijzijnde functie (boven hem), en/of het file/document
- “var” is niet veranderd
- “let” de scope van let is het dischtsbijzinde block
```js
let x = 10;		// scope file als het een module is, of document als het html is

function () {
	let y = 11;	// scope alles binnen deze functie, niet erbuiten
}

for (1...10) {
	let z = 1;		// scope alleen binnen deze for loop (alles met {..} is een block)
}
```
“const” is een constante en kan niet gewijzigd worden, tevens net als modules, wordt deze niet opnieuw ge-evalueerd binnen dezelfde scope, lees sneller.
```js
const x = 10;
x = 11;		//x is nog steeds 10;
```

### Default values
ES5:
```js
var defaultState = {loggedIn: false};

function (state, action) {
	if (state === undefined) state = defaultState;
	...
}
```
ES6:
```js
function (state = {loggedIn: false}, action) {
	...
}
// of
const defaultState = {loggedIn: false}

function (state = defaultState, action) {
	...
}
```

### Algemeen
Alles is een statement, niet speciaal hoger dan ES5 maar toch goed om te weten
```js
var a;		//undefined
a		//undefined
a = 1		//1
var b = 1		//1
a + b		//2
```

Javascript is falsy, en dat is best vet, als je in niet falsy talen een boolean vergelijking doet worden de vergeleken waarden naar booleans gecast, javascript heeft dat niet

PYTHON
```py
a = 1
b = 2
a && b		//True
```
Javascript
```js
var a = 1, b = 2;
a && b		//2
```
Hoe en waarom.. nou voor de vergelijking (truety, of eigenlijk niet falsy)  worden ze vergeleken als booleans, maar ze houden hun eigen waarde omdat alles een statement is, is “a && b” dat ook. Boolean vergelijkingen gaan lval eerst (lval betekend de linker value van een operatie). Zo lang de lval true (truety) is schuif je de check 1 positie op.

Voorbeeld:
```js
a && b && c
// check, is lval truety
isTrue(a)
```
Antwoord ja. Haal lval weg uit de vergelijking:
```js
b && c 
// herhaal totdat alle members gedaan zijn ( isTrue(b) daarna is “c” over en dan 
isTrue(c))
```
Antwoord: nee. Stop en return lval (a in dit geval). 

Voorbeelden:
```js
var a = 1, b = 0, c = 1
a && b && c	// 0
// want:
lval(a && b && c)
isTrue(a)		ja 1
lval(b && c)
isTrue(b)		nee, 0
return b

var a = 1, b = 2, c = 3
a && b && c	// 3

// want:
lval(a && b && c)
isTrus(a)
lval(b && c)
isTrue(b)
lval(c)
return c
```

Hoe gebruik je dit in react?
Als je iets wilt renderen als bv this.props.error waar is dan kun: (binnen de render functie)
```js
const {error} = this.props;
let errorElement = null;
if (error) { errorElement = <div>{error}</div> }

return (
	<div>
		{errorElement}
		hoi doei
	</div>
)

// veel gemakkelijker is:

return (
	<div>
		{error && <div>{error}</div>}
		hoi doei
	</div>
)
```

