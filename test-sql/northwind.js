if(typeof exports == 'object') {
	var alasql = require('../dist/alasql.js');
}

function a(filename) {
	it(filename,function(done){
		alasql('SOURCE "northwind/'+filename+'"');
		done();
	});
};

describe('Northwind database',function(){
//	it('1. Setup',function(done){
		this.timeout(10000);
		alasql('CREATE DATABASE Northwind; USE Northwind');
//		alasql('SOURCE "northwind/Northwind.sql"');
		a('n01.sql');
	// 	done();
	// });
	// it('2. Setup',function(done){
	// 	this.timeout(10000);
/*
		a('n02.sql');
	// 	done();
	// });
	// it('3. Setup',function(done){
	// 	this.timeout(10000);
		a('n03.sql');
	// 	done();
	// });
	// it('4. Setup',function(done){
	// 	this.timeout(10000);
		a('n04.sql');
	// 	done();
	// });
	// it('5. Setup',function(done){
	// 	this.timeout(10000);
		a('n05.sql');
	// 	done();
	// });
	// it('6. Setup',function(done){
	// 	this.timeout(10000);
		a('n06.sql');
	// 	done();
	// });
	// it('7. Setup',function(done){
	// 	this.timeout(10000);
		a('n07.sql');
	// 	done();
	// });
	// it('8. Setup',function(done){
	// 	this.timeout(10000);
		a('n08.sql');
//		done();
	// });
*/

});
