window.addEventListener('scroll', function() {
    var goTopButton = document.getElementById('go-to-top');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust the value (600) to the desired distance for the button to appear
    if (scrollPosition > 400) {
      goTopButton.classList.remove('hidden');
    } else {
      goTopButton.classList.add('hidden');
    }
});