function isLeapYear (year) {

    if (year === 1600 || year ===  2000 || year === 2400) {
           return true;
    }
    else {
        if ((year%4===0||year%400===0)&&(year%100 !== 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    
      
}
console.log(isLeapYear(1600));