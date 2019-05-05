# Teil 1 : "Muster" 

## Disclaimer

__ACHTUNG__: Das "Musterlösung" ist mit Absicht in Hockomma/Gänsefüsschen gesetzt.  

* Beim Programmieren gibt es __NICHT__ die eine, richtige Lösung.  
* Viele verschiedene Lösungen erledigen das selbe, darum ist die __Musterlösung__ eine von vielen möglichen!  
* Wir werden aber zum Teil sogar unterschiedliche Varianten anschauen, um zu zeigen, dass es verschiedene Möglichkeiten gibt.



## Knopfdruck / Eingabe

* Beim __Drücken__ der linken Taste => __Menu Eingabe__   

![](./pics/01_Menu_Eingabe.png){height=60%}


## Knopfdruck / Eingabe

* Dort gibt es die Klammer : __Wenn Knopf A gedrückt__
* So wie in unserer Standard-Klammer alle Befehle __immer__ ausgeführt werden, wird diese Klammer auch gleich benutzt 
* nur werden eben die Befehle beim Drücken der Taste __nur einmal__ durchgeführt

![](./pics/02_Eingabe.png){height=60%}


## Platzhalter/Variablen

*  __zwei Platzhalter__ => __Menu Variablen__  

![](./pics/03_Menu_Variablen.png){height=60%}




## Platzhalter/Variablen

* Variablen müssen angelegt werden => __Neue Variable anlegen__ ( sinnvolle Namen vergeben )

![](./pics/04_NeueVariable.png){height=60%}


## Platzhalter/Variablen

* Das Anlegen einer neuen Variable
* Zuerst "Wert1"

![](./pics/05_Wert1Variable.png){height=50%}

## Platzhalter/Variablen

* Wie man sieht ist nun die Variable Wert1 angelegt.
* Nun wird nochmal via __Neue Variable anlegen__ eine Variable angelegt

![](./pics/06_Wert2Anlegen.png){height=60%}



## Platzhalter/Variablen

* Wert2 wird angelegt

![](./pics/07_Wert2Variable.png){height=50%}

## Platzhalter/Variablen

* Wert2 ist angelegt worden
* Nun haben wir die zwei neuen Variablen : Wert1 und Wert2 im Variablen-Menu zur Verfügung

![](./pics/08_ZweiNeueVariablen.png){height=50%}



## Platzhalter/Variablen

* __Achtung Falle__ : 
* Wir wollen zuerst die beiden neuen Variablen mit Zufallswerten "beschreiben"
* Die Puzzleteile sind aber __Lesen__ der Variablen!

![](./pics/09_NichtInArbeitsBereichZiehen.png){height=50%}

## Platzhalter/Variablen

* Darum holen wir uns anstatt dessen das Puzzleteil zum __Schreiben/Setzen__ der Variablen aus dem Menu
* Da gibt es allerdings __kein Puzzleteil__, das uns direkt das Schreiben des __Wert1__ erlaubt

![](./pics/10_VariableSetzen_NichtBenutzen.png){height=60%}

## Platzhalter/Variablen

* Darum müssen wir dieses mit "Platzhalter" nehmen und dann den Platzhalter in unsere Variable __Wert1__ abändern
* Das geschieht durch Klick auf das __kleine Dreieck__ neben dem Namen __Platzhalter__

![](./pics/11_VariableSetzenUmbenennen.png){height=60%}

## Platzhalter/Variablen


* Dadurch öffnet sich eine sogenanntes Drop-Down-Menu, dieses enthält unsere beiden Variablen Wert1 und Wert2

![](./pics/12_DropDownMenu.png){height=60%}


## Platzhalter/Variablen

* Wenn diese beiden Änderungen für unsere zwei Variable Wert1 und Wert2 gemacht sind, dann sieht unsere erstes Programm-Fragment so aus. 

![](./pics/12_a_Umbenannt.png){height=60%}




## Zufallswerte


* Zufallswerte befinden sich im  => __Menu Mathematik__  

![](./pics/13_Menu_Mathematik.png){height=60%}




## Zufallswerte

* Dort gibt es einen Zufallsgenerator, der zwischen 0 und irgendwas erzeugt

![](./pics/14_Mathe_ZufallsZahlen.png){height=60%}


## Zufallswerte

* Diesen Befehl holen wir uns jetzt zweimal in die Arbeitsfläche

![](./pics/15_ErsteFragmente.png){height=60%}


## Zufallswerte

Der Zufallszahlen-Generator erzeugt zwischen 0 ... irgendwas, wir wollen 1 ... 10  

* Also erzeugen wir zwischen 0 ... 9 , und werden dann noch 1 drauf addieren. 
* So sieht es aus, wenn der Zufall eingeklickt ist und die grösste Zahl noch auf 9 korrigert ist



![](./pics/16_Zufall_eingeklickt_und_korrigiert.png){height=60%}


## Werte erhöhen

* Um den um eins zu niedrigen Zufallswert zu korrigieren, muss man eine __1 addieren__
* Dazu gibt es 2 Möglichkeiten

    * entweder anschliessend : __ändere Platzhalter um__
    * direkt beim belegen, durch Mathematik, es gibt ein __Additions__ Puzzle-Teilchen, das man verwenden kann.

