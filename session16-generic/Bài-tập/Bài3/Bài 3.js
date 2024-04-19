"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "Monday";
    WeekDays["TUESDAY"] = "Tuesday";
    WeekDays["WEDNESDAY"] = "Wednesday";
    WeekDays["THURSDAY"] = "Thursday";
    WeekDays["FRIDAY"] = "Friday";
    WeekDays["SATURDAY"] = "Saturday";
    WeekDays["SUNDAY"] = "Sunday";
})(WeekDays || (WeekDays = {}));
function printDay(enumDays) {
    console.log("Các ngày trong tuần: ");
    for (let key in enumDays) {
        console.log(enumDays[key]);
    }
}
printDay(WeekDays);
