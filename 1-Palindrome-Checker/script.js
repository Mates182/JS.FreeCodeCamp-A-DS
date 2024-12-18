const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const resultText = document.getElementById('result')

function checkInput(){
    const input = textInput.value
    if (input === ''){
        resultText.innerText = "Please input a value"
        alert("Please input a value")
    }else{
        resultText.innerText = `${input} is ${isPalindrome(input)?'': 'not'} a palindrome`
    }
}

function isPalindrome(str){
    str = str.toLowerCase()
    let formatedStr = ''
    const regex = /[a-z]|\d/
    for(const char of str){
        if(char.match(regex)){
            formatedStr+=char
        }
    }

    let tempStr = ''
    for(let i = formatedStr.length-1; i >= 0; i--){
        tempStr += formatedStr[i]
    }
    return formatedStr === tempStr
}

checkButton.addEventListener('click', checkInput)