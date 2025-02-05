function validateTime(arrivalTime, departureTime) {
    let timeOfArrival = new Date(arrivalTime);
    let timeOfDeparture = new Date(departureTime);
    return (timeOfArrival.getTime() > timeOfDeparture.getTime());

}

module.exports = {
    validateTime
}







// let z = new Date("2018-03-29T13:16:00");

// let options = { 
//     year: 'numeric', 
//     month: 'long', 
//     day: '2-digit', 
//     weekday: 'short', 
//     hour: 'numeric', 
//     minute: '2-digit', 
//     second: '2-digit', 
//     timeZoneName: 'short'
// };

// let formattedDate = new Intl.DateTimeFormat('en-US', options).format(z);
// console.log(typeof formattedDate);