$(document).ready(function () {
  var targetNumber = Math.floor(Math.random() * 120) + 1;

  $("#number-to-guess").text(targetNumber);
  var sumScore = 0;
  var wincounter = 0;
  var losscounter = 0;

  $("#pink").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#pink").attr("randVal"));
  $("#dark").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#dark").attr("randVal"));
  $("#purple").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#purple").attr("randVal"));
  $("#pale").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#pale").attr("randVal"));


  $("#pink").on("click", function () {
    $("#sumScore").text(parseInt($("#sumScore").text()) + parseInt($("#pink").attr("randVal")));
    console.log('sumScore:' + sumScore + ', targetNumber: ' + targetNumber);
    resultCalc();
  });

  $("#dark").on("click", function () {
    $("#sumScore").text(parseInt($("#sumScore").text()) + parseInt($("#dark").attr("randVal")));
    console.log('sumScore:' + sumScore + ', targetNumber: ' + targetNumber);
    resultCalc();
  });

  $("#purple").on("click", function () { 
    $("#sumScore").text(parseInt($("#sumScore").text()) + parseInt($("#purple").attr("randVal")));
    console.log('sumScore:' + sumScore + ', targetNumber: ' + targetNumber);
    resultCalc();
  });

  $("#pale").on("click", function () {
    $("#sumScore").text(parseInt($("#sumScore").text()) + parseInt($("#pale").attr("randVal")));
    console.log('sumScore:' + sumScore + ', targetNumber: ' + targetNumber);
    resultCalc();
  });
 
  console.log('targetNumber', targetNumber);

  function resultCalc() {
    sumScore = parseInt($("#sumScore").text());

    console.log("function targetNumber " + targetNumber);
    console.log("function sumScore " + sumScore);

    if (targetNumber == sumScore) {
      wincounter++;
      $("#winsspan").text(wincounter);
      sumScore=0;
      targetNumber = Math.floor(Math.random() * 120) + 1;
      $("#number-to-guess").text(targetNumber);
      $("#sumScore").text("0");
      $("#pink").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#pink").attr("randVal"));
  $("#dark").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#dark").attr("randVal"));
  $("#purple").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#purple").attr("randVal"));
  $("#pale").attr("randVal", Math.floor(Math.random() * 12) + 1);
  console.log($("#pale").attr("randVal"));
    }

    if (sumScore > targetNumber) {
      losscounter++;
      $("#lossspan").text(losscounter);

      sumScore=0;
      targetNumber = Math.floor(Math.random() * 120) + 1;
      $("#number-to-guess").text(targetNumber);
      $("#sumScore").text("0");
      $("#pink").attr("randVal", Math.floor(Math.random() * 12) + 1);
      console.log($("#pink").attr("randVal"));
      $("#dark").attr("randVal", Math.floor(Math.random() * 12) + 1);
      console.log($("#dark").attr("randVal"));
      $("#purple").attr("randVal", Math.floor(Math.random() * 12) + 1);
      console.log($("#purple").attr("randVal"));
      $("#pale").attr("randVal", Math.floor(Math.random() * 12) + 1);
      console.log($("#pale").attr("randVal"));
    }

  }

});

