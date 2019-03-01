module.exports = {
  objToCSV,
  getColumnsName
}

function objToCSV(obj) {
  if (!obj || !obj.length) {
    return ''
  }

  const columns = getColumnsName(obj)
  const rows = obj.map(obj => getRowFromObject(columns, obj)).join('\n')

  return `${columns}\n${rows}`
}

function getRowFromObject(columns, obj) {
  return columns.map(c => obj[c]).join(',')
}

function getColumnsName(obj) {
  if (!obj) {
    return []
  }

  const columnsName = obj.reduce((columns, obj) => {
    const currentObjectColumnsName = Object.keys(obj)

    const filteredCurrentColumns = currentObjectColumnsName.filter(colName => !columns.includes(colName))

    columns.push(...filteredCurrentColumns)

    return columns
  }, [])

  return columnsName
}