#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

#define TRIG_PIN 9
#define ECHO_PIN 10
#define WATER_SENSOR_PIN A0

Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(WATER_SENSOR_PIN, INPUT);

  if (!accel.begin()) {
    Serial.println("ADXL345 not detected.");
    while (1);
  }
}

void loop() {
  // Distance Sensor (HC-SR04)
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.034 / 2;

  // Water Sensor
  int waterLevel = analogRead(WATER_SENSOR_PIN);

  // Accelerometer (ADXL345)
  sensors_event_t event;
  accel.getEvent(&event);
  float x = event.acceleration.x;
  float y = event.acceleration.y;
  float z = event.acceleration.z;

  // Serial Output (JSON Format)
  Serial.print("{\"distance\":"); Serial.print(distance);
  Serial.print(", \"water\":"); Serial.print(waterLevel);
  Serial.print(", \"accel_x\":"); Serial.print(x);
  Serial.print(", \"accel_y\":"); Serial.print(y);
  Serial.print(", \"accel_z\":"); Serial.print(z);
  Serial.println("}");

  delay(1000);
}