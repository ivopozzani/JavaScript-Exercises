// definição da função
function CalculateBill(billAmount, taxrate) {
  // corpo da função
  console.log('rodando a função nova');
  const total = billAmount * (1 + taxrate);
  return total;
}
// chamada função
const myTotal = CalculateBill(100, 0.15);
console.log(`O total da refeição foi $${myTotal}`);
console.log(`O total da refeição foi $${CalculateBill(251, 0.14)}`);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Jordana') {
  return `Olá, ${name.toUpperCase()} tudo bem?`;
}

console.log(yell(doctorize('Maria')));
