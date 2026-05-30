function analyzeComment() {

  let comment =
  document.getElementById("commentBox").value;

  let result =
  document.getElementById("result");

  let meter =
  document.getElementById("meter");

  comment = comment.toLowerCase();

  let score = 10;

  if(comment.includes("fake")) score = 70;
  if(comment.includes("stupid")) score = 80;
  if(comment.includes("waste")) score = 90;
  if(comment.includes("hate")) score = 95;

  meter.value = score;

  if(score >= 80){

    result.innerHTML =
    "TOXIC COMMENT | SCORE: " + score + "%";

    result.style.color = "red";

  }
  else if(score >= 50){

    result.innerHTML =
    "SUSPICIOUS COMMENT | SCORE: " + score + "%";

    result.style.color = "orange";

  }
  else{

    result.innerHTML =
    "SAFE COMMENT | SCORE: " + score + "%";

    result.style.color = "green";

  }

}