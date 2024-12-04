/**
 * A simple string calculator class that adds numbers provided as a comma-separated, 
 * newline-separated, or custom-delimited string.
 */
class StringCalculator {
    /**
    * @private
    * @type {number}
    * @description Tracks the number of times any Add method has been called.
    */
    #count = 0;

    /**
     * Returns the number of times any Add method has been called.
     * 
     * @returns {number} The count of Add method calls.
     */
    GetCalledCount() {
        return this.#count;
    }

    /**
     * Adds up to two numbers provided as a comma-separated string.
     * 
     * @param {string} numbers - A string containing up to two comma-separated numbers.
     * @returns {number} The sum of the numbers. Returns 0 if the input is empty.
     * @throws {Error} If more than two numbers are provided or if any input is not a number.
     */
    AddV1(numbers) {
        this.#count++;
        if (!numbers || numbers.trim() === '') return 0;

        const inputs = numbers.split(",");

        if (inputs.length > 2) {
            throw new Error("The method can only take 0, 1, or 2 numbers.");
        }

        return this._calculateSum(inputs);
    }

    /**
     * Adds up numbers provided as a comma-separated string.
     * 
     * @param {string} numbers - A string containing numbers separated by commas.
     * @returns {number} The sum of the numbers. Returns 0 if the input is empty.
     * @throws {Error} If any input is not a number.
     */
    AddV2(numbers) {
        this.#count++;
        if (!numbers || numbers.trim() === '') return 0;

        const inputs = numbers.split(",");

        return this._calculateSum(inputs);
    }

    /**
     * Adds up numbers provided as a comma-separated or newline-separated string.
     * 
     * @param {string} numbers - A string containing numbers separated by commas or newlines.
     * @returns {number} The sum of the numbers. Returns 0 if the input is empty.
     * @throws {Error} If any input is not a number.
     */
    AddV3(numbers) {
        this.#count++;
        if (!numbers || numbers.trim() === '') return 0;

        const inputs = numbers.split(/,|\n/);

        return this._calculateSum(inputs);
    }

    /**
      * Adds up numbers with support for custom delimiters.
      * The input format can include a delimiter definition at the start, e.g., "//[delimiter]\\n[numbers...]".
      * 
      * @param {string} numbers - A string containing numbers separated by a custom delimiter or the default delimiter.
      * @returns {number} The sum of the numbers. Returns 0 if the input is empty.
      * @throws {Error} If any input is not a number.
      */
    AddV4(numbers) {
        this.#count++;
        if (!numbers || numbers.trim() === '') return 0;

        let delimiter = ";";
        let numbersInput = numbers;

        // Check for custom delimiter syntax
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            if (parts.length < 2) {
                throw new Error("Invalid format: Custom delimiter must be followed by numbers.");
            }
            delimiter = parts[0].slice(2) || delimiter; // Extract the delimiter after '//' or use default
            numbersInput = parts[1];
        }

        const inputs = numbersInput.split(delimiter); // Only split by the custom delimiter or default ';'

        return this._calculateSum(inputs);
    }

    /**
     * Adds numbers from a string using a custom or default delimiter. 
     * Throws an error if negative numbers are present, showing all negatives in the exception message.
     * 
     * The format supports a custom delimiter defined as `//[delimiter]\n[numbers...]`.
     * If no custom delimiter is provided, the default delimiter `;` is used.
     * 
     * @param {string} numbers - A string containing numbers separated by a delimiter.
     * @returns {number} The sum of the numbers.
     * @throws {Error} If the format is invalid, contains non-numeric values, or includes negative numbers.
     */
    AddV5(numbers) {
        this.#count++;
        if (!numbers || numbers.trim() === '') return 0;

        let delimiter = ";";
        let numbersInput = numbers;

        // Check for custom delimiter syntax
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            if (parts[1] === '') {
                throw new Error("Invalid format: Custom delimiter must be followed by numbers.");
            }
            delimiter = parts[0].slice(2) || delimiter; // Extract the delimiter after '//' or use default
            numbersInput = parts[1];
        }

        const inputs = numbersInput.split(delimiter); // Only split by the custom delimiter or default ';'

        // Check for invalid numbers
        const hasInvalidInput = inputs.some(value => isNaN(value));
        if (hasInvalidInput) {
            throw new Error("All inputs must be valid numbers.");
        }

        // Convert strings to numbers
        const values = inputs.map(Number);

        // Check for negatives
        const negatives = values.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
        }

        return this._calculateSum(values);
    }

    /**
     * Helper method to calculate the sum of an array of strings, ensuring all values are numbers.
     * 
     * @private
     * @param {string[]} inputs - The array of string numbers to sum.
     * @returns {number} The sum of the numbers.
     * @throws {Error} If any input is not a number.
     */
    _calculateSum(inputs) {
        // Check if all inputs are valid numbers
        const hasInvalidInput = inputs.some(value => isNaN(value));
        if (hasInvalidInput) {
            throw new Error("All inputs must be valid numbers.");
        }

        // Convert the input strings to numbers and sum them
        return inputs.map(Number).reduce((total, num) => total + num, 0);
    }
}

module.exports = StringCalculator;
