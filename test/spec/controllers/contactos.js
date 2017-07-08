'use strict';

describe('Controller: ContactosCtrl', function () {

  // load the controller's module
  beforeEach(module('firebaseAngularApp'));

  var ContactosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactosCtrl = $controller('ContactosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactosCtrl.awesomeThings.length).toBe(3);
  });
});