* Wir werden hier beide Möglichkeiten benutzen, um sie zu zeigen.
* Im Normalfall entscheidet man sich für eine Möglichkeit und verwendet diese dann immer...

## Werte erhöhen

* __Variante 1:__ Variable anschliessend erhöhen via __Ändere Platzhalter um 1__

![](./pics/17_VariablenErhoehen.png){height=60%}


## Werte erhöhen

* Auch hier gibt es diesen Befehl __NICHT__ mit Wert1 oder Wert2 
* sondern wir verwenden den mit "Platzhalter" und ändern anschliessend wieder via "Drop-Down-Menu" (Kleines Dreieck) 

![](./pics/18_VariableRichtigNehmen.png){height=60%}


## Werte erhöhen

* __Variante 2:__ Variable direkt beim Zuweisen durch eine Addition mit 1 
* Dazu holen wir eine Addition aus dem Menu Mathematik  

![](./pics/19_Methode2_Increment.png){height=60%}

## Werte erhöhen

* Wir ziehen den Zufall nach oben als erste Zahl in die Addition rein
* Den anderen Teil der Addition belegen wir mit 1


![](./pics/20_EinbauVariante2.png){height=60%}

## Werte erhöhen

* Anschliessend können wir die gesamte Addition wieder in die Variablen-Zuweisung reinziehen.

![](./pics/21_Zufall_in_Addition.png){height=60%}

## Werte erhöhen

* Dann sieht das Gesamtergebnis so aus:


![](./pics/22_Wert1_ZufallRichtig.png){height=60%}


* Wert1 = Zufallszahl zwischen 0...9 und gleich 1 dazu addiert
* Wert2 = Zufallszahl zwischen 0...9
* Wert2 wird erhöht um 1


## Zeichen und Zahlen anzeigen

* Zahlen und Texte anzeigen finden sich im Menu __Grundlagen__  

![](./pics/23_MenuGrundlagen.png){height=60%}


## Zeichen und Zahlen anzeigen

* Dort verwenden wir:

![](./pics/24_AusgabeNummerUndZeichenkette.png){height=60%}


## Zeichen und Zahlen anzeigen


* Zahlen __angezeigen__ macht man mit __Zeige Nummer__
* Texte, die angezeigt werden sollen ( das "="-Zeichen, das "+"-Zeichen) werden mit __zeige Zeichenfolge__ als Laufschrift angezeigt


* Also holen wir uns zweimal "__zeige Nummer__" und zweimal "__zeige Zeichenfolge__" in den Arbeitsbereich.

![](./pics/25_AnzeigenAusgewaehlt.png){height=60%}


## Zeichen und Zahlen anzeigen

* Nun wollen wir - im Vergleich zu vorher - die Variablen lesen um sie anzuzeigen.
* Nun können wir also aus dem "Variablen" - Menu die beiden Variablen "__Wert1__" und "__Wert2__" auf den Arbeitsplatz ziehen.

![](./pics/26_WerteAusMenuVariablen.png){height=60%}


## Zeichen und Zahlen anzeigen

* Wenn wir sie auf dem Arbeitsplatz liegen haben, können wir sie jeweils in die Befehle "__zeige Nummer__" reinziehen, dort ersetzen sie jeweils die vorbelegte "0"

![](./pics/27_Werte_Auf_Arbeitsflaeche.png){height=60%}


## Zeichen und Zahlen anzeigen


* Wenn wir nun noch die beiden Texte "*" und "=" in die Zeichenfolge reinschreiben, dann sind wir eigentlich auch schon fertig.

![](./pics/28_Werte_Eingeklickt_und_Zeichenketten.png){height=60%}



## Zeichen und Zahlen anzeigen

* Wir ziehen alles so in unsere Arbeits-Klammer rein und schauen uns im Simulator an, was passiert. 

![](./pics/29_FastFertig.png){height=60%}


## Zeichen und Zahlen anzeigen

* Wenn man das im Simulator laufen lässt und mittels Klick auf die Taste startet, sieht es ganz gut aus, nur das Multiplikations-Zeichen "*" sieht man nicht.
* die unterschiedlichen LED-Ausgabe-Funktionen sind unterschiedlich schnell, darum muss man nach dem __zeige Zeichenfolge__ noch eine Pause einbauen
* So sieht dann das fertige Programm Teil 1 aus:

## Muster-Lösung Teil 1

![](./pics/30_MitDelay_Fertig.png){height=70%}


## Muster-Lösung Teil 1

* Das können wir nun im Simulator ausprobieren und auch in den Calliope laden und uns daran erfreuen.
* Leider ist es nur der erste Teil, ob wir richtig gerechnet haben, können wir damit noch nicht überprüfen
* aber wir können uns schonmal Zufalls-Zahlen als Rechenaufgabe geben lassen.



## Lizenz/Copyright-Info
Für alle Texte und Bilder auf diesen Seiten/Folien gilt:

* Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0
