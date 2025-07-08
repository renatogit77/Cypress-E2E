
import './commands'

console.log('🔧 e2e.js foi carregado!')

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'id', 'class', 'attributes', 'data-cy',
    'data-test', 'data-testid', 'tag', 'nth-child'
  ]
})
