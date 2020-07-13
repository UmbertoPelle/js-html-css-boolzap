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
  $("#main-chat").append('<div class="user">' + mess +'</div>');
  $("#messaggio").val("");
  setTimeout(function () {
    $("#main-chat").append('<div class="answer"> ok! </div>');
  }, 1000);
}

function serchInAddress() {
  $("#cercaAmici").keydown(function(){
    var chiCerchi=$("#cercaAmici").val()
    if (event.which == 13) {
      $("#listaAddress .friends").addClass("hidden");
      $(".friends[id^= "+ chiCerchi +"]").removeClass("hidden")
      $("#cercaAmici").val("")
    }
  });
}

function init() {
  writeMes()
  keyBordEnter()
  serchInAddress()
}

$(document).ready(init);
