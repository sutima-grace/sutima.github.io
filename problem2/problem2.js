let num;
let arrNum = [];

label: while (true) {
    num = +prompt("Enter an integer (a negative integer to quit):");
    if (parseInt(num) == parseFloat(num)) {
        if (num >= 0) {
            arrNum.push(num)
        }
        if (num < 0) {
            break
        }
    }
}


function readlnput() {
    return [...arrNum].sort(function (a, b) { return (a - b) })

}
function displayStats(arr) {

    alert("for the list " + arr + ", the arrage is " + getAvg(arr) + ", the minimum is " + Math.min(...arr) + ", the maximum is " + Math.max(...arr));

}

function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
  }

let list = readlnput();

list.length > 0 ? displayStats(list) : alert("for the list thay is emtry, the average is 0, the minimum is 0, the maximum is 0");
