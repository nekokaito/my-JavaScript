function calculateMoney(ticketSale) {

        if (ticketSale > 0) {
            const total = ( ticketSale * 120) - ( 500 + (8 * 50) );

            return total;
        }
        else {
            return 'Invalid Number'
        }
}

 