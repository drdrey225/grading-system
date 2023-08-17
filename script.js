function check() {
   

   // Grading Conditional statement
      //Grades 
      // 0-39 = Fail
      // 40-44 = Pass 
      // 45-49 = Average
      // 50-59 = Credit 
      // 60-69 = Good 
      // 70-100 = Excellent
   // if (checkgrade == "") {
   //    console.log("Not Recognised")
   //    display.innerHTML = "Not Recognised"
   // }

   var score = checkGrade.value
   var applause = new Audio("applause.mp3")
   var dinnerMan = new Audio("dinner-man.mp3")
   var failSong = new Audio("failure.mp3")
   var wahala = new Audio("wahala.mp3")

   if (score >=0 && score < 40) {
      console.log("F-Fail &#128533;")
      display.innerHTML = "F-Fail &#128533;"
      failSong.play();
      display.style.background = "red"
      display.style.color = "white"
   } else if (score >= 40 && score < 45) {
      console.log("P-Pass &#128530;")
      display.innerHTML = "P-Pass &#128530;"
      wahala.play();
   } else if (score >=45 && score < 50) {
      console.log("A-Average &#128528;")
      display.innerHTML = "A-Average &#128528;"
      dinnerMan.play();
   } else if (score >= 50 && score < 60) {
      console.log("C-Credit &#128526;")
      display.innerHTML = "C-Credit &#128526;"
      dinnerMan.play()
   } else if (score >= 60 && score < 70) {
      console.log("G-Good &#128523;")
      display.innerHTML = "G-Good &#128523;"
      applause.play()
   } else if (score >= 70 && score <= 100) {
      console.log("Excellent &#128525;")
      display.innerHTML = "Excellent &#128525;"
      display.style.background = "green"
      display.style.color = "white"
      applause.play();
   } else if (score > 100 || score < 0) {
      console.log("Not Recognized")
      display.innerHTML = "Not Recognized"
      display.style.background = "red"
      display.style.color = "white"
   } 
   // else {
      // display.innerHTML = "Score can not be lesser than 0"
   // }

   if (checkGrade.value == "") {
      console.log("INVALID")
      display.innerHTML = "INVALID"
   } 
}