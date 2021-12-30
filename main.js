function setup(){
	
	pinMode(0, INPUT);  //merupakan input
	pinMode(1, OUTPUT); // merupakan output
	
}

function loop(){ // digunakan untuk menciptakan sebuah kondisi

	var motion = digitalRead(0); // digunakan untuk mendeklarasikan motion sebagai inputan.
	Serial.println(motion); // mengeluarkan data motion.
	
	if (motion == 1023){ 
		digitalWrite(1, HIGH) // jika gerakan dari cursor mouse mendekati sensor gerakan maka akan menyalakan pendingin udara.
	}
	
	else {
		digitalWrite(1, LOW); // jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka pendingin udara akan mati.
	}
}
