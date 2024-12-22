const input = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const results = document.getElementById('results-div')

checkBtn.addEventListener('click', e => {
    e.preventDefault()
    const inputValue = input.value
    if (inputValue === '') {
        alert('Please provide a phone number')
    }

    input.value = ''
})

clearBtn.addEventListener('click', e => {
    e.preventDefault()
    results.innerHTML = '';
})