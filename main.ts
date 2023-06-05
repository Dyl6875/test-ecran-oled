radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showNumber(
    0,
    0,
    12,
    1
    )
    OLED12864_I2C.showNumber(
    110,
    0,
    10,
    1
    )
})
radio.onReceivedString(function (receivedString) {
	
})
OLED12864_I2C.init(60)
radio.setGroup(105)
