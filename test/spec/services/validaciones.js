'use strict';

describe('Service: validaciones', function () {

  // load the service's module
  beforeEach(module('firebaseAngularApp'));

  // instantiate service
  var validaciones;
  beforeEach(inject(function (_validaciones_) {
    validaciones = _validaciones_;
  }));

  it('should do something', function () {
    expect(!!validaciones).toBe(true);
  });

});
