const input_type = value =>
  (value.trim().length === 0 || isNaN(value)) ? 'string' :
  Number.isInteger(+value) ? 'integer' : 'double';