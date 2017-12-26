basic.forever(() => {
	    basic.showNumber(input.temperature())
	    images.createBigImage(`
		            . # . . .   . # # . .
		            # . # . .   # . . # .
		            . # . . .   # . . . .
		            . . . . .   # . . # .
		            . . . . .   . # # . .
		            `).scrollImage(1, 200)
	    basic.clearScreen()
	    basic.pause(1000)
})

