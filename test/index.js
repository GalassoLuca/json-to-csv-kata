const assert = require('assert')
const objToCsv = require('../index')

describe('The given function', function () {
  it('Should return empty string if the input is not defined', function () {
    assert.strictEqual(objToCsv(), '')
  })

  it('Should return empty string if the input is an empty object', function () {
    const emptyObj = {}

    assert.strictEqual(objToCsv(emptyObj), '')
  })

  it('Should return a csv string of the given input', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }, {
        a: 'a2',
        b: 'b2',
        c: 'c2'
      }, {
        a: 'a3',
        b: 'b3',
        c: 'c3'
      }
    ]

    const expectedCSV = `a,b,c\na1,b1,c1\na2,b2,c2\na3,b3,c3`

    assert.strictEqual(objToCsv(obj), expectedCSV)
  })
})
