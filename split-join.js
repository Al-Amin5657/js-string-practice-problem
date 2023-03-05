const lyrics = 'Tumi Bondhu kala pakhi ami Jeno ki. Bosonto kale tomai chinte pari ni. Kala kala sada sada.';
const parts = lyrics.split(' ');
console.log(parts);
const sentence = lyrics.split('.');
console.log(sentence);
const charts = lyrics.split('');
console.log(charts);
// slice
const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
    'Tumi Bondhu kala pakhi ami Jeno ki.',
    'Bosonto kale tomai chinte pari ni.',
    'Kala kala sada sada.'
];

const newSong = lines.join(': ');
console.log(newSong);

