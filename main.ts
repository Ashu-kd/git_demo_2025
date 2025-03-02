input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
})
basic.showString("Hello!")
