// Loaded & Executed on the start page only

/*
XL (Extra Large): Desktop screens (≥1200px or ≥1400px depending on the framework).
L (Large): Laptops or large tablets (≥992px to <1200px).
M (Medium): Small tablets or large mobile devices (≥768px to <992px).
S (Small): Mobile phones (≥576px to <768px).
XS (Extra Small): Small mobile devices (<576px).
*/
import Glide from '@glidejs/glide'

// Neuer Glider mit 1 Element per View
var customerGlide = new Glide('.glide-single-customer', {
  type: 'carousel',
  startAt: 0,
  focusAt: 'center',
  peek: 0,
  gap: 0,
  perView: 1 // Always show only 1 element
});

customerGlide.mount();

var referenceGlide = new Glide('.glide-carousel-reference', {
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

referenceGlide.mount()

var connectorGlide = new Glide('.glide-carousel-connector', {
  type: 'carousel',
  startAt: 0,
  autoplay: 1000,
  animationDuration: 2000,
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

connectorGlide.mount()
