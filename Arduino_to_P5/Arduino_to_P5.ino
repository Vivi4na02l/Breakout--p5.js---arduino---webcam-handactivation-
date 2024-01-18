int joyXPin = A0;
//int joyYPin = A1;
//int ledPin = 11;
int butPin = 12;

int joyXPos, joyYPos;
int ledBrightness, butValue;

void setup() {
  //pinMode(ledPin, OUTPUT);
  pinMode(butPin, INPUT_PULLUP);
  Serial.begin(9600);

}

void loop() {

  // Input do joystick
  // Input de valores de 0 a 1023
  joyXPos = analogRead(joyXPin);
  //joyYPos = analogRead(joyYPin);
  butValue = digitalRead(butPin);
  Serial.print(joyXPos);
  Serial.print(" ");
  //Serial.print(joyYPos);
  //Serial.print(" ");
  Serial.println(butValue);

  // Output do led
  //ledBrightness = map(joyXPos, 0, 1023, 0, 127);
  //ledBrightness = constrain(joyXPos, 0, 127);
  //analogWrite(ledPin, ledBrightness);

  delay(150);
}
