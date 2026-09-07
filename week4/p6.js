function countLetterOccurrences(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return null;
    }

    const lowerWord = word.toLowerCase();
    const letterCount = {};

    for (let char of lowerWord) {
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    return letterCount;
}

function displayLetterOccurrences(word) {
    const result = countLetterOccurrences(word);

    if (result) {
        let output = '';
        for (let letter in result) {
            output += letter + ':' + result[letter] + ', ';
        }
        output = output.slice(0, -2);

        console.log("Word:", word);
        console.log("Letter Occurrences:", output);
        return output;
    }
}

function getUserInputLetterCount() {
    const userWord = prompt("Enter a word:");

    if (userWord === null || userWord.trim() === "") {
        alert("Please enter a valid word!");
        return;
    }

    const result = displayLetterOccurrences(userWord);

    if (result) {
        alert("Word: " + userWord + "\nOccurrences: " + result);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayLetterOccurrences('programming');
});
