# Roman Numeral Converter

## Description
This project provides a simple web-based Roman Numeral Converter. It converts numbers from Arabic numerals (e.g., 1, 2, 3) to their Roman numeral equivalents (e.g., I, II, III). The application validates user input and ensures it falls within the supported range of 1 to 3999.

## Features
- Input validation to ensure only valid numbers are accepted.
- Conversion from Arabic numerals to Roman numerals.
- User-friendly error messages for invalid input or out-of-range numbers.

## Usage
1. Enter a number into the input field.
2. Click the "Convert" button.
3. The converted Roman numeral will be displayed below the button, or an error message if the input is invalid.

## Input Validation Rules
- **Valid Range:** The number must be between 1 and 3999.
- **Invalid Inputs:** Any non-numeric values or numbers outside the valid range will result in an error message.

## Code Overview

### Main Functionality
- The `convertBtn` listens for the click event.
- Input validation is performed to ensure the entered value is a number within the allowed range.
- The `arabicToRoman` function performs the conversion using a predefined list of Roman numeral mappings.

### Roman Numeral Conversion Logic
The conversion is based on an array of objects where each object maps a Roman numeral to its Arabic value:
```javascript
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
```
The `arabicToRoman` function uses recursion to append Roman numerals while subtracting their values from the input number.

### Error Handling
The code handles three main error cases:
1. **Non-numeric input:** Displays "Please enter a valid number."
2. **Number greater than 3999:** Displays "Please enter a number less than or equal to 3999."
3. **Number less than 1:** Displays "Please enter a number greater than or equal to 1."

## Example
### Input: `1987`
- **Output:** `MCMLXXXVII`

### Input: `-5`
- **Output:** "Please enter a number greater than or equal to 1."

## How to Run
1. Include the HTML, CSS, and JavaScript in your project.
2. Open the HTML file in a browser.
3. Use the input field and convert button to test the functionality.

## Future Improvements
- Add support for Roman numeral to Arabic numeral conversion.
- Provide support for larger numbers if required.

