# LED anzeigen

## Auswahl aus Menu

![LED anzeigen Menu](LedAnzeigenMenu.png)

## PXT-Code

![LED anzeigen](LedAnzeigen.png)

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

![Hex-code](mini-LedAnzeigen.hex)

## Erweiterung mit Warten

![Pause einfuegen Menu](PausenMenu.png)

Einheit: 

* ms ist MilliSekunden, das ist eine tausendstel Sekunde
* 1000 Millisekunden sind 1 Sekunde
* Wenn man mehrere verschiedene LED-Anzeigen haben will, ca 1 Sekunde = 1000 ms dazwischen


## PXT-Code

![LED anzeigen mit Pause](LedAnzeigenMitPause.png)

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

</details>

## Download Hex-Code

![Hex-code](mini-LedAnzeigenMitPause.hex)
