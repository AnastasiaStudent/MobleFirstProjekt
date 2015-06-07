
/* JavaScript content from js/animationJs.js in folder common */
$(".fa-lock").draggable({
  revert: true,
  start: function(event, ui) {
    $(".bubble").addClass("expand");
  },
  stop: function(event, ui) {

    if (ui.position.left < 30 || ui.position.left > 270 || ui.position.top < 30 || ui.position.top > 270) {

      // Unlock
      $(".fa-check").addClass("return");
      $(".fa-lock").addClass("away");
      $(".lock").addClass("good");
    }

    $(".bubble").removeClass("expand");
  }
});