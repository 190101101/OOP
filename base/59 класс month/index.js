class Month {
  constructor(monthNumber) {
    this.monthNumber = monthNumber;
  }

  getMonthNumber() {
    return this.monthNumber;
  }

  getMonthName() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[this.monthNumber - 1]; // Adjusting for 0-indexed month array
  }

  getLastDayNumber() {
    const year = 2024; // Leap year for February calculation
    const lastDay = new Date(year, this.monthNumber, 0).getDate();
    return lastDay;
  }

  getFirstDayOfWeekNumber() {
    const year = 2024; // Leap year for February calculation
    const firstDay = new Date(year, this.monthNumber - 1, 1).getDay(); // getDay() returns 0 for Sunday
    return firstDay;
  }

  getLastDayOfWeekNumber() {
    const year = 2024; // Leap year for February calculation
    const lastDay = new Date(year, this.monthNumber, 0).getDay(); // getDay() returns 0 for Sunday
    return lastDay;
  }
}

// Example usage:
const myMonth = new Month(7); // July
console.log('Month Number:', myMonth.getMonthNumber());
console.log('Month Name:', myMonth.getMonthName());
console.log('Last Day Number:', myMonth.getLastDayNumber());
console.log('First Day of Week Number:', myMonth.getFirstDayOfWeekNumber());
console.log('Last Day of Week Number:', myMonth.getLastDayOfWeekNumber());
