# Birds eye view

## Historia

## Ko for fun and profit

Vad kan man göra med knockout [knockoutjs.com]?

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

- Jshint (finns i editor o online) [http://www.jshint.com/]
- Fiddler [http://fiddler2.com/]
- JsFiddle [http://jsfiddle.net/]
- Webbläsare

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

### Kodninja

- Prototype
- Mix av olika objekt

Fördel att köra enklast möjliga så att man inte kommer ut på djupt vatten.

## Single page app

Modernt med applikationer skrivna helt i javascript som liknar en lime pro klient mer än wikipedia

- Mängder med olika ramverk (t.ex. angular)
- Stor del av infrastrukturen
- Rätt mycket att sätta sig in i
- Inte en helhetslösning
- Drinking the cool aid: Det är väldigt inne men inte lösning på alla problem

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

## Js

### 

###

## Övningar

### WTF

    2 == "2"   # => true
    2 === "2"  # => false
    2 !== 3    # => true
    0 == []    # => true
    0 >= []    # => true

### Allt async! (jquery + ajax)

    $.ajax({
        url: "test.html",
        context: document.body
    }).done(function() {
        $( this ).addClass( "done" );
    });


### skapa upp objekt

### iterera över en lista

    for - fucked up

### 


