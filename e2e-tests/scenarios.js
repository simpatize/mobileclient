'use strict';

describe('MobileClient', function() {

  it('should automatically redirect to /search when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/search");
  });

});
