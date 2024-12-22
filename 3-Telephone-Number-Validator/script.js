const input = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const results = document.getElementById('results-div')

const phoneRegexList = [
    /^(1\s)?((\d{3})(-|\s)?){2}(\d{4})$/,
    /^1?\((\d){3}\)(\d){3}-(\d){4}$/,
    /^1\s\((\d){3}\)\s(\d){3}-(\d){4}$/,
]

const validatePhoneNum = phoneNum => phoneRegexList.some(regex => regex.test(phoneNum))


checkBtn.addEventListener('click', e => {
    e.preventDefault()
    const inputValue = input.value
    if (inputValue === '') {
        alert('Please provide a phone number')
    }
    else{
        const result = document.createElement('div')
        if(validatePhoneNum(inputValue)){
            result.className = 'result-valid'
            result.innerText = `Valid US number: ${inputValue}`
        }else{
            result.className = 'result-invalid'
            result.innerText = `Invalid US number: ${inputValue}`
        }
        results.appendChild(result)
    }

    input.value = ''
})

clearBtn.addEventListener('click', e => {
    e.preventDefault()
    results.innerHTML = '';
})