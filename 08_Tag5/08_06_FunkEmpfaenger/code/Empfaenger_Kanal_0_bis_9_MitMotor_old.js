let Motor_Rechts = 0
let Motor_Links = 0
let led_y = 0
let led_x = 0
let richtung = 0
let geschwindigkeit = 0
let Kanal = 0
Kanal = 1
Motor_Links = 0
Motor_Rechts = 0
radio.setGroup(Kanal)
radio.setTransmitPower(7)
basic.showNumber(Kanal)

input.onButtonPressed(Button.A, () => {
    Kanal += -1
    if (Kanal < 0) {
        Kanal = 0
    }
    radio.setGroup(Kanal)
    basic.showNumber(Kanal)
})


input.onButtonPressed(Button.B, () => {
    Kanal += 1
    if (Kanal > 9) {
        Kanal = 9
    }
    radio.setGroup(Kanal)
    basic.showNumber(Kanal)
})

radio.onDataPacketReceived(({ receivedString: name, receivedNumber: value }) => {
    if (name == "speed") {
        geschwindigkeit = value
    } else if (name == "richtung") {
        richtung = value
    }
    basic.clearScreen()
})

basic.forever(() => {
    led.unplot(led_x, led_y)
    led_x = pins.map(
        richtung,
        -50,
        50,
        0,
        4
    )
    led_y = pins.map(
        geschwindigkeit,
        0,
        100,
        4,
        0
    )
    led.plot(led_x, led_y)
    Motor_Links = geschwindigkeit + richtung
    Motor_Rechts = geschwindigkeit - richtung
    if (Motor_Links > 100) {
        Motor_Links = 100
    }
    if (Motor_Links < 0) {
        Motor_Links = 0
    }
    if (Motor_Rechts > 100) {
        Motor_Rechts = 100
    }
    if (Motor_Rechts < 0) {
        Motor_Rechts = 0
    }
    motors.dualMotorPower(Motor.B, Motor_Links)
    motors.dualMotorPower(Motor.A, Motor_Rechts)
})

