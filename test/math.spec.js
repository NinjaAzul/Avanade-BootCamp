const assert = require('assert');
const Math = require('../src/Math/Math');
const expect = require('chai').expect;
const sinon = require('sinon');


let value = 0;


describe('Math class', function () {

  beforeEach(function () {
    let value = 0;
  })

  it('Sum two numbers', function (done) {
    const math = new Math();
    this.timeout(3000);

    value = 5;

    math.sum(value, 5, value => {
      expect(value).to.equal(10);
      done();
    })


  });

  //methods
  it("Multiply two numbers", function () {

    const math = new Math();
    const obj = {
      name: "ericl Freitas"
    };
    const obj2 = {
      name: "ericl Freitas"
    };
    //verifica objs
    expect(obj).to.deep.equal(obj2);

    // expect(obj).to.have
    //   .property('name')
    //   .equal('ericl Freitas');

    value = 5;

    expect(math.multiply(value, 5)).to.equal(25);
  });


  it.only('Calls request with Sum and index values', function () {
    const request = {};
    const response = {
      load: function load(){
        console.log("Called");
      }
    };

    sinon.stub(response, 'load').returns('xpto');

    const math = new Math();

    math.printSum(request, response, 5, 5);

    expect(response.load.args[0][1]).to.equal(10);
  })
});