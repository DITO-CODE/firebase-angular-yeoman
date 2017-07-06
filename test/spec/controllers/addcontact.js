'use strict';

describe('Controller: AddcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('firebaseAngularApp'));

  var AddcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcontactCtrl = $controller('AddcontactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddcontactCtrl.awesomeThings.length).toBe(3);
  });
});
