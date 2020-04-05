const { RuleTester } = require('eslint')
const rule = require('./rules/rule')

const ruleTester = new RuleTester()

ruleTester.run('no-empty-object-literals', rule, {
  valid: [{
    code: 'var a = { a: 1 }'
  }],
  invalid: [{
    code: 'var a = {}',
    errors: [
      'No empty object literials (`{}`) allowed, use Object.create(null) instead.'
    ]
  }]
})
