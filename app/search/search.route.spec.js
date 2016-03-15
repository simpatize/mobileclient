describe('search route', function() {
  var $state;
  var $rootScope;
  
  beforeEach(module('app.places'));
  beforeEach(module('app.search'));

  beforeEach(inject(function(_$rootScope_, _$state_, $templateCache) {
    $rootScope = _$rootScope_;
    $state = _$state_;

    $templateCache.put('app/search/search.html', '');
  }));

  it('should respond to URL', function() {
    expect($state.href('search')).toEqual('#/search');
  });

  it('should activate the state', function() {
    $state.go('search');
    $rootScope.$digest();
    expect($state.current.name).toBe('search');
  });
});
