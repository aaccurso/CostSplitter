describe('Hello Message', function() {
  
  it('should contain hello', function() {
    var message = 'hello world test';
    dump(message);
    expect(message).toContain('hello');
  });

});

