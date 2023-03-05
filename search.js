const lyrics = 'Tumi Bondhu kala pakhi ami Jeno ki, Bosonto kale tomai chinte pari ni. Kala kala sada sada';
const lyricsLowerCase = lyrics.toLowerCase();
// console.log(lyricsLowerCase);
const searchString = 'Tomai';
// const doesExist = lyrics.includes('kala');
// const doesExist = lyricsLowerCase.includes('Bondhu');
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// IndexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kaila'));

if (lyrics.indexOf('sada') !== -1) {
    console.log('Exists inside the string')
}
else {
    console.log('Cannot find it.')
}

// startsWith

console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')
