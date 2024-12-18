const number = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

convertBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let numberValue = number.value
    if(!parseInt(numberValue) && numberValue !== "0"){
        output.textContent = "Please enter a valid number"
    }else if(parseInt(numberValue) > 3999){
        output.textContent = "Please enter a number less than or equal to 3999"
    }else if(parseInt(numberValue) <= 0){
        output.textContent = "Please enter a number greater than or equal to 1"
    }
    else{
        output.textContent = arabicToRoman(numberValue)
    }
})

const nummerals = [
    { roman: "M", arabic: 1000 },
    { roman: "CM", arabic: 900 },
    { roman: "D", arabic: 500 },
    { roman: "CD", arabic: 400 },
    { roman: "C", arabic: 100 },
    { roman: "XC", arabic: 90 },
    { roman: "L", arabic: 50 },
    { roman: "XL", arabic: 40 },
    { roman: "X", arabic: 10 },
    { roman: "IX", arabic: 9 },
    { roman: "V", arabic: 5 },
    { roman: "IV", arabic: 4 },
    { roman: "I", arabic: 1 }
];

function arabicToRoman(arabicNum){
    if(arabicNum > 0){
        for(const nummeral of nummerals){
            if(arabicNum >= nummeral.arabic){
                return nummeral.roman + arabicToRoman(arabicNum-nummeral.arabic)
            }
        }
    }else{
        return ''
    }
}