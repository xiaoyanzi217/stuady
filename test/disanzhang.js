function Circle(x,y,z){

	function Z_squared(){
		return Math.pow(z,2);
	}

	function area(){
	    return Math.PI * Z_squared()
	}

	return {
		area:area
	};
}
console.log(Circle);
module.exports = Circle;

var myModule = require('/home/pedro/my_module/my_module');
var myModule = require('my_module/my_module');
var myModule = require('./lib/my_module');
var myModule = require('./myMmoduleDir');
var myModule = require('./myMmodule.js');

console,log('module my_module initiakizing……');
module.exports = function () {
	console.log('Hi!');
	// body...
}
console.log('my_module initiakized.');

var myModuleInstancel = require('./my_module'); 

var myModuleInstance1 = require('./my_module'); 
var myModuleInstance12= require('./my_module'); 
