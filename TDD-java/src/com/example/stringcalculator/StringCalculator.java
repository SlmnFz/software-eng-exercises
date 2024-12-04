package com.example.stringcalculator;

import java.util.ArrayList;
import java.util.List;

public class StringCalculator {
    // Tracks the number of times any Add method has been called.
    private int count = 0;

    /**
     * Returns the number of times any Add method has been called.
     * 
     * @return The count of Add method calls.
     */
    public int getCalledCount() {
        return count;
    }

    /**
     * Adds up to two numbers provided as a comma-separated string.
     * 
     * @param numbers A string containing up to two comma-separated numbers.
     * @return The sum of the numbers. Returns 0 if the input is empty.
     * @throws IllegalArgumentException If more than two numbers are provided or if
     *                                  any input is not a number.
     */
    public int addV1(String numbers) {
        count++;
        if (numbers == null || numbers.trim().isEmpty())
            return 0;

        String[] inputs = numbers.split(",");

        if (inputs.length > 2) {
            throw new IllegalArgumentException("The method can only take 0, 1, or 2 numbers.");
        }

        return calculateSum(inputs);
    }

    /**
     * Adds up numbers provided as a comma-separated string.
     * 
     * @param numbers A string containing numbers separated by commas.
     * @return The sum of the numbers. Returns 0 if the input is empty.
     * @throws IllegalArgumentException If any input is not a number.
     */
    public int addV2(String numbers) {
        count++;
        if (numbers == null || numbers.trim().isEmpty())
            return 0;

        String[] inputs = numbers.split(",");

        return calculateSum(inputs);
    }

    /**
     * Adds up numbers provided as a comma-separated or newline-separated string.
     * 
     * @param numbers A string containing numbers separated by commas or newlines.
     * @return The sum of the numbers. Returns 0 if the input is empty.
     * @throws IllegalArgumentException If any input is not a number.
     */
    public int addV3(String numbers) {
        count++;
        if (numbers == null || numbers.trim().isEmpty())
            return 0;

        String[] inputs = numbers.split(",|\\n");

        return calculateSum(inputs);
    }

    /**
     * Adds up numbers with support for custom delimiters.
     * The input format can include a delimiter definition at the start, e.g.,
     * "//[delimiter]\n[numbers...]".
     * 
     * @param numbers A string containing numbers separated by a custom delimiter or
     *                the default delimiter.
     * @return The sum of the numbers. Returns 0 if the input is empty.
     * @throws IllegalArgumentException If the format is invalid or any input is not
     *                                  a number.
     */
    public int addV4(String numbers) {
        count++;
        if (numbers == null || numbers.trim().isEmpty())
            return 0;

        String delimiter = ";";
        String numbersInput = numbers;

        // Check for custom delimiter syntax
        if (numbers.startsWith("//")) {
            String[] parts = numbers.split("\n", 2);
            if (parts.length < 2 || parts[1].isEmpty()) {
                throw new IllegalArgumentException("Invalid format: Custom delimiter must be followed by numbers.");
            }
            delimiter = parts[0].substring(2);
            numbersInput = parts[1];
        }

        String[] inputs = numbersInput.split(delimiter);

        return calculateSum(inputs);
    }

    /**
     * Adds numbers from a string using a custom or default delimiter.
     * Throws an error if negative numbers are present, showing all negatives in the
     * exception message.
     * 
     * The format supports a custom delimiter defined as
     * `//[delimiter]\n[numbers...]`.
     * If no custom delimiter is provided, the default delimiter `;` is used.
     * 
     * @param numbers A string containing numbers separated by a delimiter.
     * @return The sum of the numbers.
     * @throws IllegalArgumentException If the format is invalid, contains
     *                                  non-numeric values, or includes negative
     *                                  numbers.
     */
    public int addV5(String numbers) {
        count++;
        if (numbers == null || numbers.trim().isEmpty())
            return 0;

        String delimiter = ";";
        String numbersInput = numbers;

        // Check for custom delimiter syntax
        if (numbers.startsWith("//")) {
            String[] parts = numbers.split("\n", 2);
            if (parts.length < 2 || parts[1].isEmpty()) {
                throw new IllegalArgumentException("Invalid format: Custom delimiter must be followed by numbers.");
            }
            delimiter = parts[0].substring(2);
            numbersInput = parts[1];
        }

        String[] inputs = numbersInput.split(delimiter);

        List<Integer> values = new ArrayList<>();
        List<Integer> negatives = new ArrayList<>();

        for (String input : inputs) {
            try {
                int num = Integer.parseInt(input.trim());
                if (num < 0)
                    negatives.add(num);
                values.add(num);
            } catch (NumberFormatException e) {
                throw new IllegalArgumentException("All inputs must be valid numbers.");
            }
        }

        if (!negatives.isEmpty()) {
            throw new IllegalArgumentException("Negatives not allowed: " + negatives);
        }

        return values.stream().mapToInt(Integer::intValue).sum();
    }

    /**
     * Helper method to calculate the sum of an array of strings, ensuring all
     * values are numbers.
     * 
     * @param inputs The array of string numbers to sum.
     * @return The sum of the numbers.
     * @throws IllegalArgumentException If any input is not a number.
     */
    private int calculateSum(String[] inputs) {
        int sum = 0;

        for (String input : inputs) {
            try {
                sum += Integer.parseInt(input.trim());
            } catch (NumberFormatException e) {
                throw new IllegalArgumentException("All inputs must be valid numbers.");
            }
        }

        return sum;
    }
}
