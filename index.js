function validateCred(cardDigits) {
      const digitsCopy = [...cardDigits];
      let sum = 0;
      let alternate = false;

      for (let i = digitsCopy.length - 1; i >= 0; i--) {
        let digit = parseInt(digitsCopy[i], 10);

        if (alternate) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }

        sum += digit;
        alternate = !alternate;
      }

      return sum % 10 === 0;
    }

    function validateCreditCard() {
      const creditCardNumberInput = document.getElementById('creditCardNumber');
      const validationResult = document.getElementById('validationResult');

      const creditCardNumber = creditCardNumberInput.value
        .replace(/\D/g, '')
        .split('')
        .map(Number);

      const isValid = validateCred(creditCardNumber);

      if (isValid) {
        validationResult.textContent = 'Valid credit card number!';
      } else {
        validationResult.textContent = 'Invalid credit card number.';
      }
    }
