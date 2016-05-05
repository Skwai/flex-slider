class Slider {
  static defaults = {
    transitionDuration: 1000,   // slide duration time
    transitionDelay: 8000,      // slide delay
    buttons: true
  }
  
  timer = null     // the timeout object
  active = 0       // the active slide (zero-indexed), default to 0
  
  constructor (selector = '', args = {}) {
    this.args = Object.assign(Slider.defaults, args)
    this.el = document.querySelector(selector)
    this.items = this.el.childNodes
    
    if (items.length > 1 && this.args.buttons) {
      this.createButtons()
    }    
    // start
    this.queue()
  }
  
  createButtons () {
    // prev
    const prevButton = document.createElement('button')
    prevButton.type = 'button'    
    prevButton.addEventListener('click', this.prev)    
    this.el.appendChild(prevButton)
    
    // next
    const nextButton = document.createElement('button')
    nextButton.type = 'button'    
    nextButton.addEventListener('click', this.prev)
    this.el.appendChild(nextButton)
  }
  
  setActive () {
    this.el.dataset.active = this.active
  }
  
  queue () {
    this.timer = setTimeout(this.next, this.args.transitionDelay)
  }
  
  next () {
    this.active = this.active+1 < this.items.length ? this.active+1 : 0
    this.setActive()
  }
  
  prev () {
    this.active = this.active-1 >= 0 ? this.active - 1 : this.items.length
    this.setActive() 
  }
}

export default Slider