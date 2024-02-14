function validateDate() {
    const inputDate = document.getElementById('inputDate').value;
    const dateParts = inputDate.split('-');
    var month = dateParts[0];
    var day = dateParts[1];
    var year = dateParts[2];

    if (dateParts.length !== 3) {
        alert('Please enter date in MM-DD-YYYY format.');
        return;
    }

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        alert('Invalid date. Please enter date in MM-DD-YYYY format.');
        return;
    }

    if (month < 1 || month > 12) {
        alert('Invalid month. Month should be within the range 1 to 12.');
        return;
    }

    const maxDays = getMaxDays(month, year);
    if (day < 1 || day > maxDays) {
        alert(`Invalid day. Day should be within the range 1 to ${maxDays}.`);
        return;
    }

    alert(`You have entered a valid date: "${inputDate}". Thank you.`);
}

function getMaxDays(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }
    return daysInMonth[month - 1];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}