# Funk - Übertragung 

## Menu Funk

Im Menu Funk findet sich: 

![](pics/Selection_001.png){height=70%}


## Zahlen Funken

Wir senden und empfangen zuerst mal Zahlen

![](pics/Selection_002.png){height=70%}


## Simpler Sender/Empfänger

![](pics/Selection_003.png){height=70%}

## Simulator kann auch Funk

* Sobald man den Knopf A drückt
* merkt das der Simulator und blendet einen zweiten Calliope ein

![](pics/Selection_004.png){height=70%}

## Zwei simulierte Calliopes 

* Nun sind zwei simulierte Calliopes zu sehen 
* Und der obere ist am Funken 

![](pics/Selection_005.png){height=70%}


## Nochmal Knopf drücken

* Nun muss man nochmal Knopf A drücken
* damit der andere Calliope das empfangen kann

![](pics/Selection_006.png){height=70%}



## Anderer Calliope sendet auch

* Drücken auf zweitem Calliope
* bringt den auch zum Senden
* und der erste/obere empfängt 

![](pics/Selection_007.png){height=70%}



## "Sinnvolle" Inhalte Senden

![](pics/Selection_008.png){height=70%}

## Mit Nachbarn funken

* Einigt euch auf 3 Zahlen, die Ihr senden wollt ( z.B.  0-2 )
* (am Besten verwendet Ihr das Programm aus diesem Beispiel)
* Jeder kann den Empfangs-Teil mit verschiedenen Sysmbolen machen
* Dann versucht Euch gegenseitig was zu senden 
* Klappt das ?
* ...
* ...
* ...
* ????
* Im Simulator gehts doch, oder ?



## Mit Nachbarn funken II

- Nun probiert mal das HEX-File von einem der beiden Computer in beide Calliopes zu programmieren.
- Jetzt gehts?
- Im Simulator gehts auch ?
- Habt Ihr nen Fehler gemacht ?
- Wer von Euch ?
- 
- Antwort: Vermutlich hat keiner von Euch einen Fehler gemacht...



## Mit Nachbarn funken III

* Wer von Euch hat Funkgeräte?
* Können die immer miteinander kommunizieren 
* Können die direkt mit den Funkgeräten von Euren Freunden funken?
* Oder muss man da was einstellen, damit das funktioniert?
* __JA__ : Der Sende und Empfangs-Kanal !
* Beim Calliope heisst das __"Gruppe"__
* und befindet sich im __Funk -> Mehr__ - Menu  



## Setze Gruppe 

![](pics/Selection_009.png){height=70%}



## Erklärung

* Wenn die Funk-Gruppe nicht von Euch im Programm-Lauf gesetzt wird
* dann setzt der Computer das im Hintergrund 
* automatisch auf einen Wert zwischen 0 - 255
* d.h. ein HEX-File enthält einen "ausgewürfelten" Kanal
* ein anderes HEX-File enthält einen anderen "ausgewürfelten" Kanal
* darum: Enwteder gleiches HEX-File verwenden oder Kanal setzen
* => Setze Gruppe XXX beim Start



## Setze Gruppe

Nun bauen wir also das entsprechende __Setze Gruppe__ - Befehl __beim Start__ 

![](pics/Selection_010.png){height=70%}

## Zeichenfolgen austauschen

Ebenso kann man - anstatt einzelne Zahlen - ganze Texte von einem Calliope zum anderen schicken

Die beide dafür verantwortlichen Befehle sind 

* __sende Zeichenfolge__
* __wenn Datenpaket empfangen receivedString__



![](pics/Selection_011.png){height=70%}



## Texte senden und empfangen

So kann man sich Text-Nachrichten hin und her senden

![](pics/Selection_012.png){height=70%}

## Lizenz / Copyright

Für alle Bilder auf diesen Folien/Seiten gilt:

* Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0

 
