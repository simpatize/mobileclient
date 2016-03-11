describe('searchfilterService', function() {
  var filterService;
  beforeEach(module('app.searchfilter'));

  beforeEach(inject(function(searchfilterService) {
		filterService = searchfilterService;
	}));

  it('should be registered', function() {
    expect(filterService).not.toEqual(null);
  });

  it('should have empty object as filter by default', function() {
		expect(filterService.getFilter()).toEqual({});
	});

  it('should update filter', function() {
    filterService.setFilter({type: 'restaurante'});

		expect(filterService.getFilter()).toEqual({type: 'restaurante'});
	});
  
})
