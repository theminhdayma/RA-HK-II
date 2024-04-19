
enum WeekDays {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

function printDay<T> (enumDays: T): void {
    console.log("Các ngày trong tuần: ");   
    for(let key in enumDays){
        console.log(enumDays[key]);
               
    }
}

printDay(WeekDays);
