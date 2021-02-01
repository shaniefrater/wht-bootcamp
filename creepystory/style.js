var personName = "";

function complainMessage() {
  alert("You've been spotted " + personName);
}

function loudPicture() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function explainWhy() {
  document.getElementById("story").innerHTML = "It's my great great grandmother's house. She used to look after the village crazy and rumour has it he's still alive after all those years. I never believed it but now I'm not so sure";
}