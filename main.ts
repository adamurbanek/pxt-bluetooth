radio.setFrequencyBand(7) // frekvence - od 0 do 83
radio.setGroup(1) // skupina - od 0 do 255
radio.setTransmitSerialNumber(true) // nastavi zobrazeni serioveho cisla pro prijemce
radio.setTransmitPower(7) // od 0 do 7
control.deviceName() // prevede seriove cislo do slov

let startCode = 7;

console.logValue("name", control.deviceName())

// radio.sendNumber(0)
// radio.sendString("")
// radio.sendValue("name", 0)

radio.onReceivedValue(function (name: string, value: number) {
    const serialRemote = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    console.logValue(name, value)

    radio.sendValue("kod", 7)
})

radio.setGroup(42);

console.logValue("name", control.deviceName())

radio.onReceivedValue(function (name: string, value: number) {
    const serialRemote = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    console.logValue(name, value)

    radio.sendValue("kod2", 18);
})