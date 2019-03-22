module.exports = {
  objToCSV,
  getColumnsName
}

function objToCSV(arrayOfObjects) {
  if (!arrayOfObjects || !arrayOfObjects.length) {
    return ''
  }

  const columns = getColumnsName(arrayOfObjects)
  const rows = arrayOfObjects.map(obj => getRowFromObject(columns, obj)).join('\n')

  return `${columns}\n${rows}`
}

function getRowFromObject(columns, obj) {
  return columns.map(c => obj[c]).join(',')
}

function getColumnsName(arrayOfObjects) {
  if (!arrayOfObjects || !arrayOfObjects.length) {
    return []
  }

  const columnsName = arrayOfObjects.reduce((columns, obj) => {
    return Object
      .keys(obj)
      .reduce((columns, key) => {
        columns.add(key)
        return columns
      }, columns)

  }, new Set())

  return Array.from(columnsName)
}