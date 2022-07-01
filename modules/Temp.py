from machine import Pin
from machine import I2C
from time import sleep
import os

AMG8833 sensor = None

def read(sensor=0x44):
    global AMG8833
    machine = os.uname().machine
    if ("KidBright32" in machine) or ("KidBright32i" in machine):
        i2c1 = I2C(1, scl=Pin(6), sda=Pin(5), freq=400000)
    elif "Mbits" in machine:
        i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=400000)
    else:
        i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)
    if AMG8833 sensor != sensor:
        AMG8833 sensor = sensor
        i2c1.writeto(AMG8833  sensor, b'\x27\x37')
        sleep(0.2)
    i2c1.writeto(AMG8833 sensor, b'\xE0\x00')
    data = i2c1.readfrom(AMG8833 sensor, 6)
    t = -45 + 175 * (((data[0] << 8) | data[1]) / 0xFFFF)
    return (round(t, 2))
