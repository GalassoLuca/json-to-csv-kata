const objToCsv = (obj) => {
  const columns = Object.keys(obj[0]).join(',')
  const rows = obj.map(obj => Object.values(obj).join(',')).join('\n')
  return `${columns}\n${rows}`
}

const obj = [
  {
    a: 'a1',
    b: 'b1',
    c: 'b1'
  }, {
    a: 'a2',
    b: 'b2',
    c: 'b2'
  }, {
    b: 'b3',
    a: 'a3',
    c: 'b3'
  }
]

const csv = {
  expected: `a,b,c\na1,b1,b1\na2,b2,b2\na3,b3,b3`,
  received: objToCsv(obj)
}

if (csv.expected !== csv.received) {
  console.log(csv)
} else {
  console.log('AWESOME!!!')
}
