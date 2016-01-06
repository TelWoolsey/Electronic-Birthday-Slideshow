
// Can transtition using click on images that are shown as the slideshow goes on.


//-------- Hide Opening H1

var $doc = $(document);
var $bday = $("#birthday-banner"); 
var $roryNormal = $("#rory-alone")
var $tbubble = $("#thought-bubble");
var $phone = $("#phone-booth");
var $headKick = $("#kicked-in-head");
var $goForward = $(" h3 ");
var $chuckMadFace = $("#norris-mad");
var $atWar = $("#at-war");

// ----------  Functions

// Go Forward Alert - Show

var showForward = function() {
  $goForward.delay(5000).show("slow");
};
// Go Forward Alert - Hide
var hideForward = function() {
  $goForward.hide("fast");
};

// Thought Bubble Text
function thoughtBub (innerText) {
  $tbubble.delay(1000).text(innerText);
};

//---------------------------------------------

$doc.ready( function() {
  $("#birthday-banner, #superman, #rory-alone, #thought-bubble, #phone-booth, #kicked-in-head, #hulk-rory, #rory-mushroom, #at-war, h3, #norris-mad").hide();
});

$("#bow").click( function() {
  $( this ).slideUp();
  function chuckNorris() {
      $tbubble.delay(1000).text("Remember that time you kicked Chuck Norris' ass in a street fight?").show("slow");
      $headKick.show("slow");
      showForward();
    }
    chuckNorris();
  });

$headKick.click( function() {
  $( this ).slideUp();
  hideForward();
  thoughtBub("He's still mad about that");
  $chuckMadFace.show();
  showForward();
  });

$chuckMadFace.click( function() {
  $( this ).slideUp();
  hideForward();
  thoughtBub("Then there was that time back during World War Z");
  $atWar.show();
  showForward();
  });