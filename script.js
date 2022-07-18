let digitalClock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hours1= hours % 12 || 12;

  hours1=(hours1<10)?"0"+ hours1 :hours1;
  minutes=(minutes<10)?"0"+ minutes :minutes;
  seconds=(seconds<10)?"0"+ seconds :seconds;
  
  let amOrpm = hours >= 12 ? "PM" : "AM";

  document.getElementById("hours").innerHTML = hours1;
  document.getElementById("munites").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("amorpm").innerHTML = amOrpm;

  setTimeout(digitalClock, 1000);
};
digitalClock();

let digitalClock1 = () => {
  let date = new Date();
  let hoursone = date.getHours();
  let minitesone = date.getMinutes();

  let time1 =hoursone;
  let grab1 = document.getElementsByClassName("grab");
  let grab2 = document.getElementsByClassName("goodmorning");
  let grab3 = document.getElementById("box111");


  if (time1 < 12) {
    grab1[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    grab2[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    grab3.style.backgroundImage="url('/Component\ 30\ –\ 1.svg')"
  } else if (time1 >=12 && time1<16 ) {
    grab1[0].innerHTML = "LET'S HAVE SOME LUNCH !!";
    grab2[0].innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    grab3.style.backgroundImage="url('/Component\ 31\ –\ 1.svg')"
  } else if (time1 >=16 && time1<20) {
    grab1[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    grab2[0].innerHTML = "GOOD EVENING !!";
    grab3.style.backgroundImage="url('/lunch_image.png')";
  } else if (time1 >=20 && time1<24 ) {
    grab1[0].innerHTML = "SCLOSE YOUR EYES AND GO TO SLEEP ";
    grab2[0].innerHTML = "GOOD NIGHT !!";
    grab3.style.backgroundImage="url('/Component\ 32\ –\ 1.svg')"
  }
  else{
    grab1[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    grab2[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    grab3.style.backgroundImage="url('/Component\ 30\ –\ 1.svg')"

  }
};
digitalClock1();



let grab4=document.getElementsByClassName("selalarm1");
let grab5=document.getElementById("box51");
let hover1=()=>{
    grab4[0].innerHTML="Party time!";
    grab5.style.backgroundImage=" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 81%,#6e54ec 200%)"


}
let hover2=()=>{
    grab4[0].innerHTML="Set Alarm"
    grab5.style.backgroundImage=" linear-gradient(113deg, #6e54ec 0%, #cb52f8 40%, #fc5eff 81%, #f1a7c5 100%)"



}


       