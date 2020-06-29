const expect = require('chai').expect;
const addUtility = require('../add.js');

describe('Add',function(){
	describe('addUtility', function(){
		it('should have a sum method', function(){
			expect(addUtility).to.be.an('object')
			expect(addUtility).to.have.property('sum')
		})
		it('addUtility.sum(4,2) should return 10',function(){
			expect(addUtility.sum(6,4)).to.deep.equal(10)
		})
		it('addUtility.sum(100,22) should return 122',function(){
			expect(addUtility.sum(100,22)).to.deep.equal(122)
		})
		
	});
});