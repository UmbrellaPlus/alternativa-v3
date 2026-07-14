import EmblaCarousel from 'embla-carousel';

// Select all carousel root nodes on the page
const carousels = document.querySelectorAll('.embla');

carousels.forEach((carouselNode) => {
  const viewportNode = carouselNode.querySelector('.embla__viewport');
  const prevButton = carouselNode.querySelector('.embla__prev');
  const nextButton = carouselNode.querySelector('.embla__next');

  const emblaApi = EmblaCarousel(viewportNode, {loop: true});

  if (prevButton) {
    prevButton.addEventListener('click', emblaApi.scrollPrev);
  }
  if (nextButton) {
    nextButton.addEventListener('click', emblaApi.scrollNext);
  }
});