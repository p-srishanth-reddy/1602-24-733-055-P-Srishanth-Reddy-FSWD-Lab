function generateAllSubstrings(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return [];
    }

    const substrings = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }

    return substrings;
}

function displaySubstrings(str) {
    const substrings = generateAllSubstrings(str);

    if (substrings.length > 0) {
        console.log("String:", str);
        console.log("All Substrings:", substrings.join(', '));
        return substrings;
    }
}

function getUserInputSubstrings() {
    const userString = prompt("Enter a string:");

    if (userString === null || userString.trim() === "") {
        alert("Please enter a valid string!");
        return;
    }

    const substrings = displaySubstrings(userString);

    if (substrings && substrings.length > 0) {
        alert("String: " + userString + "\nSubstrings: " + substrings.join(', '));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displaySubstrings('hello');
});
