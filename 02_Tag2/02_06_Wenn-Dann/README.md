# Logik, Vergleiche, Wahrheit


## Weltmeisterschaft / Fussball-Wetten


![01_SchleifeFreiRaeumen.png](./pics/01_SchleifeFreiRaeumen.png)
![02_LogikMenu.png](./pics/02_LogikMenu.png)
![03_LogikFunktionen.png](./pics/03_LogikFunktionen.png)
![04_LogikWennDannAnsonsten.png](./pics/04_LogikWennDannAnsonsten.png)
![05_WennWahr.png](./pics/05_WennWahr.png)
![06_WennWahrSymbol.png](./pics/06_WennWahrSymbol.png)
![07_WennWahrSymbol_Wahr.png](./pics/07_WennWahrSymbol_Wahr.png)
![08_WennWahrSymbol_Falsch.png](./pics/08_WennWahrSymbol_Falsch.png)
![09_RGB_Led.png](./pics/09_RGB_Led.png)
![10_RGB_Led_In_WennWahr.png](./pics/10_RGB_Led_In_WennWahr.png)
![11_RGB_Led_In_WennWahr_Wahr.png](./pics/11_RGB_Led_In_WennWahr_Wahr.png)
![12_Logik_Vergleiche.png](./pics/12_Logik_Vergleiche.png)
![13_WennDann_Vergleich.png](./pics/13_WennDann_Vergleich.png)
![14_WennDann_Groesser.png](./pics/14_WennDann_Groesser.png)
![15_WennDann_Groesser_True.png](./pics/15_WennDann_Groesser_True.png)
![16_WennDann_Groesser_True.png](./pics/16_WennDann_Groesser_True.png)
![17_SpannungsMesser.png](./pics/17_SpannungsMesser.png)
![18_SpannungsMesser_mit_RGB_Led.png](./pics/18_SpannungsMesser_mit_RGB_Led.png)
![19_SpannungsMesser_Final.png](./pics/19_SpannungsMesser_Final.png)



## JavaScript-Code

<details>
 <summary>Java-Script-Code</summary>

```js
let Spannung = 0
let Messwert = 0
basic.forever(() => {
    Messwert = pins.analogReadPin(AnalogPin.P1)
    Spannung = 32 * Messwert / 10
    if (Spannung > 1500) {
        basic.setLedColor(Colors.Green)
    } else {
        basic.setLedColor(Colors.Red)
    }
    basic.showString("U=")
    basic.showNumber(Spannung)
    basic.showString("mV")
    basic.clearScreen()
})

```
</details>

## Download Hex-Code

![Hex-code](code/mini-BatterieTester_mit_RGB.hex)


## Navigation


* [Zurück](../02_05_BatterieTester/README.md)  
* [Hoch zur Übersicht](../README.md)  



## Lizenz/Copyright-Info
Für alle Bilder auf dieser Seite gilt:

*  Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0

