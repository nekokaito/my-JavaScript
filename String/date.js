function printCalendar(date, dayName) {
    const [day, month, year] = date.split('/').map(Number);
    const numberOfDays = getNumberOfDays(month, year);
    const firstDayOfWeek = getDayOfWeek(1, month, year);
    const startIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(dayName);

    console.log("|---------------------------|");
    console.log("|Sun|Mon|Tue|Wed|Thu|Fri|Sat|");
    console.log("|---------------------------|");

    let currentDay = 1;
    let row = '|';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startIndex) || currentDay > numberOfDays) {
                row += " - |";
            } else {
                row += (currentDay < 10 ? " " : "") + currentDay + "|";
                currentDay++;
            }
        }
        console.log(row);
        console.log("|---------------------------|");
        row = '|';
    }
    console.log();
}
printCalendar(12, 'Sunday')