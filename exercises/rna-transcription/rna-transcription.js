//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = strand =>
  strand
    .split('')
    .map(s => {
      if (s === 'G') return 'C';
      if (s === 'C') return 'G';
      if (s === 'T') return 'A';
      if (s === 'A') return 'U';
      return s;
    })
    .join('');
