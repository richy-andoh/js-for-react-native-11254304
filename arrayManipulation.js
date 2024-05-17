const processArray = (arrOfNum) => {
   return arrOfNum.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
};