
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
  if (mess) {
    $("#content").append('<div class="user">' + mess + '<i class="drop-down fas fa-chevron-down"><div class="hidden drop-down-content"><ul><li>Elimina messaggio</li></ul></div></i>'+'</div>');
    $("#messaggio").val("");
    setTimeout(function () {
      $("#content").append('<div class="answer"> ok! </div>');
    }, 1000);
  }
  var nome = $(".friend #name h1").text().toLowerCase();
  $(".friends").each(function () {
    if ($(this).attr("id") == nome) {
      $(this).find(".storyChat").append('<div class="user">' + mess + '<i class="drop-down fas fa-chevron-down"><div class="hidden drop-down-content"><ul><li>Elimina messaggio</li></ul></div></i>'+'</div>')
      $(this).find(".storyChat").append('<div class="answer"> ok! </div>');
    }
  });
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
    var story = $(this).find(".storyChat").children().clone()
    $(".top-chat #name h1").text(name);
    $(".top-chat .friend .profile-img img").attr("src",img);
    $("#chat #content").text("")
    $("#chat #content").append(story);
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
      $(this).parents(".user").remove();
    });

    var nome = $(".friend #name h1").text().toLowerCase();
    $(".friends").each(function () {
      if ($(this).attr("id") == nome) {
        var temp = $("#content").children().clone();
        $(this).find(".storyChat").html(temp);
        console.log(temp);
      }
    });
  });
}

function init() {
  keyBordEnter();
  serchInAddress();
  clearAddress();
  changeChat();
  deleteNewMessage();
}

$(document).ready(init);
