let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cidList = document.getElementById('cid-list')
const total = document.getElementById('total-price')

total.textContent = price
cid.forEach(amount =>{
    cidList.innerHTML += `<li>${amount[0]}: \$${amount[1]}</li>`
})

