"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 8] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log("Các ngày trong tuần: ");
console.log("Thứ 2: ", WeekDays.Monday);
console.log("tHỨ 3:", WeekDays.Tuesday);
console.log("tHỨ 4:", WeekDays.Wednesday);
console.log("tHỨ 5:", WeekDays.Thursday);
console.log("Thứ 6:", WeekDays.Friday);
console.log("Thứ 7:", WeekDays.Saturday);
console.log("Chủ nhật:", WeekDays.Sunday);
