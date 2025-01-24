// Loaded & Executed on the start page only

/*
XL (Extra Large): Desktop screens (≥1200px or ≥1400px depending on the framework).
L (Large): Laptops or large tablets (≥992px to <1200px).
M (Medium): Small tablets or large mobile devices (≥768px to <992px).
S (Small): Mobile phones (≥576px to <768px).
XS (Extra Small): Small mobile devices (<576px).
*/

/** Glide - a carousel implementation */
import Glide from '@glidejs/glide'
var glide = new Glide('.glide', {
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

glide.mount()
