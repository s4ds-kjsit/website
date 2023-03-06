      //common reveal options to create reveal animations
      ScrollReveal({
        //reset: true,
        opacity: 0,
        duration: 2500,
        delay: 400,
      });

      //target elements, and specify options to create reveal animations
      ScrollReveal().reveal(".card_01 , .card_03, .card_05, .card_07", {
        delay: 500,
        opacity: 1,
      });
      ScrollReveal().reveal(".card_02 , .card_04, .card_06, .card_08", {
        delay: 500,
        opacity: 1,
      });

      const cardBody = document.querySelector('.card_body');

// Check if the viewport width is less than or equal to 768px
if (window.innerWidth <= 768) {
  cardBody.addEventListener('mouseenter', function() {
    this.classList.add('hovered');
  });

  cardBody.addEventListener('mouseleave', function() {
    this.classList.remove('hovered');
  });
}
