
function formatDate(){
    let getDay = new Date().getDay();
    let getMonth = new Date().getMonth() + 1;
    let getYear = new Date().getFullYear();
    
    let day = getDay < 10 ? `0${getDay}` : getDay;
    let month = getMonth < 10 ? `0${getMonth}` : getMonth;

    return `Date: ${day}/${month}/${getYear}`;
}

export default formatDate();