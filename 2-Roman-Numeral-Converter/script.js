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
        output.textContent = numberValue
    }
})