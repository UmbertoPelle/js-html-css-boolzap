function writeMes(){

  $("#inviaMes").click(sendMessage);

}

function keyBordEnter() {

  $("#messaggio").keydown(function(){
    if (event.which == 13) {
      sendMessage()
    }
  });
}

function sendMessage() {
  var mess;
  mess=$("#messaggio").val();
  console.log(mess);
  $("#chat").append('<div class="user">' + mess +'</div>');
  $("#messaggio").val("");
  setTimeout(function () {
    $("#chat").append('<div class="answer"> ok! </div>');
  }, 1000);
}

function init() {
  writeMes()
  keyBordEnter()
}

$(document).ready(init);
