import soma from './calc.js';
import Heading from './components/heading.js';

console.log("Testando o webpack");

soma(10, 20);
soma(2, 3);

//loaders
const heading = new Heading();

heading.create("Esse título é dinamico ✔");
heading.create("carregamento rapido ✔")