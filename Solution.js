
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    this.NUMBER_OF_DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let arriveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveAlice);
    let leaveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveAlice);

    let arriveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveBob);
    let leaveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveBob);

    let daysTogether = 1 + Math.min(leaveAliceDaysSinceStartOfYear, leaveBobDaysSinceStartOfYear) - Math.max(arriveAliceDaysSinceStartOfYear, arriveBobDaysSinceStartOfYear);
    return daysTogether > 0 ? daysTogether : 0;
};

/**
 * @param {string} date
 * @return {number}
 */
function calculateNumberOfDaysSinceStartOfYear(date) {

    let month = Number.parseInt(date.substring(0, 2));
    let day = Number.parseInt(date.substring(3, 5));

    let numberOfDaysSinceStartOfYear = day;
    for (let i = 0; i < month - 1; ++i) {
        numberOfDaysSinceStartOfYear += this.NUMBER_OF_DAYS_PER_MONTH[i];
    }
    return numberOfDaysSinceStartOfYear;
}
