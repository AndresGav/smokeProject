int ledRojo = 12;
int ledVerde = 11;
int buzzer = 10;
int smokeA0 = A5;
// Definir un valor
int sensorThres = 400;

void setup() {
  pinMode(ledRojo, OUTPUT);
  pinMode(ledVerde, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(smokeA0, INPUT);
  Serial.begin(9600);
}

void loop() {
  int analogSensor = analogRead(smokeA0);

  Serial.print("Pin A0: ");
  Serial.println(analogSensor);
  // Comprueba si se alcanzo el valor definido
  if (analogSensor > sensorThres)
  {
    digitalWrite(ledRojo, HIGH);
    digitalWrite(ledVerde, LOW);
    tone(buzzer, 1000, 200);
  }
  else
  {
    digitalWrite(ledRojo, LOW);
    digitalWrite(ledVerde, HIGH);
    noTone(buzzer);
  }
  delay(100);
}
