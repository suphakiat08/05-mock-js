function BuuAuthen(service) {
  this.service = service

  this.signin = function(username, password) {
    return this.service(username, password)
  }
}

module.exports = BuuAuthen;
