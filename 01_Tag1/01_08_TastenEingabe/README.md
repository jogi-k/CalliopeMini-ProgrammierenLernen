# Eingabe mit Tasten 

## Starten unseres Programmes 

Bislang haben wir nur Berechnungen durchgeführt und Werte und Texte ausgegeben.  
Wenn man dem Taschenrechner auch Werte eingeben/verändern können will, dann muss man auch Eingaben machen können.

Dazu schauen wir uns nochmal kurz an, wie bislang unser Programm gestartet wurde:

## Dauerhaft Laufen

![Dauerhaft](pics/01_Dauerhaft.png){height=60%}

D.h unser Programmcode wurde ständig, dauerhaft wiederholt.

Es gibt auch noch andere Möglichkeiten, wie unser Programm-Code aufgerufen wird:

## Beim Starten Laufen
 
![BeimStart](pics/02_BeimStart.png){height=60%}


D.h. unser Programmcode wird nur einmal beim Starten ausgeführt.
(Anmerkung: Bei unserem bisherigen Programm ohne Spezialitäten ist das Ergebnis das Gleiche, das kann gerne mal ausprobiert werden...)


## Starten Programm-Teile via Tastendruck

Nun gibt es auch die Möglichkeit, Programm-Teile dann ausführen zu lassen, wenn ein Taste gedrückt wird.
Dazu holen wir uns die entsprechende "Klammer" um unser Programm herum aus dem Bereich "Eingabe"

![InputButton](pics/03_EingabeButton.png){height=60%}


## Bearbeiten 

Das wird nun auf einen geleerten Bereich gezogen.
Den Programm-Bereich leert man mit einem Rechts-Klick in einen freien Bereich, dann **Lösche xx Blöcke** anwählen.
(Keine Sorge, wenn das HEX-File für den Calliope heruntergeladen wurde, kann man unser Programm daraus wieder herstellen)
 
![Programm Area löschen](pics/04_ProgrammAreaLoeschen.png){height=60%}


## Einfache Tastendruck-Demo

Nun noch eine Reaktion auf den Tastendruck, z.B. ein LED-Gesicht:

![Reaktion auf Tastendruck](pics/05_TastenReaktion.png){height=60%}


Damit haben wir ein erstes Programm, das auf Eingabe reagiert.


## Reaktion auf zweite Taste

Möchte man nun noch eine zweite Reaktion auf eine andere Taste programmieren, 
dann holt man sich wieder aus dem Bereich **Eingabe** die "Klammer" :  **Wenn Knopf A gedrückt**<br>
Sobald diese Klammer auf der Programm-Oberfläche liegt, verliert sie Ihre Farbe, wird "ausgegraut".  

![Augegraute Eingabe](pics/06_TastenReaktion_Doppelt.png){height=40%}

Warum?  

## Ausgegraute KLammern etc

Wir haben nun ein zweite "Klammer" angelegt, die ausgeführt werden soll, wenn Knopf A gedrückt wird.
Das ist nicht möglich. Es kann immer nur eine Klammer als Reaktion auf einen Tastendruck im Programm-Bereich geben.

Sobald wir nun den Knopf auf Knopf B wechseln:

![Auswahl anderer Knopf](pics/07_TastenReaktion_B_01.png){height=40%}


bekommt die Klammer Ihre ursprüngliche Farbe wieder und kann sinnvoll verwendet werden.

## Verschiedene Start-Möglichkeiten

![Auswahl anderer Knopf](pics/08_TastenReaktion_B_02.png){height=60%}

## Anderes Gesicht anzeigen

z.B. durch Anzeige eines anderen Gesichts

![Auswahl anderer Knopf](pics/09_TastenReaktionBeide.png){height=60%}



## Unterschied Start und Dauerhaft

Mit diesem Grundgerüst kann man nun auch sehr einfach ausprobieren, was der Unterschied im Programm-Verhalten ist, wenn man "dauerhaft" oder "Beim Start" anwählt.
Dazu muss man aber kleine Pausen mit einbauen, sonst wird die Ausgabe schwer verständlich.


![Unterschied Loop und Start](pics/10_TastenReaktionBeideMitStart_und_Loop.png){height=60%}



## JavaScript-Code

Finales Eingabe-Kontroll-Programm.  
Zeigt anhand von ICONs/Gesichtern das Verhalten des Programms bei Eingaben, bei Start und Dauerhaft.

<details>
 <summary>Java-Script-Code</summary>

```js
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
})
basic.showLeds(`
    . # # # .
    . # . # .
    . . . # .
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.forever(() => {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
})
```
</details>

## Download Hex-Code

Download HEX-code:

[Hex-code](mini-EingabeFinal.hex)


## Navigation


* [Zurück](../01_07_Platzhalter/README.md)
* [Hoch zur Übersicht](../README.md)  
* [Weiter ](../01_09_Taschenrechner/README.md)




## Lizenz/Copyright-Info
Für alle Bilder auf dieser Seite gilt:

*  Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0
