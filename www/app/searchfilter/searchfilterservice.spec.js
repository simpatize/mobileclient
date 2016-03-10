describe('searchfilterService', function() {
  var httpBackend, filterService;
  beforeEach(module('app.searchfilter'));

  beforeEach(inject(function($httpBackend, searchfilterService) {
		httpBackend = $httpBackend;
		filterService = searchfilterService;
	}));

  it('should be registered', function() {
    expect(filterService).not.toEqual(null);
  });

  it('should have empty object as filter by default', function() {
		expect(filterService.getFilter()).toEqual({});
	});

  it('should update filter', function() {
    filterService.filter = {};

    filterService.setFilter({type: 'restaurante'});

		expect(filterService.getFilter()).toEqual({type: 'restaurante'});
	});
})
