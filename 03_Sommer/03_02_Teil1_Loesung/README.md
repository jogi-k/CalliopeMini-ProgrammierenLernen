# Teil 1 : "Musterlösung" 

## Dsiclaimer

__ACHTUNG__: Das "Musterlösung" ist mit Absicht in Hockomma/Gänsefüsschen gesetzt.  

* Beim Programmieren gibt es __NICHT__ die eine, richtige Lösung.  
* Viele verschiedene Lösungen erledigen das selbe, darum ist die __Musterlösung__ eine von vielen möglichen!  
* Wir werden aber zum Teil sogar unterschiedliche Varianten anschauen, um zu zeigen, dass es verschiedene Möglichkeiten gibt.



## Knopfdruck / Eingabe
 
* Beim __Drücken__ der linken Taste => __Menu Eingabe__   

![01_Menu_Eingabe.png](./pics/01_Menu_Eingabe.png){height=60%}

* Dort gibt es eine "Schleife" : __Wenn Knopf A gedrückt__
* So wie in unserer Standard-Schleife alle Befehle __immer__ ausgeführt werden, wird diese Schleife auch gleich benutzt 
* nur werden eben die Befehle beim Drücken der Taste __nur einmal__ durchgeführt

![02_Eingabe.png](./pics/02_Eingabe.png)

## Platzhalter/Variablen

*  __zwei Platzhalter__ => __Menu Variablen__  

![03_Menu_Variablen.png](./pics/03_Menu_Variablen.png){height=60%}


* Variablen müssen angelegt werden => __Neue Variable anlegen__ ( sinnvolle Namen vergeben )

![04_NeueVariable.png](./pics/04_NeueVariable.png){height=60%}


* Das Anlegen einer neuen Variable
* Zuerst "Wert1"

![05_Wert1Variable.png](./pics/05_Wert1Variable.png){height=60%}


* Wie man sieht ist nun die Variable Wert1 angelegt.
* Nun wird nochmal via __Neue Variable anlegen__ eine Variable angelegt


![06_Wert2Anlegen.png](./pics/06_Wert2Anlegen.png){height=60%}


* Wert2 wird angelegt

![07_Wert2Variable.png](./pics/07_Wert2Variable.png){height=60%}


* Wert2 ist angelegt worden
* Nun haben wir die zwei neuen Variablen : Wert1 und Wert2 im Varibalen-Menu zur Verfügung

![08_ZweiNeueVariablen.png](./pics/08_ZweiNeueVariablen.png){height=60%}


* __Achtung Falle__ : 
* Wir wollen zuerst die beiden neuen Variablen mit Zufallswerten "beschreiben"
* Die Puzzleteile sind aber __Lesen__ der Variablen!

![09_NichtInArbeitsBereichZiehen.png](./pics/09_NichtInArbeitsBereichZiehen.png){height=60%}


* Darum holen wir uns anstatt dessen das Puzzleteil zum __Schreiben/Setzen__ der Variablen aus dem Menu
* Da gibt es allerdings __kein Puzzleteil__, das uns direkt das Schreiben des __Wert1__ erlaubt

![10_VariableSetzen_NichtBenutzen.png](./pics/10_VariableSetzen_NichtBenutzen.png){height=60%}


* Darum müssen wir dieses mit "Platzhalter" nehmen und dann den Platzhalter in unsere Variable __Wert1__ abändern
* Das geschieht durch Klick auf das __kleine Dreieck__ neben dem Namen __Platzhalter__

![11_VariableSetzenUmbenennen.png](./pics/11_VariableSetzenUmbenennen.png){height=60%}


* Dadurch öffnet sich eine sogenanntes Drop-Down-Menu, dieses enthält unsere beiden Variablen Wert1 und Wert2

![12_DropDownMenu.png](./pics/12_DropDownMenu.png){height=60%}


* Wenn diese beiden Änderungen für unsere zwei Variable Wert1 und Wert2 gemacht sind, dann sieht unsere erstes Programm-Fragment so aus. 

![12_a_Umbenannt](./pics/12_a_Umbenannt.png){height=60%}


## Zufallswerte


*  Zufallswerte befinden sich im  => __Menu Mathematik__  

![13_Menu_Mathematik.png](./pics/13_Menu_Mathematik.png){height=60%}



* Dort gibt es einen Zufallsgenerator, der zwischen 0 und irgendwas erzeugt

![14_Mathe_ZufallsZahlen.png](./pics/14_Mathe_ZufallsZahlen.png){height=60%}



* Diesen Befehl holen wir uns jetzt zweimal in die Arbeitsfläche

![15_ErsteFragmente.png](./pics/15_ErsteFragmente.png){height=60%}


Der Zufallszahlen-Generator erzeugt zwischen 0 ... irgendwas, wir wollen 1 ... 10  
* Also erzeugen wir zwischen 0 ... 9 , und werden dann noch 1 drauf addieren. 
* So sieht es aus, wenn der Zufall eingeklickt ist und die grösste Zahl noch auf 9 korrigert ist



![16_Zufall_eingeklickt_und_korrigiert.png](./pics/16_Zufall_eingeklickt_und_korrigiert.png){height=60%}


## Werte erhöhen

