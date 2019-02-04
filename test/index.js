const assert = require('assert')
const objToCsv = require('..')

describe('The given function', function () {
  it('Should return empty string, if the input is not defined', function () {
    assert.strictEqual(objToCsv(), '')
  })

  it('Should return empty string, if the input is an empty array', function () {
    const emptyObj = []

    assert.strictEqual(objToCsv(emptyObj), '')
  })

  it('Should return the csv string, for a single object', function () {
    const obj = [
      {
        a: 'a1',
        b: 'b1',
        c: 'c1'
      }
    ]

    const expectedCSV = `a,b,c\na1,b1,c1`

    assert.strictEqual(objToCsv(obj), expectedCSV)
  })

  it('Should return a csv string, for multiple objects', function () {
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

    assert.strictEqual(objToCsv(obj), expectedCSV)
  })

  it('Should return a csv string, for multiple objects with unsorted fields', function () {
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

    assert.strictEqual(objToCsv(obj), expectedCSV)
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

    assert.strictEqual(objToCsv(obj), expectedCSV)
  })
})
