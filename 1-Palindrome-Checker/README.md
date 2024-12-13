# Palindrome Checker

This is a simple web application that checks whether a given input is a palindrome. Palindromes are words, phrases, numbers, or other sequences of characters that read the same backward as forward, ignoring spaces, punctuation, and capitalization.

## Features

- Input a string or number to check if it is a palindrome.
- Handles alphanumeric inputs and ignores non-alphanumeric characters.
- Provides immediate feedback via an alert and a displayed result.

## How It Works

1. The user enters a string or number in the input field.
2. When the "Check" button is clicked, the application:
   - Validates the input.
   - Processes the input to remove non-alphanumeric characters and normalizes it to lowercase.
   - Checks if the processed string is the same when reversed.
3. Displays the result in the webpage and shows an alert if no input was provided.

## Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Used to style the application.
- **JavaScript**: Implements the palindrome-checking functionality.


## Usage

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Enter a string or number in the input field.
4. Click the "Check" button to see if the input is a palindrome.

## Example Inputs and Outputs

| Input                | Output                          |
|----------------------|---------------------------------|
| `A man, a plan, a canal, Panama` | `A man, a plan, a canal, Panama is a palindrome` |
| `racecar`            | `racecar is a palindrome`       |
| `hello`              | `hello is not a palindrome`     |
| `12321`              | `12321 is a palindrome`         |
||

## Functions

### `isPalindrome(str)`
- Processes the input string to remove non-alphanumeric characters and normalize it.
- Checks if the processed string reads the same backward and forward.

### `checkInput()`
- Validates user input.
- Calls `isPalindrome` to determine if the input is a palindrome.
- Updates the result text or prompts the user to input a value.

## Event Listeners

- Listens for clicks on the "Check" button to trigger the palindrome-checking process.