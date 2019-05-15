let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = Date.parse(this.from);
    let last = Date.parse(this.to);
    let tempDate;
    let dayString = '';
    return {
        next() {
            if (current <= last) {
                current += 86400000;
                tempDate = new Date(current);
                dayString = tempDate.getUTCDate();
                dayString = '' + dayString;
                if (dayString.length === 1) {
                    dayString = '0' + dayString;
                }
                if (tempDate.getUTCDay() === 6 || tempDate.getUTCDay() === 0) {
                    dayString = '[' + dayString + ']';
                }
                return {
                    done:false,
                    value: dayString
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};