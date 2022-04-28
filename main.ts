let lectura = 0
basic.showLeds(`
    # . . . #
    . # . # .
    # # # # #
    . # . # .
    # . . . #
    `)
let contador = 5
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    lectura = pins.digitalReadPin(DigitalPin.P0)
    if (lectura == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # # # # #
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (lectura == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        while (contador > 0) {
            basic.showString("" + (contador))
            basic.pause(1000)
            contador += -1
        }
        contador = 5
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            # # # # #
            . # . # .
            # . . . #
            `)
    }
})
