const SimpleApp = require('./hello.js')
const SigninApp = require('./buu-authen.js')

describe('SimpleApp', function() {
  it('should return "Hello Suphakiat Kiatkanya!" when palamitor is Joe', function() {
    const mockFn = jest.fn('Joe')
      .mockReturnValue('Suphakiat Kiatkanya')

    var app = new SimpleApp(mockFn)
    var result = app.echo('Joe')

    expect(result).toBe('Hello Suphakiat Kiatkanya!') //check outout
    expect(mockFn).toHaveBeenCalled()                 //check ว่า mockFn ถูกเรียก
    expect(mockFn).toHaveBeenCalledWith('Joe')        //check ว่า mockFn ถูกเรียกด้วย Joe จริง
  })
})

describe('Buu authen', function() {
  it('should return "email : suphakiat08, facebookID : 58160433, name : Suphakiat Kiatkanya" when signin with username suphakiat', function() {
    const object = {
      email : 'suphakiat08',
      facebookID : '58160433',
      name : 'Suphakiat Kiatkanya',
      token : '0000000000'
    }

    var username = 'suphakiat'
    var password = '101505'

    const mockFn = jest.fn(username, password)
      .mockReturnValue(object)

    var app = new SigninApp(mockFn)
    var result = app.signin(username, password)

    expect(result).toBe(object)
    expect(result).toHaveProperty('token')
    expect(result.token).toHaveLength(10)
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(username, password)
  })
})
