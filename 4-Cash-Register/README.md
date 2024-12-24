# Cash Register Application

This application simulates a cash register system, handling the calculation of change and managing the status of the cash drawer.

## Features
- Displays the current contents of the cash drawer ("cid")
- Calculates and displays change for a given purchase price and cash payment
- Handles edge cases like insufficient funds and exact payments
- Manages the status of the cash register (OPEN, CLOSED, or INSUFFICIENT_FUNDS)
- Works in cent values to avoid floating-point precision errors

## Setup and Usage

### HTML Structure
- `cid-list`: Displays the contents of the cash drawer.
- `total-price`: Displays the total price of the item to purchase.
- `purchase-btn`: Button to process the transaction.
- `cash`: Input field for the amount of cash the customer provides.
- `change-due`: Displays the calculated change and status of the transaction.

### JavaScript Logic

#### Key Components

1. **Cash Drawer (`cid`)**
   The `cid` array represents the current contents of the cash register, with each element containing a denomination name and its total value in the drawer.

2. **Price and Input Handling**
   - `price`: The price of the item to be purchased.
   - `cash.value`: The amount of money provided by the customer.

3. **Currency Conversion**
   The `currencyUnitToCents` function converts currency unit names (e.g., PENNY, DIME) to their cent values to simplify calculations.

4. **Register Class**
   - Manages the status of the cash drawer (OPEN, CLOSED, or INSUFFICIENT_FUNDS).
   - Calculates and displays the change due.
   - Updates the drawer status and handles cases like insufficient funds or exact payment.

#### Rounding and Precision Handling
- All monetary calculations are performed in cents to avoid floating-point precision errors.
- Functions like `Math.ceil` ensure proper rounding to avoid issues such as `0.009999 >= 0.01` evaluating to `false`.

### Running the Application
1. Load the application in a browser.
2. Review the cash drawer contents displayed in the `cid-list` element.
3. Enter the amount of cash the customer provides in the `cash` input field.
4. Click the "Purchase" button (`purchase-btn`) to process the transaction.
5. View the status and change due in the `change-due` element.

## Edge Cases
- **Exact Payment:** Displays a message indicating no change is due.
- **Insufficient Funds:** Alerts the user and sets the status to `INSUFFICIENT_FUNDS`.
- **Closed Drawer:** If the change due equals the total cash in the drawer, the status is set to `CLOSED`.

## Example Workflow
1. Item price: $3.26
2. Cash provided: $5.00
3. Cash drawer contents:
   ```
   [
       ['PENNY', 1.01],
       ['NICKEL', 2.05],
       ['DIME', 3.1],
       ['QUARTER', 4.25],
       ['ONE', 90],
       ['FIVE', 55],
       ['TEN', 20],
       ['TWENTY', 60],
       ['ONE HUNDRED', 100]
   ]
   ```
4. Output:
   - Change due:
     - Status: `OPEN`
     - ONE: `$1`
     - QUARTER: `$0.5`
     - DIME: `$0.2`
     - PENNY: `$0.04`

## Improvements

### Refactoring Suggestions
- **Global Variables:**
  - Currently, `cid` and `price` are global variables. This makes it necessary to modify the code directly for testing different cases.
  - Refactor the application to allow these values to be input dynamically through form fields or other interactive UI elements. This would improve flexibility and enable easier testing without code changes.

### Enhanced Testing
- Add input fields for `cid` and `price` in the UI so users can configure them directly and test various scenarios dynamically.
- Include validation for these inputs to ensure values are in the correct format (e.g., non-negative numbers).

### Code Organization
- Modularize functions to improve readability and maintainability. For example:
  - Separate the logic for calculating change into its own utility function.
  - Decouple UI updates from business logic for better reusability.

### Additional Features
- Implement a "reset" button to restore the default values of `cid` and `price`.
- Add a feature to save and load different cash drawer configurations for quick testing.

## License
This project is open source and available for modification or improvement.

