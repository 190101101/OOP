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

class ZateExt extends Zate {
  constructor(year, month, day) {
    super(year, month, day);
  }

  addYears(years) {
    this.date.setFullYear(this.date.getFullYear() + years);
  }

  subtractYears(years) {
    this.date.setFullYear(this.date.getFullYear() - years);
  }

  addMonths(months) {
    const currentMonth = this.date.getMonth();
    this.date.setMonth(currentMonth + months);
  }

  subtractMonths(months) {
    const currentMonth = this.date.getMonth();
    this.date.setMonth(currentMonth - months);
  }

  addDays(days) {
    const currentDay = this.date.getDate();
    this.date.setDate(currentDay + days);
  }

  subtractDays(days) {
    const currentDay = this.date.getDate();
    this.date.setDate(currentDay - days);
  }
}

// Example usage:
const myDate = new ZateExt(2024, 7, 14);
console.log(
  'Original Date:',
  myDate.getDate(),
  myDate.getMonthName(),
  myDate.getYear()
);

myDate.addYears(2);
console.log(
  'Date after adding 2 years:',
  myDate.getDate(),
  myDate.getMonthName(),
  myDate.getYear()
);

myDate.subtractMonths(3);
console.log(
  'Date after subtracting 3 months:',
  myDate.getDate(),
  myDate.getMonthName(),
  myDate.getYear()
);

myDate.addDays(10);
console.log(
  'Date after adding 10 days:',
  myDate.getDate(),
  myDate.getMonthName(),
  myDate.getYear()
);

myDate.subtractYears(1);
console.log(
  'Date after subtracting 1 year:',
  myDate.getDate(),
  myDate.getMonthName(),
  myDate.getYear()
);
