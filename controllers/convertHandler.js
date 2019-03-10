/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const regexp = /^([0-9/]*)(\w*)$/i
  const unitInput = ['gal','l','mi','km','lbs','kg'];
  const unitOutput = ['l','gal','km','mi','kg','lbs'];
  const spellOut = ['gallon','liter','mile','Kilometer','pounds','kilogram'];
  const toScale = [3.78541, 0.26417, 1.60934, 0.62137, 0.453592, 2.20462];
  
  this.getNum = function(input) {
    var result;
    let group = input.match(regexp);
    if ( group && group[1]!='' && ! /\/.*\//.test(group[1]) ) {
      result = group[1];
    } else {
      result = 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let group = input.match(regexp);
    if (group && group[2] !='' && unitInput.indexOf(group[2].toLowerCase()) >= 0) {
      result = group[2];
    } else {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    result = unitOutput[unitInput.indexOf(initUnit.toLowerCase())]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = spellOut[unitInput.indexOf(unit.toLowerCase())]
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    let scale = toScale[unitInput.indexOf(initUnit.toLowerCase())];
    result = initNum*scale;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initUnit == 'invalid unit') {
      result = 'invalid unit';
    } else if (initNum == 'invalid number')  {
      result = 'invalid number';
    } else if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      result = 'invalid number and unit';
    } else {
      result = initNum + ' ' + initUnit + (initNum == 1)?'':'s' + ' converts to ' + returnNum.toFixed(5) + returnUnit+'s';
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
