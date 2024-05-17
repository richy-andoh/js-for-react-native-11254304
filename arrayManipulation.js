const processArray = (arrOfNum) => {
   return arrOfNum.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
};



const formatArrayStrings = (arrOfStr, arrOfNum) => {
    return arrOfStr.map((str, indx) => {
        const num = arrOfNum[indx];
        return num % 2 === 0 ? str.toUpperCase : str.toLowerCase;
    });
};