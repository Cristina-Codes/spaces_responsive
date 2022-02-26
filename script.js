	// Get the button:
  // var myDiv = document.getElementById('backToTop');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      $("#backToTop").css("display", "block");
    } else {
      $("#backToTop").css("display", "none");
    }
  }