basic.forever(() => {
	for (let index = 0; index <= 25; index++) {
            led.plotBarGraph(
	                index,
	                25)
            basic.pause(100)
        }
})

