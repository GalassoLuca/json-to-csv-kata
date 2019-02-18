const assert = require('assert')
const {objToCSV, getRows} = require('..')

describe('objToCSV()', function () {
  it('Should return empty array, if the input is not defined', function () {
    assert.strictEqual(objToCSV(), [])
  })

  it('Should return empty array, if the input is empty array', function () {
    const obj = {}
    assert.strictEqual(objToCSV(obj), [])
  })

  it('Should return correct array, for a simple given array', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }
    ]
    assert.strictEqual(objToCSV(), ['a', 'b', 'c'])
  })

  it('Should return correct array, for objects with different keys', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }, {
        x: 'x2',
        y: 'y2',
        z: 'z2'
      }
    ]
    assert.strictEqual(objToCSV(), ['a', 'b', 'c'])
  })
})

describe('objToCSV()', function () {
  it('Should return empty string, if the input is not defined', function () {
    assert.strictEqual(objToCSV(), '')
  })

  it('Should return empty string, if the input is an empty array', function () {
    const emptyObj = []

    assert.strictEqual(objToCSV(emptyObj), '')
  })

  it('Should return the CSV string, for a single object', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }
    ]

    const expectedCSV = `a,b,c\na1,b1,c1`

    assert.strictEqual(objToCSV(obj), expectedCSV)
  })

  it('Should return a CSV string, for multiple objects', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }, {
        a: 'a2',
        b: 'b2',
        c: 'c2'
      }
    ]

    const expectedCSV = `a,b,c\na1,b1,c1\na2,b2,c2`

    assert.strictEqual(objToCSV(obj), expectedCSV)
  })

  it('Should return a CSV string, for multiple objects with unsorted fields', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }, {
        c: 'c2',
        b: 'b2',
        a: 'a2'
      }
    ]

    const expectedCSV = `a,b,c\na1,b1,c1\na2,b2,c2`

    assert.strictEqual(objToCSV(obj), expectedCSV)
  })

  it('Should return a CSV string, handling missing fields', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }, {
        x: 'x2',
        y: 'y2',
        z: 'z2'
      }
    ]

    const expectedCSV = `a,b,c,x,y,z\na1,b1,c1,,,\n,,,x2,y2,z2`

    assert.strictEqual(objToCSV(obj), expectedCSV)
  })
})
