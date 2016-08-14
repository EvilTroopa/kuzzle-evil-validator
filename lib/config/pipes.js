// Plugin pipes configuration
module.exports = {
  'data:beforeCreate': 'validate',
  'data:beforeUpdate': 'validate',
  'data:beforeCreateOrReplace': 'validate',
  'data:beforeReplace': 'validate',
  'data:beforePublish': 'validate'
}
