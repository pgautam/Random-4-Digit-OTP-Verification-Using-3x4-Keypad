function insertSix (keyNum: number, getArray: number[]) {
    if (keyNum >= 202 && keyNum <= 205) {
        keyNumber = 6
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertTwo (keyNum: number, getArray: number[]) {
    if (keyNum >= 235 && keyNum <= 239) {
        keyNumber = 2
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertFive (keyNum: number, getArray: number[]) {
    if (keyNum >= 148 && keyNum <= 151) {
        keyNumber = 5
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertFour (keyNum: number, getArray: number[]) {
    if (keyNum >= 117 && keyNum <= 120) {
        keyNumber = 4
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertOne (keyNum: number, getArray: number[]) {
    if (keyNum >= 155 && keyNum <= 173) {
        keyNumber = 1
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertEight (keyNum: number, getArray: number[]) {
    if (keyNum >= 103 && keyNum <= 107) {
        keyNumber = 8
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertSeven (keyNum: number, getArray: number[]) {
    if (keyNum >= 85 && keyNum <= 91) {
        keyNumber = 7
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
input.onButtonPressed(Button.B, function () {
    rndmOtp = 0
    keyNumber = 0
    otpArray = [
    0,
    0,
    0,
    0
    ]
    basic.clearScreen()
})
function insertThree (keyNum: number, getArray: number[]) {
    if (keyNum >= 361 && keyNum <= 370) {
        keyNumber = 3
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertNine (keyNum: number, getArray: number[]) {
    if (keyNum >= 129 && keyNum <= 132) {
        keyNumber = 9
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
function insertZero (keyNum: number, getArray: number[]) {
    if (keyNum >= 81 && keyNum <= 84) {
        keyNumber = 0
        basic.showNumber(keyNumber)
        serial.writeNumber(keyNumber)
        serial.writeLine("")
        getArray.push(keyNumber)
    }
    return getArray
}
let ipOtpNumber = 0
let ipOtpString = ""
let keyText = ""
let keyValue = 0
let keyNumber = 0
let otpArray: number[] = []
let rndmOtp = 0
rndmOtp = 0
otpArray = [
0,
0,
0,
0
]
keyNumber = 0
pins.digitalWritePin(DigitalPin.P5, 1)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P5, 1)
    if (input.buttonIsPressed(Button.A)) {
        rndmOtp = randint(1001, 9999)
        for (let index = 0; index < 3; index++) {
            basic.showNumber(rndmOtp)
        }
        basic.clearScreen()
    }
    keyValue = pins.analogReadPin(AnalogPin.P0)
    insertZero(keyValue, otpArray)
    insertOne(keyValue, otpArray)
    insertTwo(keyValue, otpArray)
    insertThree(keyValue, otpArray)
    insertFour(keyValue, otpArray)
    insertFive(keyValue, otpArray)
    insertSix(keyValue, otpArray)
    insertSeven(keyValue, otpArray)
    insertEight(keyValue, otpArray)
    insertNine(keyValue, otpArray)
    basic.clearScreen()
    basic.pause(100)
    if (keyValue >= 95 && keyValue <= 98) {
        basic.showString("#")
        basic.pause(100)
        basic.clearScreen()
        keyText = ""
        ipOtpString = ""
        for (let value of otpArray) {
            keyText = convertToText(value)
            ipOtpString = "" + ipOtpString + value
        }
        ipOtpNumber = parseFloat(ipOtpString)
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(ipOtpNumber)
        basic.clearScreen()
        basic.pause(100)
        if (rndmOtp == ipOtpNumber) {
            basic.showIcon(IconNames.Happy)
            pins.digitalWritePin(DigitalPin.P5, 0)
            basic.pause(5000)
        } else {
            basic.showIcon(IconNames.No)
            pins.digitalWritePin(DigitalPin.P5, 1)
            basic.pause(100)
        }
        otpArray = [
        0,
        0,
        0,
        0
        ]
    }
})
