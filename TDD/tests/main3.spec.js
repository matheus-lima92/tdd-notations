/*

var expect = require('chai').expect;

describe('Main', function() {
  //define variaveis fora dos hooks
  var arr; 

  // roda uma vez, antes do bloco
  before(function() {
    // inicia uma conexão no banco, por exemplo ou
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(function() {
    // fecha conexão do banco por exemplo ou 
    // apagar esse conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function() {
    //assegura mesmo valor do array antes de cada teste
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(function() {

  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', function(){
    expect(arr).to.be.an('array');
  })

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
    //expect(arr).to.have.lengthOf(3); ver erro gerado se mudarmos length esperado
  });

  it('should remove the value 3 when use pop in the array', function() {
    arr.pop()
    expect(arr).to.not.include(3);
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2)
  });

});

// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after

*/