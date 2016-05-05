// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
const PARENT_STYLES = {
  display: 'flex',
  maxWidth: '100%',
}

class Slider {
  static defaults = {
    transitionDuration: 1000,
    transitionDelay: 8000,
    slideWidthMin: '480px',
    slideWidthMax: '640px'
  }
  
  slides = []
  
  constructor (parent, args = {}) {
    this.args = Object.assign(Slider.defaults, args)
    this.parent = document.querySelector(parent)
    this.slides = Array.from(parent.childNodes)
    this.applyParentStyles()
    this.slides.forEach(slide => applySlideStyles(slide))
  }
  
  applyParentStyles (parent = this.parent) {
    Object.assign(parent, {
      display: 'flex',
      maxWidth: '100%'
    })
    
    return parent
  }
  
  applySlideStyles (slide) {    
    if (!(slide instanceof Node)) {
      return el
    }
    // Apply SLIDE_STYLES to slide
    Object.assign(slide.style, {
      minWidth: slideWidthMin,
      maxWidth: slideWidthMax,
      flex: `1 1 auto`
    })
    return slide
  }
  
  next () {
    
  }
  
  prev () {
    
  }
}

export default Slider