function takeMes(){
  var mess;
  $("#inviaMes").click(function () {
    mess=$("#messaggio").val();
    console.log(mess);
    $("#chat").append('<div class="user">' + mess +'</div>');
  });

}

function init() {
  takeMes()
}

$(document).ready(init);
