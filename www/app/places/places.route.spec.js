describe('places route', function() {

  beforeEach(module('app.places'));

  beforeEach(inject(function(_$rootScope_, _$state_, $templateCache) {
    $rootScope = _$rootScope_;
    $state = _$state_;

    $templateCache.put('app/places/places.html', '');
  }));

  it('should respond to URL', function() {
    expect($state.href('places')).toEqual('#/places');
  });

  it('should activate the state', function() {
    $state.go('places');
    $rootScope.$digest();
    expect($state.current.name).toBe('places');
  });
});
