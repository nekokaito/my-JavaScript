function calculateMoney(ticketSale) {

    if (ticketSale > 0) {
        const total = ( ticketSale * 120) - ( 500 + (8 * 50) );

        return total;
    }
    else {
        return 'Invalid Number'
    }
}

function checkName(name) {
    const size = name.length;
    const lastLetter = name[size-1];
    let type = '';
    if (typeof(name) === 'string') {
        if (lastLetter == 'a' || lastLetter == 'y' ||lastLetter == 'i' ||lastLetter == 'e' ||lastLetter == 'o' ||lastLetter == 'u' ||lastLetter == 'w' || lastLetter == 'A' || lastLetter == 'Y' ||lastLetter == 'I' ||lastLetter == 'E' ||lastLetter == 'O' ||lastLetter == 'U' ||lastLetter == 'W') {
                type = 'Good Name';
            }
            else {
                type = 'Bad Name';
            }
            return type;
        } 
        else {
            return 'invalid';
        } 

    }

function deleteInvalids(array) {
        let newArray = [];
    
        if (Array.isArray(array)){
            
            for (let i of array) {
                
                if (typeof(i) === 'number' && !isNaN(i))
                 
                newArray.push(i);
    
            }
             return newArray;
        }
    
        else {
            return 'Invalid Array';
        }
             
    }
    
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

function monthlySavings(arr , livingCost) {
        let finalCost = 0;
        
        if (Array.isArray(arr) && !isNaN(livingCost)) {
            
            for (let i = 0; i < arr.length; i++) {
                let sum = arr[i];
                
                if (sum >= 3000) {
                    arr[i] = sum * 0.8; 
                }
                finalCost += arr[i];
            }
           let saving = finalCost - livingCost;
           
           if (saving > 0) {
            return saving;
           }
           else {
            return 'earn more';
           }
        }
        else {
            return 'invalid input';
        }
               
    }
    
