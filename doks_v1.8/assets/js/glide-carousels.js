// Loaded & Executed on the main ETLBox start page only

/*
XL (Extra Large): Desktop screens (≥1200px or ≥1400px depending on the framework).
L (Large): Laptops or large tablets (≥992px to <1200px).
M (Medium): Small tablets or large mobile devices (≥768px to <992px).
S (Small): Mobile phones (≥576px to <768px).
XS (Extra Small): Small mobile devices (<576px).
*/
import Glide from '@glidejs/glide'

function mountGlide(selector, options) {
  if (!document.querySelector(selector)) return
  new Glide(selector, options).mount()
}

mountGlide('.glide-single-customer', {
  type: 'carousel',
  startAt: 0,
  focusAt: 'center',
  peek: 0,
  gap: 0,
  perView: 1 // Always show only 1 element
})

mountGlide('.glide-carousel-reference', {
  type: 'carousel',
  startAt: 0,
  perView: 4, // Default for xl
  breakpoints: {
    1400: { // Medium screens (M)
      perView: 3
    },
    992: { // Medium screens (M)
      perView: 2
    },
    576: { // Small screens (smaller than M)
      perView: 1
    }
  }
})

mountGlide('.glide-carousel-screenshots', {
  type: 'carousel',
  startAt: 0,
  autoplay: 5000,
  hoverpause: true,
  rewind: true,
  perView: 1
})

mountGlide('.glide-carousel-connector', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  animationDuration: 3000,
  animationTimingFunc: 'linear',
  perView: 8, // Default for xl
  breakpoints: {
    1400: { // Medium screens (M)
      perView: 8
    },
    992: { // Medium screens (M)
      perView: 4
    },
    576: { // Small screens (smaller than M)
      perView: 2
    }
  }
})
