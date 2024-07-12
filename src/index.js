
import 'core-js/modules/es.object.values.js'
import sum from './utils.js'
import './styles/style.css'
import './styles/style.scss'
import domHandler from './dom.js'

domHandler();
console.log(sum(2, 3));

// ES6 Spread Operator
const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)