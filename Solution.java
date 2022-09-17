
public class Solution {

    private static final int[] NUMBER_OF_DAYS_PER_MONTH = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    public int countDaysTogether(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob) {

        int arriveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveAlice);
        int leaveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveAlice);

        int arriveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveBob);
        int leaveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveBob);

        int daysTogether = 1 + Math.min(leaveAliceDaysSinceStartOfYear, leaveBobDaysSinceStartOfYear) - Math.max(arriveAliceDaysSinceStartOfYear, arriveBobDaysSinceStartOfYear);
        return daysTogether > 0 ? daysTogether : 0;
    }

    private int calculateNumberOfDaysSinceStartOfYear(String date) {

        int month = Integer.parseInt(date.substring(0, 2));
        int day = Integer.parseInt(date.substring(3, 5));

        int numberOfDaysSinceStartOfYear = day;
        for (int i = 0; i < month - 1; ++i) {
            numberOfDaysSinceStartOfYear += NUMBER_OF_DAYS_PER_MONTH[i];
        }
        return numberOfDaysSinceStartOfYear;
    }
}
