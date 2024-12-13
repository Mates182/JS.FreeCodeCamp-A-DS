const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const resultText = document.getElementById('result')

function checkInput(){
    const input = textInput.value
    if (input === ''){
        resultText.innerText = "Please input a value"
    }else if(isPalindrome(input)){
        resultText.innerText = `${input} is a palindrome`
    }else{
        resultText.innerText = `${input} is not a palindrome`
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