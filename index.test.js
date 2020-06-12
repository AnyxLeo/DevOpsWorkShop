var isAna = require('./index');

describe('Test is Ana', function(){
    it('should return true passing Ana', function(){
        expect(isAna('Ana')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isAna('Goolge')).toBeFalsy();
    });
});