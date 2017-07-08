'use strict';

describe('Service: reffirebase', function () {

  // load the service's module
  beforeEach(module('firebaseAngularApp'));

  // instantiate service
  var reffirebase;
  beforeEach(inject(function (_reffirebase_) {
    reffirebase = _reffirebase_;
  }));

  it('should do something', function () {
    expect(!!reffirebase).toBe(true);
  });

});
