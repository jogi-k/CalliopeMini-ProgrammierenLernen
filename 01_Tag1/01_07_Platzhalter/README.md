# Platzhalter / Variablen 

## Variablen

Bis jetzt haben wir nur Dinge angezeigt, die wir genau so eingegeben haben. Nun wollen wir aber "Bewegung" und "Veränderung" in die Dinge bringen, die wir anzeigen wollen.  
Dazu müssen wir  ein wichtiges Element beim Programmieren kennen lernen:   
__Platzhalter__ : 
Anstatt den Programm-Code immer abzuändern um unterschiedliche Zahlen anzuzeigen brauchen wir sogenannte Platzhalter.
Platzhalter nennt man beim Programmieren auch Variablen, weil die Platzhalter unterschiedliche Werte, variable Werte aufnehmen kann.  
Das kann man sich z.B. beim einfachen Zählen mit zwei Händen vorstellen:  

## Erklärung (2)
- Jede Hand ist ein Platzhalter.  
- Jede Hand kann in diesem Fall Werte bis 5 "aufnehmen" (Wertebereich des Platzhalters von 0-5)
- Die beiden Hände können unterschiedliche Werte "aufnehmen"
- Nachdem beiden Händen Werte "zugewiesen" wurden, kann man mit den Platzhaltern rechnen.
- Linke_Hand + Rechte_Hand = Gesuchte Summe
- In der Programmierung wird das ganze dann umgedreht :
- Gesuchte Summe = Linke_Hand + Rechte_Hand  

## Die Hände

![Linke Hand](pics/ZaehlendeHaende_L.png){height=35%}

![Rechte Hand](pics/ZaehlendeHaende_R.png){height=35%}

## Zuweisung

Damit Platzhalter Werte aufnehme können, werden ihnen Werte zugewiesen.  
Das geschieht in der Programmierung mit dem Gleichheitszeichen.
Dieses Gleichheitszeichen ist nicht zu verwechseln mit dem Gleichheitszeichen in der Mathematik.  
Das Gleichheits-Zeichen beim Programmieren bedeutet, dass dem Platzhalter auf der linken Seite der Wert auf der rechten Seite des Gleichheits-Zeichens zu gewiesen wird.

## Beispiel 1: 

Linke Hand = 3  

![Linke Hand](pics/LinkeHand_3.png){height=60%}

heisst : Ab jetzt hat der Platzhalter Linke Hand den Wert 3.

## Beispiel 2:

Rechte Hand = 5 

![Rechte Hand](pics/RechteHand_5.png){height=60%}

heisst : Ab jetzt hat der Platzhalter Rechte Hand den Wert 5.

## Addition mit Platzhaltern (1)

Anstatt 3 + 5 heisst unsere Rechnung nun:

Linke Hand + Rechte Hand = Gesuchte Summe

Um daraus einen Programmiervorschrift zu machen, dreht man die beiden Teile um das Gleichheits-Zeichen herum, also:

## Addition mit Platzhaltern (2)

Gesuchte Summe = Linke Hand + Rechte Hand 

Diese eine Berechnungs-Anweisung / Formel ist unser "Programm" und ist für völlg verschiedene Werte von Rechte Hand und Linke Hand durchführbar.
Man kann die Zuweisungen irgendwann beim Programm-Start machen und erst viel später (wenn man als Mensch schon lange die Werte vergessen hat) die beide Platzhalter addieren.


## Eine Variable anlegen

![Menu-Anlegen](pics/PlatzhalterAnlegenMenu.png){height=70%}


## Auswahl aus Menu (2)

![Menu-Benennen](pics/PlatzhalterBenennenMenu.png){height=70%}

## Wirchtig : Variablen-Namen

Beim Benennenn der Variablen sollte man ein paar Dinge beachten:

* Variablen dürfen keine Leerzeichen enthalten
* Variablen dürfen Zahlen enthalten, aber nicht damit anfangen.


HIER GEHTS WEITER

## Auswahl aus Menu (3)

![Menu-Benennen](pics/PlatzhalterBenennenMenu_2.png){height=70%}




## Zuweisung und Benutzung (1)

Hier wird es nun interssant...

Wir haben oben in Texten die Namen der Variablen hingeschrieben:  
* linkeHand  
* rechte geschrieben , in einer normalen Programmiersprache schreibt man einfach den Namen der Variablen hin.

Siehe hierbei auch den Heavy Refresh in Tag3 zum Thema Variablen!

Hier in kurz:  

Unsere Calliope-Programmiersprache unterscheidet/muss unterscheiden, ob man einem Platzhalter/Variablen einen bestimmten Wert zuweist, oder ob man die Variable/den Platzhalter benutzen will.

Wenn man der Variable einen Wert __zuweisen__ will, dann muss man diesen ganzen Block verwenden:   

"Ändere Platzhalter auf XXX"

## Zuweisung und Benutzung (2)
 
![Menu-ZuweisungAuswahl](pics/PlatzhalterVerwendenZuweisungMenu.png){height=70%}






## Auswahl aus Menu (4)

![Menu-Zuweisung](pics/PlatzhalterZuweisungMenu.png){height=70%}


## Auswahl aus Menu (5)


## Verwendung des Platzhalters 

![Menu-Verwenden](pics/PlatzhalterBenutzenMenu.png){height=70%}

Verwendung der Variablen Ausgaben und Berechnungen anstatt fester Werte.

## Benutzung Platzhalter

![Menu-Verwenden-2](pics/PlatzhalterBenutzenMenu_2.png){height=70%}

Dazu zieht man die Variable/den Platzhalter genau an die Stelle an der vorher feste Werte benutzt wurden.



## PXT-Code

Finales simples Taschenrechner-Programm.  
Immernoch muss Programm-Code geändert werden um eine neue Berechnung durchzuführen, aber die Werte für die Berechnung müssen nur an einer zentralen Stelle geändert werden.
Dank Verwendung von Platzhaltern/Variablen passt sich die Ausgabe jeweils entsprechend an.



![Zwischenfinales Programm mit Platzhalter](pics/Platzhalter_Final.png)



## JavaScript-Code / HEX-Code
### JavaScript-Code

<details>
 <summary>Java-Script-Code</summary>

```js
let rechteHand = 0
let linkeHand = 0
basic.forever(() => {
    linkeHand = 3
    rechteHand = 4
    basic.showNumber(linkeHand)
    basic.showString(" + ")
    basic.showNumber(rechteHand)
    basic.showString(" = ")
    basic.showNumber(linkeHand + rechteHand)
    basic.clearScreen()
    basic.pause(1000)
})
```
</details>

### Download Hex-Code

[Hex-code](mini-PlatzhalterFinal.hex)

## Navigation


* [Zurück](../01_06_Zahlen_Anzeigen/index.html)  
* [Hoch zur Übersicht](../index.html)  
* [Weiter ](../01_08_TastenEingabe/index.html)


## Lizenz/Copyright-Info
Für alle Bilder auf dieser Seite gilt:

*  Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0

