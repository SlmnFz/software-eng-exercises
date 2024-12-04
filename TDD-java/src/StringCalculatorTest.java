import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.example.stringcalculator.StringCalculator;

public class StringCalculatorTest {

    private StringCalculator calculator;

    @Before
    public void setUp() {
        calculator = new StringCalculator();
    }

    @Test
    public void testAddV1ShouldReturnZeroWhenInputIsUndefined() {
        assertEquals(0, calculator.addV1(null));
    }

    @Test
    public void testAddV1ShouldReturnZeroWhenInputIsEmptyString() {
        assertEquals(0, calculator.addV1(""));
    }

    @Test
    public void testAddV1ShouldReturnNumberWhenInputHasOneNumber() {
        assertEquals(1, calculator.addV1("1"));
    }

    @Test
    public void testAddV1ShouldReturnSumOfTwoNumbers() {
        assertEquals(6, calculator.addV1("1,5"));
    }

    @Test
    public void testAddV1ShouldThrowErrorWhenMoreThanTwoNumbersProvided() {
        try {
            calculator.addV1("1,2,5");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("The method can only take 0, 1, or 2 numbers.", e.getMessage());
        }
    }

    @Test
    public void testAddV1ShouldThrowErrorWhenInputContainsNonNumericValues() {
        try {
            calculator.addV1("x,2");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("All inputs must be valid numbers.", e.getMessage());
        }
    }

    @Test
    public void testAddV1ShouldHandleWhitespaceGracefully() {
        assertEquals(3, calculator.addV1(" 1 , 2 "));
    }

    @Test
    public void testAddV2ShouldReturnZeroWhenInputIsUndefined() {
        assertEquals(0, calculator.addV2(null));
    }

    @Test
    public void testAddV2ShouldReturnZeroWhenInputIsEmptyString() {
        assertEquals(0, calculator.addV2(""));
    }

    @Test
    public void testAddV2ShouldReturnNumberWhenInputHasOneNumber() {
        assertEquals(1, calculator.addV2("1"));
    }

    @Test
    public void testAddV2ShouldReturnSumOfNumbers() {
        assertEquals(6, calculator.addV2("1,5"));
        assertEquals(22, calculator.addV2("1,5,7,9"));
    }

    @Test
    public void testAddV2ShouldThrowErrorWhenInputContainsNonNumericValues() {
        try {
            calculator.addV2("x,2");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("All inputs must be valid numbers.", e.getMessage());
        }
    }

    @Test
    public void testAddV2ShouldHandleWhitespaceGracefully() {
        assertEquals(3, calculator.addV2(" 1 , 2 "));
    }

    @Test
    public void testAddV3ShouldReturnSumOfNumbersUsingCommaAndNewlineDelimiters() {
        assertEquals(6, calculator.addV3("1\n2,3"));
        assertEquals(15, calculator.addV3("1\n2,3\n4,5"));
    }

    @Test
    public void testAddV4ShouldHandleCustomDelimiters() {
        assertEquals(6, calculator.addV4("1;2;3"));
        assertEquals(15, calculator.addV4("//#\n4#5#6"));
        assertEquals(8, calculator.addV4("//@\n8"));
        assertEquals(6, calculator.addV4("//;\n 1 ; 2 ; 3 "));
    }

    @Test
    public void testAddV4ShouldThrowErrorForInvalidInput() {
        try {
            calculator.addV4("//;\n1;abc;3");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("All inputs must be valid numbers.", e.getMessage());
        }
    }

    @Test
    public void testAddV4ShouldThrowErrorForMixedDelimiters() {
        try {
            calculator.addV4("1\n2;3");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("All inputs must be valid numbers.", e.getMessage());
        }
    }

    @Test
    public void testAddV5ShouldHandleNegativeNumbersAndThrowError() {
        try {
            calculator.addV5("1;-2;-3;4");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Negatives not allowed: [-2, -3]", e.getMessage());
        }
    }

    @Test
    public void testAddV5ShouldHandleCustomDelimiters() {
        assertEquals(6, calculator.addV5("//-\n1-2-3"));
    }

    @Test
    public void testAddV5ShouldHandleWhitespaceGracefully() {
        assertEquals(6, calculator.addV5("  1 ; 2 ; 3 "));
    }

    @Test
    public void testGetCalledCountTracksUsageCorrectly() {
        assertEquals(0, calculator.getCalledCount());

        calculator.addV1("1,2");
        calculator.addV2("1,2,3");
        calculator.addV3("1\n2,3");
        assertEquals(3, calculator.getCalledCount());
    }
}
