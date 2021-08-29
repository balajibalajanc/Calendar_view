const formatISO = require('date-fns/formatISO');
const startOfWeek = require('date-fns/startOfWeek');
const zonedTimeToUtc = require('date-fns-tz/zonedTimeToUtc');
const addDays = require('date-fns/addDays');

var dateFormat = require('dateformat');
var timeZoneId='Asia/Calcutta';
var weekStart = zonedTimeToUtc(startOfWeek(new Date()), timeZoneId);
console.log(startOfWeek(new Date()));

      var weekEnd = addDays(weekStart, 7);
      console.log(`Start: ${formatISO(weekStart)}`);
      console.log(`Start_toISO: ${weekStart.toISOString}`);
      console.log(`Start_toISO: ${formatISO(weekStart).replace("+", "-")}`);