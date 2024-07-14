class Period {
  constructor(startTime, endTime) {
    this.startTime = new Date(startTime);
    this.endTime = new Date(endTime);
  }

  differenceInSeconds() {
    return (this.endTime - this.startTime) / 1000;
  }

  differenceInMinutes() {
    return this.differenceInSeconds() / 60;
  }

  differenceInHours() {
    return this.differenceInMinutes() / 60;
  }

  differenceInDays() {
    return this.differenceInHours() / 24;
  }
}

// Example usage:
const period = new Period('2024-07-13T10:00:00', '2024-07-14T12:00:00');
console.log('Difference in seconds:', period.differenceInSeconds());
console.log('Difference in minutes:', period.differenceInMinutes());
console.log('Difference in hours:', period.differenceInHours());
console.log('Difference in days:', period.differenceInDays());
