function findSecondSmallestAndLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

    if (uniqueSortedArr.length < 2) {
        return null;
    }

    const secondSmallest = uniqueSortedArr[1];
    const secondLargest = uniqueSortedArr[uniqueSortedArr.length - 2];

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}

function displayResult() {
    const sampleArray = [10, 5, 8, 20, 15];
    const result = findSecondSmallestAndLargest(sampleArray);

    if (result) {
        console.log("Array:", sampleArray);
        console.log("Second Smallest:", result.secondSmallest);
        console.log("Second Largest:", result.secondLargest);
        console.log("Output: " + result.secondSmallest + ", " + result.secondLargest);
    }
}

function findFromUserInput() {
    const userInput = prompt("Enter numbers separated by commas (e.g., 10, 5, 8, 20, 15):");

    if (userInput === null || userInput.trim() === "") {
        alert("Please enter valid numbers!");
        return;
    }

    const arr = userInput.split(',').map(num => parseFloat(num.trim()));

    if (arr.some(isNaN)) {
        alert("Please enter only valid numbers!");
        return;
    }

    const result = findSecondSmallestAndLargest(arr);

    if (result) {
        alert("Array: [" + arr.join(", ") + "]\nSecond Smallest: " + result.secondSmallest + "\nSecond Largest: " + result.secondLargest);
        console.log("Array:", arr);
        console.log("Second Smallest:", result.secondSmallest);
        console.log("Second Largest:", result.secondLargest);
    } else {
        alert("Array must have at least 2 unique numbers!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayResult();
});
