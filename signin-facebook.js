function SimpleApp(service) {
  this.service = service

  this.echo = function(){
    var greet = this.service()
    return `Hello ${greet}!`
  }
}

module.exports = SimpleApp;
