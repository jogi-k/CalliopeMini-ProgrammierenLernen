let Helligkeit = 0
basic.forever(() => {
    Helligkeit = input.lightLevel()
    if (Helligkeit > 127) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
           `)
     } else {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
          `)
    }
})

