class StringCalculator {
    add(numbers) {
      if (numbers === '') {
        return 0;
      }
  
      let delimiter = /[,\n]/;
      if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);
      }
  
      const nums = numbers.split(delimiter).map(Number);
      const negatives = nums.filter((num) => num < 0);
  
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
      }
  
      return nums.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;