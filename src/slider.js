class Slider {
  static defaults = {
    transitionDelay: 4000,      // slide delay
    buttons: true,
    items: '.slider-item'       // slider items selector
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
    this.items = Array.from(this.el.querySelectorAll(args.items))
    
    // render prev and next buttons
    if (this.items.length > 1 && this.args.buttons) {
      this.createButtons()
    }    
    // start
    this.setActive()
    this.queue()
  }
  
  /**
   * Create the `prev` and `next` buttons
   */
  createButtons () {
    // prev
    const prevButton = document.createElement('button')
    prevButton.type = 'button'    
    prevButton.addEventListener('click', ::this.prev)    
    this.el.appendChild(prevButton)
    
    // next
    const nextButton = document.createElement('button')
    nextButton.type = 'button'    
    nextButton.addEventListener('click', ::this.next)
    this.el.appendChild(nextButton)
  }
  
  /**
   * Set the active data attr 
   */
  setActive () {
    this.el.dataset.active = this.active
  }
  
  /**
   * Queue next
   */
  queue () {
    clearTimeout(this.timer)
    this.timer = setTimeout(::this.next, this.args.transitionDelay)
  }
  
  /**
   * Forward a slide
   */
  next () {
    this.active = this.active+1 < this.items.length ? this.active+1 : 0
    this.setActive()
    this.queue()
  }
  
  /**
   * Back a slide
   */  
  prev () {
    this.active = this.active-1 >= 0 ? this.active - 1 : this.items.length
    this.setActive()
    this.queue()
  }
}

export default Slider