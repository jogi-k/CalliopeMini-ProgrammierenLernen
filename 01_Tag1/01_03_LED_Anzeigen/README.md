# LED anzeigen

## Auswahl aus Menu

![LED anzeigen Menu](pics/LedAnzeigenMenu.png)

## PXT-Code

![LED anzeigen](pics/LedAnzeigen.png)

## JavaScript-Code

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

## Download Hex-Code

![Hex-code](code/mini-LedAnzeigen.hex)

## Erweiterung mit Warten

![Pause einfuegen Menu](pics/PausenMenu.png)

Einheit: 

* ms ist MilliSekunden, das ist eine tausendstel Sekunde
* 1000 Millisekunden sind 1 Sekunde
* Wenn man mehrere verschiedene LED-Anzeigen haben will, ca 1 Sekunde = 1000 ms dazwischen


## PXT-Code

![LED anzeigen mit Pause](pics/LedAnzeigenMitPause.png)

## JavaScript-Code

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

## Download Hex-Code

![Hex-code](code/mini-LedAnzeigenMitPause.hex)

