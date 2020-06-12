var isAna = require('./index');

describe('Test is Ana', function(){
    it('should return true passing Ana', function(){
        expect(isGeo('Geo')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isGeo('Goolge')).toBeFalsy();
    });
});