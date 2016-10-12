(function (gloable) {
  var noop = function () {}

  function Main(opts) {
    if(!(this instanceof Main)){
      return new Main(opts)
    }
    Object.assign(this, opts)
    this._init()
  }
  Main.prototype = {
    _init:function () {
      this.init()
      this.render()
      this.registerEvent()
    },
    init: noop,
    registerEvent: noop,
    render: noop
  }

  gloable.Main = Main
})(window)
