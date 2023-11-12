const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const carousels = document.querySelectorAll('.carousel');
    const dots = document.querySelectorAll('.dot');

    const numberOfCarousel = carousels.length;
    var carouselNumber = 0;
    
    // making a function for next button when we click on next button than next slide will open
    nextBtn.addEventListener('click', () => {
      carousels.forEach((carousel) => {
        carousel.classList.remove('active');
      });
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      carouselNumber++;

      if (carouselNumber > numberOfCarousel - 1) {
        carouselNumber = 0;
      }
      carousels[carouselNumber].classList.add('active');
      dots[carouselNumber].classList.add('active');
    });

    // making a function for previous button when we click on previous button than previous slide will open
    prevBtn.addEventListener('click', () => {
      carousels.forEach((carousel) => {
        carousel.classList.remove('active');
      });
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      carouselNumber--;

      if (carouselNumber < 0) {
        carouselNumber = numberOfCarousel - 1;
      }
      carousels[carouselNumber].classList.add('active');
      dots[carouselNumber].classList.add('active');
    });

    // making a function for Dots  when we click on Dots  than the slide will open
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        carousels.forEach((slide) => {
          slide.classList.remove('active');
        });
        dots.forEach((dot) => {
          dot.classList.remove('active');
        });
        carouselNumber++;

        if (carouselNumber > numberOfCarousel - 1) {
          carouselNumber = 0;
        }
        carousels[carouselNumber].classList.add('active');
        dots[carouselNumber].classList.add('active');
      });
    });

    // assigning pause/play buttons
    const resume = document.getElementById('resume');
    const pause = document.getElementById('pause');
    var playSlider;

    // function for auto play slide when we click on play button
    resume.addEventListener('click', () => {
      var repeater = () => {
        playSlider = setInterval(function () {
          carousels.forEach((slide) => {
            slide.classList.remove('active');
          });
          dots.forEach((dot) => {
            dot.classList.remove('active');
          });

          carouselNumber++;

          if (carouselNumber > numberOfCarousel - 1) {
            carouselNumber = 0;
          }
          carousels[carouselNumber].classList.add('active');
          dots[carouselNumber].classList.add('active');
        }, 1600); // 2000 is equal to 2 seconds in we want to increase or decrease the delay than we have to just increase or decrease seconds
      };
      repeater();
      resume.style.display = 'none';
      pause.style.display = 'block';
    });

    // function for stop autoplay slide when we click on resume button
    pause.addEventListener('click', () => {
      resume.style.display = 'block';
      pause.style.display = 'none';
      clearInterval(playSlider);
    });


    
