function checkPasswordStrength(password) {
    if (typeof password !== 'string' || password.length === 0) {
        return { strength: 'Invalid', message: 'Password must be a non-empty string' };
    }

    let strength = 0;
    let feedback = [];

    if (password.length >= 8) {
        strength++;
    } else {
        feedback.push('Password should be at least 8 characters long');
    }

    if (/[a-z]/.test(password)) {
        strength++;
    } else {
        feedback.push('Add lowercase letters');
    }

    if (/[A-Z]/.test(password)) {
        strength++;
    } else {
        feedback.push('Add uppercase letters');
    }

    if (/[0-9]/.test(password)) {
        strength++;
    } else {
        feedback.push('Add numbers');
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        strength++;
    } else {
        feedback.push('Add special characters');
    }

    let strengthLevel = '';
    if (strength <= 1) {
        strengthLevel = 'Weak Password';
    } else if (strength <= 2) {
        strengthLevel = 'Fair Password';
    } else if (strength <= 3) {
        strengthLevel = 'Good Password';
    } else if (strength <= 4) {
        strengthLevel = 'Strong Password';
    } else {
        strengthLevel = 'Very Strong Password';
    }

    return {
        strength: strengthLevel,
        score: strength + '/5',
        feedback: feedback.length > 0 ? feedback : ['Excellent password!']
    };
}

function displayPasswordStrength(password) {
    const result = checkPasswordStrength(password);

    console.log("Password:", password);
    console.log("Strength:", result.strength);
    console.log("Score:", result.score);
    console.log("Feedback:", result.feedback.join(', '));

    return result;
}

function getUserInputPasswordStrength() {
    const userPassword = prompt("Enter a password:");

    if (userPassword === null) {
        alert("Please enter a password!");
        return;
    }

    const result = displayPasswordStrength(userPassword);

    alert("Password Strength: " + result.strength + "\nScore: " + result.score + "\nFeedback: " + result.feedback.join(', '));
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Password Strength Checker Ready");
    displayPasswordStrength('MyPass123!');
});
