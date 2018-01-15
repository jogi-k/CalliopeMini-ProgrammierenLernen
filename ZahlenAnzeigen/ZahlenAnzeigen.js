basic.forever(() => {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
