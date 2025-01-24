// Loaded & Executed on the start page only

/** Glide - a carousel implementation (bootstrap was not properly working) */
import Glide from '@glidejs/glide'
var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3
})

glide.mount()
