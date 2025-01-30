export function numberToRoman(number: number): string {
  let result = '';
  let remaining = number;

  while (remaining > 0) {
    const highestRoman = getHighestRoman(remaining);
    result += highestRoman.roman;
    remaining -= highestRoman.decimal;
  }

  return result;
}

const romanDigits = [
    { decimal: 1, roman: 'I' },
    { decimal: 4, roman: 'IV' },
    { decimal: 5, roman: 'V' }, 
    { decimal: 9, roman: 'IX' },
    { decimal: 10, roman: 'X' }, 
    { decimal: 40, roman: 'XL' },
    { decimal: 50, roman: 'L' }, 
    { decimal: 90, roman: 'XC' },
    { decimal: 100, roman: 'C' }, 
    { decimal: 400, roman: 'CD' },
    { decimal: 500, roman: 'D' }, 
    { decimal: 900, roman: 'CM' },
    { decimal: 1000, roman: 'M' }
];

function getHighestRoman(number: number) {
  for (let i = romanDigits.length - 1; i > 0; i--) {
    if (romanDigits[i].decimal <= number) {
      return romanDigits[i];
    }
  }

  return romanDigits[0];
}
