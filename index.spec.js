const objToCsv = require('./index')

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

const csv = {
  expected: `a,b,c\na1,b1,c1\na2,b2,c2\na3,b3,c3`,
  received: objToCsv(obj)
}

if (csv.expected !== csv.received) {
  console.log(csv)
} else {
  console.log('AWESOME!!!')
}