* Um den um eins zu niedrigen Zufallswert zu korrigieren, muss man eine __1 addieren__
* Dazu gibt es 2 Möglichkeiten
    * entweder anschliessend : __ändere Platzhalter um__
    * direkt beim belegen, durch Mathematik, es gibt ein __Additions__ Puzzle-Teilchen, das man verwenden kann.
* WIr werden hier beide Möglichkeiten benutzen, um sie zu zeigen.
* Im Normalfall entscheidet man sich für eine Möglichkeit und verwendet diese dann immer...

* Variante 1: Variable anschliessend erhöhen via __Ändere Platzhalter um 1__
![17_VariablenErhoehen.png](./pics/17_VariablenErhoehen.png){height=60%}


* Auch hier gibt es diesen Befehl __NICHT__ mit Wert1 oder Wert2 sondern wir verwenden den mit "Platzhalter" und ändern anschliessend wieder via "Drop-Down-Menu" (Kleines Dreieck) 

![18_VariableRichtigNehmen.png](./pics/18_VariableRichtigNehmen.png){height=60%}


* Variante 2: Variable direkt beim Zuweisen durch eine Addition mit 1 
* Dazu holen wir eine Addition aus dem Menu Mathematik  

![19_Methode2_Increment.png](./pics/19_Methode2_Increment.png){height=60%}


* Wir ziehen den Zufall nach oben als erste Zahl in die Addition rein
* Den anderen Teil der Addition belegen wir mit 1


![20_EinbauVariante2.png](./pics/20_EinbauVariante2.png){height=60%}


* Anschliessend können wir die gesamte Addition wieder in die Variablen-Zuweisung reinziehen.
![21_Zufall_in_Addition.png](./pics/21_Zufall_in_Addition.png){height=60%}


* Dann sieht das Gesamtergebnis so aus:


![22_Wert1_ZufallRichtig.png](./pics/22_Wert1_ZufallRichtig.png){height=60%}


* Wert1 = Zufallszahl zwischen 0...9 und gleich 1 dazu addiert
* Wert2 = Zufallszahl zwischen 0...9
* Wert2 wird erhöht um 1


## Zeichen und Zahlen anzeigen

* Zahlen und Texte anzeigen finden sich im Menu __Grundlagen__  
![23_MenuGrundlagen.png](./pics/23_MenuGrundlagen.png){height=60%}


* Dort verwenden wir:

![24_AusgabeNummerUndZeichenkette.png](./pics/24_AusgabeNummerUndZeichenkette.png){height=60%}


 
* Zahlen __angezeigen__ macht man mit __Zeige Nummer__
* Texte, die angezeigt werden sollen ( das "="-Zeichen, das "+"-Zeichen) werden mit __zeige Zeichenfolge__ als Laufschrift angezeigt


* Also holen wir uns zweimal "zeige Nummer" und zweimal "zeige Zeichenfolge" in den Arbeitsbereich.

![25_AnzeigenAusgewaehlt.png](./pics/25_AnzeigenAusgewaehlt.png){height=60%}


* Nun wollen wir - im Vergleich zu vorher - die Variablen lesen um sie anzuzeigen.
* Nun können wir also aus dem "Variablen" - Menu die beiden Variablen "Wert1" und "Wert2" auf den Arbeitsplatz ziehen.

![26_WerteAusMenuVariablen.png](./pics/26_WerteAusMenuVariablen.png){height=60%}


* Wenn wir sie auf dem Arbeitsplatz liegen haben, können wir sie jeweils in die Befehle "zeige Nummer" reinziehen, dort ersetzen sie jeweils die vorbelegte "0"

![27_Werte_Auf_Arbeitsflaeche.png](./pics/27_Werte_Auf_Arbeitsflaeche.png){height=60%}



* Wenn wir nun noch die beiden Texte "*" und "=" in die Zeichenketten reinschreiben, dann sind wir eigentlich auch schon fertig.

![28_Werte_Eingeklickt_und_Zeichenketten.png](./pics/28_Werte_Eingeklickt_und_Zeichenketten.png)


* Wir ziehen alles so in unsere Arbeits-Endlosschleife rein und schauen uns im Simulator an, was passiert. 

![29_FastFertig.png](./pics/29_FastFertig.png)

* Wenn man das im Simulator laufen lässt und mittels Klick auf die Taste startet, sieht es ganz gut aus, nur das Multiplikations-Zeichen "*" sieht man nicht.
* die unterschiedlichen LED-Ausgabe-Funktionen sind unterschiedlich schnell, darum muss man nach dem zeige Zeichenkette noch eine Pause einbauen
* So sieht dann das fertige Programm Teil 1 aus:

![30_MitDelay_Fertig.png](./pics/30_MitDelay_Fertig.png){height=60%}


* Das können wir nun im Simulator ausprobieren und auch in den Calliope laden und uns daran erfreuen.
* Leider ist es nur de erste Teil, ob wir richtig gerechnet haben, können wir damit noch nicht überprüfen, aber wir können uns schonmal Zufalls-Zahlen als Rechenaufgabe geben lassen.




## Navigation

* [zurück zu Teil2 Hinweise](../03_01_Teil1_Hinweise/README.md)  
* [Hoch zur Übersicht](../README.md)  
* [weiter zu Teil2 Hinweise](../03_03_Teil2_Hinweise/README.md)  



## Lizenz/Copyright-Info
Für alle Bilder auf dieser Seite gilt:

*  Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0
