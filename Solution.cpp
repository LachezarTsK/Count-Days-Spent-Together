
#include <array>
#include <string>
using namespace std;

class Solution {
    
    inline static const array<int, 12> NUMBER_OF_DAYS_PER_MONTH { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

public:
    int countDaysTogether(const string& arriveAlice, const string& leaveAlice, const string& arriveBob, const string& leaveBob) {
       
        int arriveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveAlice);
        int leaveAliceDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveAlice);

        int arriveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(arriveBob);
        int leaveBobDaysSinceStartOfYear = calculateNumberOfDaysSinceStartOfYear(leaveBob);

        int daysTogether = 1 + min(leaveAliceDaysSinceStartOfYear, leaveBobDaysSinceStartOfYear) - max(arriveAliceDaysSinceStartOfYear, arriveBobDaysSinceStartOfYear);
        return daysTogether > 0 ? daysTogether : 0;
    }
    
private:
    int calculateNumberOfDaysSinceStartOfYear(const string& date) const {

        int month = stoi(date.substr(0, 2));
        int day = stoi(date.substr(3, 2));

        int numberOfDaysSinceStartOfYear = day;
        for (int i = 0; i < month - 1; ++i) {
            numberOfDaysSinceStartOfYear += NUMBER_OF_DAYS_PER_MONTH[i];
        }
        return numberOfDaysSinceStartOfYear;
    };
};
