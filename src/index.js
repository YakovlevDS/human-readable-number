module.exports = function toReadable(number) {
    const arrNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrDozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const arrSingles = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    function calcPart(num) {
        let a, b, c;
        newArr = [];
        let arr = String(num).split("");
        a = +arr[0];
        b = +arr[1];
        c = +arr[2];
        newArr = [a, b, c];

        return newArr;
    }

    calcPart(number);

    if (number > 99) {
        if (newArr[1] > 1) {
            if (newArr[2]) {
                return `${arrSingles[newArr[0] - 1]} hundred ${
                    arrDozens[newArr[1] - 2]
                } ${arrSingles[newArr[2] - 1]}`;
            }
            return `${arrSingles[newArr[0] - 1]} hundred ${
                arrDozens[newArr[1] - 2]
            }`;
        }

        if (newArr[1] === 1) {
            let digit = +("1" + newArr[2]);
            return `${arrSingles[newArr[0] - 1]} hundred ${arrNumbers[digit]}`;
        }

        if (newArr[2]) {
            return `${arrSingles[newArr[0] - 1]} hundred ${
                arrSingles[newArr[2] - 1]
            }`;
        }
        return `${arrSingles[newArr[0] - 1]} hundred`;
    }

    if (number > 19) {
        if (newArr[1]) {
            return `${arrDozens[newArr[0] - 2]} ${arrSingles[newArr[1] - 1]}`;
        }
        return `${arrDozens[newArr[0] - 2]}`;
    }
    return arrNumbers[number];
};
