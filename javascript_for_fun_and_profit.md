# Birds eye view

## Historia

## Ko for fun and profit

Vad kan man göra med [knockout](knockoutjs.com)?

Följande blir enklare:
- Uppdateringar i gui
- Uppdateringar i på dina tabeller
- Trigga vid click meck

## Behöver jag fortfarande JQuery?

- Ja! JQuery är fortfarande awesome!
- Simpel html + lite jquery är snabbare än att göra single page app.

## Nästa version av javascript som stöds av de flesta (ES5)

Bättre programmering för kodninjor.

## Det funkar inte!

- [Jshint](http://www.jshint.com/) (finns i editor o online)
- [Fiddler](http://fiddler2.com/)
- [JsFiddle](http://jsfiddle.net/)
- Webläsaren!

## Choose your own adventure (object orientation)

Det fungerar inte som de andra språk om man har kodat något annat

### Enklast möjligt

    var factoryFunction = function(values){
        var self = {};
        self.pubnamn = "hej hopp ";
        self.methodUsingPublicProperty = function(name){
            return self.pubnamn + name;
        };
        var privateVariable = 'We are private ';
        self.methodUsingPrivateVariable = function(name){
            return privateVariable + name;
        };
        return self;
    }

Fördelar:
- konceptuellt enkelt
- behöver inte göra new

Nackdelar:
- instanceof
- konstruktor syns inte på objektet (när man debuggar)

### Kodninja

- Prototype
- Mix av olika objekt

Fördel att köra enklast möjliga så att man inte kommer ut på djupt vatten.

## Nästa version av javascript som stöds av de flesta (ES5)

Bättre programmering för kodninjor.

## Single page app

Modernt med applikationer skrivna helt i javascript som liknar en lime pro klient mer än wikipedia

- Mängder med olika ramverk (t.ex. angular)
- Stor del av infrastrukturen
- Rätt mycket att sätta sig in i
- Inte en helhetslösning
- Drinking the cool aid: Det är väldigt inne men inte lösning på alla problem


## Ko for fun and profit

Vad kan man göra med [knockout](knockoutjs.com)?

Följande blir enklare:
- Uppdateringar i gui
- Uppdateringar i på dina tabeller
- Trigga vid click meck

## Behöver jag fortfarande JQuery?

- Ja! JQuery är fortfarande awesome!
- Simpel html + lite jquery är snabbare än att göra single page app.

## Lime bootstrap++

- Webservice förenklar för konsulterna
- Stöd i lime Pro servern för att hosta app:ar?

## Varför bör vi inte göra vbscript i web?

Det är definitivt möjligt.

Varför tror jag att det kommer inte att hända?

- Exempel är oftast javascript.
- Få bekanta Api:er, programmeringen kommer ändå vara obekant
- Ser bra ut på cv med js

Sure, we can do it. But you will be pissed off because of X (and there wont always be a pretty solution).

## Det funkar inte!

- [Jshint](http://www.jshint.com/) (finns i editor o online)
- [Fiddler](http://fiddler2.com/)
- [JsFiddle](http://jsfiddle.net/)
- Webläsaren!

## Övningar

### WTF

[wat](https://www.destroyallsoftware.com/talks/wat) Spola fram till 1.24 i videon -> roliga quirks i javascript

Öppna debugkonsollen i chrome eller internet explorer och testa att köra

    2 == "2"   // => true
    2 === "2"  // => false
    2 !== 3    // => true
    0 == []    // => true
    0 >= []    // => true

En bra grundregel är att alltid använda === och !==. Js == och != är riktigt skumma.

### Allt async! (jquery + ajax)

Pröva async genom att testa att gå mot en web service [skanetrafiken](https://github.com/wallymathieu/skanetrafiken)

    $.ajax({
        url: "test.html",
        context: document.body
    }).done(function() {
        $( this ).addClass( "done" );
    });

Uppgiften här är att se vad som är möjligt. Att hämta ut data. Att manipulera data och visa det.

### skapa upp objekt

Saker att testa. När funkar instanceof. Vad händer med de olika sätten om man glömmer "new".

[new](http://jsfiddle.net/ozzymcduff/5dU2T/)

    // Declaring our Animal object
    var Animal = function () {
        var self = this; //perlism

        self.name = 'unknown';

        self.getName = function () {
            return self.name;
        }

        return self;
    };


Vad händer om du kör

    var dog = Dog.call(null);

[prototype](http://jsfiddle.net/ozzymcduff/Xd553/)

    var Animal = function () {};
    Animal.prototype.name = 'unknown';
    Animal.prototype.getName = function () {
        return this.name;
    };

Vad händer om man använder detta tillsammans med jquery? Tex ajax anrop:

    $.ajax({
        url: "test.html",
        context: document.body
    }).done(dog.bark);

[factory metod](http://jsfiddle.net/ozzymcduff/XqSBg/)

    var createAnimal = function () {
        var self = {};
        self.name = 'unknown';

        self.getName = function () {
            return self.name;
        }

        return self;
    };

### Lita aldrig på "this"

En grundregel att börja med är att undvika "this" så långt det går i egna metoder och objekt.

Man kan nämligen sätta this när man anropar en metod.

Testa tex att köra olika varianterna med:

    dog.bark.call(null);

[Exempel på this](http://jsbin.com/iJOQeRoJ/16/edit?js,console)

### iterera över en lista

for - fungerar inte som man förväntar sig

bättre att använda t.ex. jquery:

    $.each([ 52, 97 ], function( index, value ) {
      console.log( index + ": " + value );
    });

### Scope

Exempel på scope:
[inner animal](http://jsfiddle.net/ozzymcduff/A8fM9/)

### Undefined, null whöt?

När är saker undefined?

Ett exempel är:

    var x = {};
    var y = x.somevalue;

    var x = function(){ console.log('Doing stuff'); };
    var y = x();

När är de null?

    var x = { y: null };

    var x = function(){ console.log('Doing stuff'); return null; };
    var y = x();

Ofta när variabel har satts till ett värde, men värdet är null. Eftersom undefined är ett värde i javascript kan man:

    var x = { y: undefined };

    var x = function(){ console.log('Doing stuff'); return undefined; };
    var y = x();



