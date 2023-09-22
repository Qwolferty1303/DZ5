// 1
$(document).ready(function() {
    $(".changeColor").click(function() {
      $(".exc1").css("background-color", "#b36e00");
    });
  });

// 2
$(document).ready(function() {
    $(".changeColorAndFig").click(function() {
      $(".exc2").css("border-radius", "100%");
      $(".exc2").css("background-color", "#b36e00");
    });
  });

// 3
$(document).ready(function() {
    $(".c1").click(function() {
      $(".exc3").fadeOut();
    });
  
    $(".c2").click(function() {
      $(".exc3").fadeIn();
    });
  
    $(".c3").click(function() {
      $(".exc3").fadeOut(function() {
        $(".exc3").fadeIn();
      });
    });
  });

// 4
$(document).ready(function() {
    $(".c4").click(function() {
      $(".exc4").slideUp();
    });
  
    $(".c5").click(function() {
      $(".exc4").slideDown();
    });
  
    $(".c6").click(function() {
      $(".exc4").slideUp(function() {
        $(".exc4").slideDown();
      });
    });
  });

// 5
$(document).ready(function() {
    $(".c7").click(function() {
      $(".exc5").hide();
    });
  
    $(".c8").click(function() {
      $(".exc5").show();
    });
  });

// 6
$(document).ready(function() {
    $(".c9").click(function() {
      $(".exc6").toggle();
    });
  });

// 7
$(document).ready(function() {
    $(".c10").dblclick(function() {
      $(".exc7").css("background-color", "#b36e00");
    });
  });