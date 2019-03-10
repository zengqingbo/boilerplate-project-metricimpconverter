/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32L';
      assert.typeOf(convertHandler.getNum(input), 'number');
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '3/2L';
      assert.isOk(convertHandler.getNum(input), 'Fractional input is ok');     
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '3/L';
      assert.isOk(convertHandler.getNum(input), 'Fractional input w/ is ok');   
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/2/2L';
      assert.equal(convertHandler.getNum(input), 'invalid number');   
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'L';
      assert.equal(convertHandler.getNum(input), 'invalid number'); 
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        let input = '11'+ele
        assert.equal(ele, convertHandler.getUnit(input), ele+' is ok');
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = '11NK'
      assert.equal(convertHandler.getUnit(input), 'invalid unit')
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallon','liter','mile','Kilometer','pounds','kilogram'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.3210;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance    
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [1000, 'Mi'];
      var expected = 1;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance       
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [1, 'Km'];
      var expected = 1000;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [1, 'Lbs'];
      var expected = 0.454;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance     
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [1, 'Kg'];
      var expected =  2.205;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance       
      done();
    });
    
  });

});
