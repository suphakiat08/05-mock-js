function SimpleApp(service) {
  this.service = service

  this.echo = function(nickname) {
    var firstname = this.service(nickname)
    return `Hello ${firstname}!`
  }
}

module.exports = SimpleApp;
