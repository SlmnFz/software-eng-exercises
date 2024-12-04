package com.example.stringcalculator;

public class Main {
    public static void main(String[] args) {
        StringCalculator calculator = new StringCalculator();

        System.out.println("AddV1: " + calculator.addV1("1,2")); // Should print 3
        System.out.println("AddV2: " + calculator.addV2("1,2,3")); // Should print 6
        System.out.println("AddV3: " + calculator.addV3("1\n2,3")); // Should print 6
        System.out.println("AddV4: " + calculator.addV4("//;\n1;2;3")); // Should print 6
        try {
            System.out.println("AddV5: " + calculator.addV5("//;\n1;2;-3")); // Should throw an error
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
