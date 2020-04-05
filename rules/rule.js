const message = 'No empty object literials (`{}`) allowed, use Object.create(null) instead.'

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  create (context) {
    return {
      ObjectExpression (/** @type {import('estree').ObjectExpression} */node) {
        if (node.properties.length === 0) {
          context.report({ message, node })
        }
      }
    }
  },
  meta: {
    type: 'suggestion'
  }
}
