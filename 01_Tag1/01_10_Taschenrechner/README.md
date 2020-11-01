# Der Taschenrechner 

## Bisher gelernt (1)

Bis jetzt haben wir gelernt:

* Zeichen auf den LEDs anzeigen 
* Zahlen auf den LEDs anzeigen 
* Erster Umgang mit Platzhaltern
* Einfache Berechnung (+)
* Ausführen von Programm-Teilen einmalig beim Start
* Ausführen von Programm-Teilen immer
* Reaktion auf Tasten-Drücke

## Bisher gelernt (2)

Damit sollten wir eigentlich nun in der Lage sein, einen sehr einfachen Taschenrechner zu bauen.
Er soll: 

* Beim Start zwei Platzhalter mit 0 belegen
* Beim Drücken der linken Taste den einen Platzhalter um eins erhöhen
* Beim Drücken der rechten Taste den anderen Platzhalter um eins erhöhen
* Dauerhaft die Addition der zwei Platzhalter anzeigen 


## Beim Start 


![01_Beim_Start.png](./pics/01_Beim_Start.png){height=50%}


## Variable setzen AUF  


![02_Variablen_holen.png](./pics/02_Variablen_holen.png){height=50%}


## Zweimal und dann ändern 

![03_Variable_umbenennen.png](./pics/03_Variable_umbenennen.png){height=50%}


## Andere Variablen auswählen 

![04_Variable_umbenennen2.png](./pics/04_Variable_umbenennen2.png){height=50%}


## Dauerhaft-Schleife (aus Grundlagen) 

![05_Dauerhaft.png](./pics/05_Dauerhaft.png){height=50%}


## Zeige Zahl (aus Grundlagen) 

![06_Zahlen_Anzeigen.png](./pics/06_Zahlen_Anzeigen.png){height=50%}

## Zeige Zahl in Dauerhaft-Schleife 

![06_Zahlen_Anzeigen.png](pics/06a_In_DauerSchleife.png){height=50%}

## 

## Variablen zum Anzeigen holen 

![07_Variablen_holen.png](./pics/07_Variablen_holen.png){height=50%}


## Variable über die "0" fallen lassen 

![08_Variable_einklicken.png](./pics/08_Variable_einklicken.png){height=50%}


## Zeige Text (aus Grundlagen) 

![09_Zeige_Text.png](./pics/09_Zeige_Text.png){height=50%}

## Die Dauerhaft-Schleife 

* Wir holen dreimal "zeige Zahl" und zweimal "zeige Text"
* Und ordnen es entsprechend an

![10_Dauerhaft_Fast_Fertig.png](./pics/10_Dauerhaft_Fast_Fertig.png){height=50%}


## Die Addition (aus dem Menu Mathematik) 

![11_Addition_holen.png](./pics/11_Addition_holen.png){height=50%}


## Als Ergbnis-Anzeige einer Berechnung 

![12_Addition_drin.png](./pics/12_Addition_drin.png){height=50%}


## Beide Variablen holen

![13_Variablen_holen.png](./pics/13_Variablen_holen.png){height=50%}


## Und über den "0" der Addition einrasten 

![14_Addition_Fertig.png](./pics/14_Addition_Fertig.png){height=50%}


## Bildschirm löschen (Grundlagen-Mehr) 

![15_Bildschirm_loeschen.png](./pics/15_Bildschirm_loeschen.png){height=50%}


## Pausieren (Menu Grundlagen) 

![16_Pausieren.png](./pics/16_Pausieren.png){height=50%}


## "Verschönern" 

![17_Hauptschleife_fertig.png](./pics/17_Hauptschleife_fertig.png){height=50%}


## Knopf-Drücken (aus Menu Eingabe)

![18_Wenn_Knopf.png](./pics/18_Wenn_Knopf.png){height=50%}


## Dreimal rausgeholt und... 

![19_Dreimal_Knopf.png](./pics/19_Dreimal_Knopf.png){height=50%}


## ... auf A, B und A+B geändert 

![20_Dreimal_Knopf_richtig.png](./pics/20_Dreimal_Knopf_richtig.png){height=50%}

## Variablen Ändern (aus Menu Variablen)

* **setze** Variable **auf**  xx
* **ändere** Variable **um** xx
* Achtung, werden leicht verwechselt!
* Wir brauchen Variablen-Änderung für A, B

![21_Aendere_um.png](./pics/21_Aendere_um.png){height=50%}

## Variablen auf 0 setzen

* wenn A+B gedrückt wird, wollen wir die Variablen auf 0 schreiben
* hier also "**setze** Variable **auf** xxx" 

![22_Auf_Null_setzen.png](./pics/22_Auf_Null_setzen.png){height=50%}


## Beim Start 

![23_Rechner_Fertig.png](./pics/23_Rechner_Fertig.png){height=50%}


## Testen im Simulator: A+B drücken 

Da man im Simulator nur einen Maus-Zeiger hat und damit nicht gleichzeitig die beiden Tasten A+B klicken kann, blendet der Simulator bei Notwendigkeit eine zusätzliche "A+B"-Taste ein. 
Diese gibt es nur im Simulator, auf dem echten Calliope drückt man einfach beide Tasten gleichzeitig.

![24_Der_AB_Knopf.png](./pics/24_Der_AB_Knopf.png){height=50%}


## Bitte einprägen! Platzhalter / Variablen

Bei den Variablen befinden sich zwei sehr ähnlich klingende Befehle:
![25_Variablen.png](./pics/25_Variablen.png){height=50%}

* Der eine ist für die Belegung zum Beispiel beim Starten zuständig, er belegt die Variable mit einem konkreten Wert, er initialisiert die Variable __AUF__ den angegebenen Wert.
* Der andere Befehl nimmt den Wert in der Variable und ändert ihn __UM__ den angegebenen Wert, er führt also eine Berechnung mit dem Wert durch. Diesen Befehl brauchen wir beim Drücken der Tasten.



## JavaScript-Code

Finales Taschenrechner-Programm.   

<details>
 <summary>Java-Script-Code</summary>

```js
input.onButtonPressed(Button.A, function () {
    Linke_Hand += 1
})
input.onButtonPressed(Button.AB, function () {
    Linke_Hand = 0
    rechte_hand = 0
})
input.onButtonPressed(Button.B, function () {
    rechte_hand += 1
})
let Linke_Hand = 0
let rechte_hand = 0
rechte_hand = 0
Linke_Hand = 0
basic.forever(function () {
    basic.showNumber(Linke_Hand)
    basic.showString("+")
    basic.showNumber(rechte_hand)
    basic.showString("=")
    basic.showNumber(Linke_Hand + rechte_hand)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})

```
</details>

## Download Hex-Code

[Hex-code](code/mini-Taschenrechner.hex)

