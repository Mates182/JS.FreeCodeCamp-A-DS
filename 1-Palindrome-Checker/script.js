const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const resultText = document.getElementById('result')

function checkInput(){
    const input = textInput.value
    if(isPalindrome(input)){
        resultText.innerText = `${input} is a palindrome`
    }else if (input === ''){
        resultText.innerText = "Please input a value"
    }
}

function isPalindrome(str){
    str = str.toLowerCase()
    let tempStr = ''
    for(let i = str.length-1; i >= 0; i--){
        tempStr += str[i]
    }
    return str === tempStr
}

checkButton.addEventListener('click', checkInput)