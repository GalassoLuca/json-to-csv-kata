module.exports = {
  objToCSV,
  getColumnsName
}

function objToCSV(obj) {
  if (!obj) {
    return ''
  }

  const columns = Object.keys(obj[0]).join(',')
  const rows = obj.map(obj => Object.values(obj).join(',')).join('\n')
  return `${columns}\n${rows}`
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