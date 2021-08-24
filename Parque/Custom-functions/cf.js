// definição da função
function CalculateBill() {
  // corpo da função
  console.log('rodando a função nova');
  const total = 53 * 1.3;
  return total;
}
// chamada função
const myTotal = CalculateBill();
console.log(`O total da refeição foi $${myTotal}`);
console.log(`O total da refeição foi $${CalculateBill()}`);
