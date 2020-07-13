function writeMes(){
  var mess;
  $("#inviaMes").click(function () {
    mess=$("#messaggio").val();
    console.log(mess);
    $("#chat").append('<div class="user">' + mess +'</div>');
    $("#messaggio").val("");
    setTimeout(function () {
      $("#chat").append('<div class="answer"> ok! </div>');
    }, 1000);
  });

}

function init() {
  writeMes()
}

$(document).ready(init);
