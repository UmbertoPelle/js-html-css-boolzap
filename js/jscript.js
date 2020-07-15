
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
    $("#content").append('<div class="user">' + mess + '<i class="drop-down fas fa-chevron-down"><div class="hidden drop-down-content"><ul><li>Elimina messaggio</li></ul></div></i>'+'</div>');
    $("#messaggio").val("");
    setTimeout(function () {
      $("#content").append('<div class="answer"> ok! </div>');
    }, 1000);
  }

}

function serchInAddress() {
  $("#cercaAmici").keydown(function(){
    $("#x").removeClass("hidden");
    var chiCerchi=$("#cercaAmici").val().toLowerCase();
    if (event.which == 13) {
      $("#listaAddress .friends").addClass("hidden");
      $(".friends[id*= "+ chiCerchi +"]").removeClass("hidden");
      $("#cercaAmici").val("");
    }
  });
}

function clearAddress() {
  $("#x").click(function(){
    $("#listaAddress .friends").removeClass("hidden");
    $("#x").addClass("hidden");
    $("#cercaAmici").val("");
  });
}

function changeChat(){
  $(document).on('click','.friends', function() {
    var name= $(this).find(".anteprima h1").text();
    var img=$(this).children().children("img").attr("src");
    $(".top-chat #name h1").text(name);
    $(".top-chat .friend .profile-img img").attr("src",img);
    $("#chat #content").text("");
  });

}

function deleteNewMessage() {
  $(document).on('click', '.drop-down.fas.fa-chevron-down', function() {
    //nascondo tutti i pannelli delle opzioni
    $(".drop-down.fas.fa-chevron-down").children().addClass("hidden");
		// recupero il pannello delle opzioni corrispondente e lo mostro/nascondo
    if ($(this).children().hasClass("open")) {
      $(this).children().addClass("hidden");
      $(this).children().removeClass("open");
    }else {
      $(this).children().removeClass("hidden");
      $(this).children().addClass("open");
    }
    $(".drop-down-content").click(function(){
      $(this).parents(".user").addClass("hidden")
    });
  });
}

function init() {
  keyBordEnter();
  serchInAddress();
  clearAddress();
  changeChat();
  // deleteMessage();
  deleteNewMessage();
}

$(document).ready(init);
