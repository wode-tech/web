/*This should be enabled when tooltrip feature is added
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();-->*/

$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});

var loginModal = document.getElementById('loginModal');
var reserveModal = document.getElementById('reserveModal');

// Get the Anchor and button that opens the modal
var loginA = document.getElementById("loginA");
var reserveA = document.getElementById("reserveA");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

loginA.onclick = function() {
    loginModal.style.display = "block";
  }

reserveA.onclick = function() {
    reserveModal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == reserveModal) {
        reserveModal.style.display = "none";
    }
  }
