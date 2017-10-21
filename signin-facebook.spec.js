const SimpleApp = require('./signin-facebook.js')

test('Simple Mock', function() {
  const mockFn = jest.fn().mockReturnValue('world')

  var app = new SimpleApp(mockFn)
  var result = app.echo()

  expect(result).toBe('Hello world!')
  expect(mockFn).toHaveBeenCalled()
})
