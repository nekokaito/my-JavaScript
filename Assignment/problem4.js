function password(obj) {
    const siteCapital = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const Name = obj.name;
    const Year = obj.birthYear;
    const Size = Year.toString().length;
    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName') && Size === 4) {
        if (typeof(obj) == 'object' && !Array.isArray(obj)) {
           return siteCapital+'#'+Name+'@'+Year;
        
     }
    }
   else {
        return 'invalid';
    }
}

