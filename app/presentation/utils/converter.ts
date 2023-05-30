export const RomanNumeralConverter = (value: number) => {
  const converter: {[key: number]: string} = {
    1: 'i',
    2: 'ii',
    3: 'iii',
    4: 'iv',
    5: 'v',
    6: 'vi',
    7: 'vii',
    8: 'viii',
  };

  return converter[value];
};
