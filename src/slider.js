export default class Slider {
  
  static defaults = {
    transitionDelay: 6000,                  // {Number} slide delay (ms)
    buttons: true,                          // {Boolean} whether to toggle buttons or not
    reel: '.slider-reel',                   // {String} reel selector
    items: '.slider-item',                  // {String} items selector
    buttonClass: 'slider-btn',              // {String} button class
    buttonPrevClass: 'slider-btn-prev',     // {String} button prev class
    buttonNextClass: 'slider-btn-next',     // {String} button next class
    auto: true                              // {Boolean} auto transition
  }
  
  timer = null     // the timeout object
  active = 0       // the active slide (zero-indexed), default to 0
  
  /**
   * @param {String} selector
   * @param {Object} args
   */
  constructor (selector = '', args = {}) {
    this.args = Object.assign(Slider.defaults, args)
    this.el = document.querySelector(selector)
    this.reel = this.el.querySelector(this.args.reel)
    this.items = Array.from(this.el.querySelectorAll(this.args.items))
    
    // render prev and next buttons
    if (this.items.length > 1 && this.args.buttons) {
      this.createButtons()
    }
    
    // when window is resized then recalculate the offset
    if (window) {
      window.addEventListener('resize', ::this.slide)
    }
    
    // start    
    if (this.args.auto) {
      this.queue()
    }
  }
  
  /**
   * Create the `prev` and `next` buttons
   */
  createButtons () {
    // prev
    const prevButton = document.createElement('button')
    prevButton.type = 'button'
    prevButton.addEventListener('click', ::this.prev)
    prevButton.classList.add(this.args.buttonClass)
    prevButton.classList.add(this.args.buttonPrevClass)
    this.el.appendChild(prevButton)
    
    // next
    const nextButton = document.createElement('button')
    nextButton.type = 'button'
    nextButton.addEventListener('click', ::this.next)
    nextButton.classList.add(this.args.buttonClass)
    nextButton.classList.add(this.args.buttonNextClass)
    this.el.appendChild(nextButton)
  }
  
  /**
   * Slide the reel to the correct position 
   */
  slide () {
    const lastBounds = this.getLastItem().getBoundingClientRect()
    const elBounds = this.el.getBoundingClientRect()
    // calculate offset (as a percent)
    const pc = lastBounds.width / elBounds.width * this.active * 100 * -1
    // const offset = .width * this.active * -1
    this.reel.style.transform = `translateX(${pc}%)`
    
    // queue the next slide
    if (this.args.auto) {
      this.queue()
    }
  }
  
  /**
   * Get the last item from this.items
   * @return {Node}
   */
  getLastItem () {
    return this.items.slice(-1).pop()
  }
  
  /**
   * Queue next
   */
  queue () {
    clearTimeout(this.timer)
    this.timer = setTimeout(::this.next, this.args.transitionDelay)
  }
  
  /**
   * Pause the timer
   */
  pause () {
    clearTimeout(this.timer)
  }
  
  /**
   * Start the timer
   */
  start () {
    this.queue()
  }
  
  /**
   * Next slide
   */
  next () {
    const lastBounds = this.getLastItem().getBoundingClientRect()
    const elBounds = this.el.getBoundingClientRect()
    
    // if there's whitespace to the right of the last item then set `this.active` to 0 to avoid
    if (lastBounds.right - lastBounds.width < elBounds.width) {
      this.active = 0
    } else {
      this.active = this.active + 1 < this.items.length ? this.active+1 : 0
    }
    
    this.slide()
  }
  
  /**
   * Previous slide
   */
  prev () {
    this.active = this.active - 1 >= 0 ? this.active - 1 : this.items.length
    this.slide()
  }
}
