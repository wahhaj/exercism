export default class BeerSong {
  static verse(verse: number): string {
    switch(verse) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.\n` + 
          `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
      case 1: 
        return `1 bottle of beer on the wall, 1 bottle of beer.\n` + 
          `Take it down and pass it around, no more bottles of beer on the wall.\n`
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\n` + 
          `Take one down and pass it around, 1 bottle of beer on the wall.\n`
      default:
        return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\n` + 
          `Take one down and pass it around, ${verse-1} bottles of beer on the wall.\n`
    }
  }

  static sing(start: number = 99, end: number = 0): string {
    let song = ''
    for (let i = start; i >= end; i--) {
      song += this.verse(i)
      if (i > end) {
        song += '\n' // add extra newline after verses unless last verse
      }
    }
    return song
  }
}
