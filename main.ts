let myDigit = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 4)
myDigit.setDigitColor(5)
forever(function () {
    myDigit.count += 1
    timer.throttle("action", 1000, function () {
        myDigit.count = 0
    })
})
