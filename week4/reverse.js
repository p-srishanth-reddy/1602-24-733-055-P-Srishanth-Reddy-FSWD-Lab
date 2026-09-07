// Function to reverse each word in a string
function reverseEachWord(str) {
    // Check if input is a valid string
    if (typeof str !== 'string') {
        return 'Error: Input must be a string';
    }

    // Split the string into words, reverse each word, and join them back
    const reversedString = str
        .split(' ')                          // Split by space to get individual words
        .map(word => {
            // Reverse each word by splitting into characters, reversing, and joining
            return word.split('').reverse().join('');
        })
        .join(' ');                          // Join words back with space

    return reversedString;
}

// Function to reverse words while maintaining punctuation
function reverseWordsWithPunctuation(str) {
    if (typeof str !== 'string') {
        return 'Error: Input must be a string';
    }

    const reversedString = str
        .split(' ')
        .map(word => {
            // Extract letters and punctuation separately
            let letters = '';
            let punctuation = '';

            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                if (/[a-zA-Z0-9]/.test(char)) {
                    letters += char;
                } else {
                    punctuation += char;
                }
            }

            // Reverse only the letters
            const reversedLetters = letters.split('').reverse().join('');

            // Reconstruct word with reversed letters and original punctuation
            return reversedLetters + punctuation;
        })
        .join(' ');

    return reversedString;
}

// Function to reverse entire string (all characters)
function reverseEntireString(str) {
    if (typeof str !== 'string') {
        return 'Error: Input must be a string';
    }

    return str.split('').reverse().join('');
}

// Example usage and testing
function demonstrateReverseFunctions() {
    const testString = "Hello World JavaScript";
    const testStringWithPunctuation = "Hello, World! How are you?";

    console.log("=== Reverse Each Word ===");
    console.log("Original:", testString);
    console.log("Reversed:", reverseEachWord(testString));

    console.log("\n=== Reverse Words with Punctuation ===");
    console.log("Original:", testStringWithPunctuation);
    console.log("Reversed:", reverseWordsWithPunctuation(testStringWithPunctuation));

    console.log("\n=== Reverse Entire String ===");
    console.log("Original:", testString);
    console.log("Reversed:", reverseEntireString(testString));
}

// Get input from user and display result
function reverseUserInput() {
    const userInput = prompt("Enter a string to reverse each word:");

    if (userInput === null || userInput.trim() === "") {
        alert("Please enter a valid string!");
        return;
    }

    const result = reverseEachWord(userInput);
    alert("Original: " + userInput + "\nReversed: " + result);
    console.log("Original:", userInput);
    console.log("Reversed:", result);
}

// Run demonstration on page load
document.addEventListener('DOMContentLoaded', function() {
    demonstrateReverseFunctions();
});
