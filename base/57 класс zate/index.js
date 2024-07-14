class Zate {
  constructor(year, month, day) {
    this.date = new Date(year, month - 1, day); // month parameter is 0-indexed in JavaScript Date
  }

  getYear() {
    return this.date.getFullYear();
  }

  getMonthNumber() {
    return this.date.getMonth() + 1; // Adding 1 to get 1-based month number
  }

  getDay() {
    return this.date.getDate();
  }

  getDayOfWeekNumber() {
    return this.date.getDay(); // Returns the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  }

  getDayOfWeekName() {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[this.getDayOfWeekNumber()];
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
    return months[this.getMonthNumber() - 1]; // Adjusting for 0-indexed month array
  }
}

// Example usage:
const myDate = new Zate(2024, 7, 19);
console.log('Year:', myDate.getYear());
console.log('Month Number:', myDate.getMonthNumber());
console.log('Day:', myDate.getDay());
console.log('Day of Week Number:', myDate.getDayOfWeekNumber());
console.log('Day of Week Name:', myDate.getDayOfWeekName());
console.log('Month Name:', myDate.getMonthName());
