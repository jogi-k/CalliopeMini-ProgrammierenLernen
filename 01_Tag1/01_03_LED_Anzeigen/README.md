# LED anzeigen

## Auswahl aus Menu

![LED anzeigen Menu](pics/LedAnzeigenMenu.png){ height=70% }

## PXT-Code

![LED anzeigen](pics/LedAnzeigen.png){ height=70% }


## JavaScript-Code / Hex-Code
### JavaScript-Code

<details>
 <summary>Java-Script-Code</summary>

```js
basic.forever(() => {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
```
</details>

### Download Hex-Code

[Hex-code](code/mini-LedAnzeigen.hex)

## Erweiterung mit Warten

![Pause einfuegen Menu](pics/PausenMenu.png){ height=50% }


Einheit: 

* ms ist MilliSekunden, das ist eine tausendstel Sekunde
* 1000 Millisekunden sind 1 Sekunde
* Wenn man mehrere verschiedene LED-Anzeigen haben will, ca 1 Sekunde = 1000 ms dazwischen


## PXT-Code

![LED anzeigen mit Pause](pics/LedAnzeigenMitPause.png){ height=70% }


## JavaScript-Code / Hex-Code
<details>
 <summary>Java-Script-Code</summary>

```js
basic.forever(() => {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
})

```
</details>

__Download Hex-Code__

[Hex-code](code/mini-LedAnzeigenMitPause.hex)


## Lizenz/Copyright-Info
Für alle Texte und Bilder auf diesen Folien:

* Autor: Jörg Künstner
* Lizenz: CC BY-SA 4.0
