let price = 3.26;
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
const purchaseBtn = document.getElementById('purchase-btn')
const cash = document.getElementById('cash')
const changeDue = document.getElementById('change-due')

total.textContent = price
cid.forEach(amount => {
    cidList.innerHTML += `<li>${amount[0]}: \$${amount[1]}</li>`
})

const currencyUnitToAmmount = currency => {
    switch (currency) {
        case 'PENNY':
            return 1
        case 'NICKEL':
            return 5;
        case 'DIME':
            return 10;
        case 'QUARTER':
            return 25;
        case 'ONE':
            return 100;
        case 'FIVE':
            return 500;
        case 'TEN':
            return 1000;
        case 'TWENTY':
            return 2000;
        case 'ONE HUNDRED':
            return 10000;
        default:
            return 0;
    }
}

class Register {
    constructor() {
        this.status = {
            open: 'OPEN',
            closed: 'CLOSED',
            insufficientFounds: 'INSUFFICIENT_FUNDS'
        }
    }

    setStatus(status){
        changeDue.innerHTML = `<p>Status: ${status}</p>`
    }

    drawChange(itemPrice) {
        let cashValue = parseFloat(cash.value)
        if (cashValue < itemPrice) {
            alert('Customer does not have enough money to purchase the item')
            changeDue.textContent = 'Customer does not have enough money to purchase the item'
        } else if (cashValue == itemPrice) {
            changeDue.textContent = 'No change due - customer paid with exact cash'
        } else {
            cashValue = Math.ceil(cashValue * 100)
            cashValue -= itemPrice * 100
            cashValue = Math.ceil(cashValue)
            const totalFounds = Math.ceil(cid.reduce((acc, el) => acc + el[1], 0) * 100)
            if (cashValue > this.totalFounds) {
                this.setStatus(this.status.insufficientFounds)
            } else {

                this.setStatus(cashValue == totalFounds ? this.status.closed : this.status.open)

                let reverseCid = [...cid].reverse()

                reverseCid.forEach(change => {
                    change[1] = Math.ceil(change[1] * 100)
                    const changeCurrency = currencyUnitToAmmount(change[0])
                    if (cashValue >= changeCurrency) {
                        let changeAmount = 0;
                        while (cashValue >= changeCurrency && changeAmount < change[1]) {
                            cashValue -= changeCurrency
                            cashValue = Math.ceil(cashValue)

                            changeAmount += changeCurrency
                            changeAmount = Math.ceil(changeAmount)
                        }
                        if (changeAmount > 0) {
                            changeDue.innerHTML += `<p>${change[0]}: \$${changeAmount / 100}<p>`
                        }
                    }
                })
                if (cashValue !== 0) {
                    this.setStatus(this.status.insufficientFounds)
                }
            }
        }
        cash.value = ''
    }
}

const register = new Register()

purchaseBtn.addEventListener('click', e => {
    e.preventDefault()
    register.drawChange(price)
})