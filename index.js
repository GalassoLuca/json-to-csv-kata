module.exports = (obj) => {
  if (!obj) {
    return ''
  }

  const columns = Object.keys(obj[0]).join(',')
  const rows = obj.map(obj => Object.values(obj).join(',')).join('\n')
  return `${columns}\n${rows}`
}
