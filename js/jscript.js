
function keyBordEnter() {

  $("#messaggio").keydown(function(){
    if (event.which == 13 || event.which == 76) {
      sendMessage()
    }
  });
}

function sendMessage() {
  var mess;
  mess=$("#messaggio").val();
  if (mess) {
    $("#main-chat").append('<div class="user">' + mess +'</div>');
    $("#messaggio").val("");
    setTimeout(function () {
      $("#main-chat").append('<div class="answer"> ok! </div>');
    }, 1000);
  }

}

function serchInAddress() {
  $("#cercaAmici").keydown(function(){
    $("#x").removeClass("hidden");
    var chiCerchi=$("#cercaAmici").val();
    if (event.which == 13) {
      $("#listaAddress .friends").addClass("hidden");
      $(".friends[id^= "+ chiCerchi +"]").removeClass("hidden");
      $("#cercaAmici").val("");
    }
  });
}

function clearAddress() {
  $("#x").click(function(){
    $("#listaAddress .friends").removeClass("hidden");
    $("#x").addClass("hidden");
  });
}

function changeChat(){
  $(".friends").click(function(){
    var name= $(this).attr("id");
    $(".top-chat #name h1").text(name);
    $("#content").text("");
  });
}

function deleteMessage(){
  $(".drop-down.fas.fa-chevron-down").click(function () {
    $(this).children().removeClass("hidden");
  });
  $(".drop-down-content").click(function(){
    $(this).parents(".user").addClass("hidden")
  })
}

function init() {
  keyBordEnter();
  serchInAddress();
  clearAddress();
  changeChat();
  deleteMessage()
}

$(document).ready(init);
