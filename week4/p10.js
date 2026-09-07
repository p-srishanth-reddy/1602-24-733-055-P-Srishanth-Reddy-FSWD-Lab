function removeDuplicateCharacters(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }

    const seen = {};
    let result = '';

    for (let char of str) {
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }

    return result;
}

function displayRemoveDuplicates(str) {
    const result = removeDuplicateCharacters(str);

    console.log("Input:", str);
    console.log("Output:", result);

    return result;
}

function getUserInputRemoveDuplicates() {
    const userString = prompt("Enter a string:");

    if (userString === null || userString.trim() === "") {
        alert("Please enter a valid string!");
        return;
    }

    const result = displayRemoveDuplicates(userString);

    if (result) {
        alert("Input: " + userString + "\nOutput: " + result);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayRemoveDuplicates('programming');
});
