function findFirstNotRepeatedCharacter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return null;
    }

    const lowerStr = str.toLowerCase();
    const charCount = {};

    for (let char of lowerStr) {
        if (/[a-z0-9]/.test(char)) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    for (let char of lowerStr) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

function displayFirstNotRepeated(str) {
    const result = findFirstNotRepeatedCharacter(str);

    if (result) {
        console.log("String:", str);
        console.log("First Not Repeated Character:", result);
        return result;
    } else {
        console.log("String:", str);
        console.log("No non-repeated character found");
        return null;
    }
}

function getUserInputFirstNotRepeated() {
    const userString = prompt("Enter a string:");

    if (userString === null || userString.trim() === "") {
        alert("Please enter a valid string!");
        return;
    }

    const result = displayFirstNotRepeated(userString);

    if (result) {
        alert("String: " + userString + "\nFirst Not Repeated Character: " + result);
    } else {
        alert("String: " + userString + "\nNo non-repeated character found");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayFirstNotRepeated('abacddbec');
});
