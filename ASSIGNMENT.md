# json-to-csv-kata

Create a csv string starting from a JSON object

## Requirements

Make it simple: the given json is an array of object with `property -> value` only with values as **strings** 

e.g.

```
const json = [{
  field1: 'field1Value',
  field2: 'field2Value',
  field3: 'field3Value'
}]

jsonToCSV(json) => 'field1,field2,field3\nfield1Value,field2Value,field3Value'
```

## TDD
See tests for more information