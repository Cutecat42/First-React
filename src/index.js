import {choice} from './helpers';
import fruits from './foods';

const randomFruit = choice(fruits())
console.log(`I’d like one ${randomFruit}, please.`)