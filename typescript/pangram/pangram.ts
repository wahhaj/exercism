export default class Pangram {
  sentence: string

  constructor(sentence: string) {
    this.sentence = sentence.toLowerCase()
  }

  isPangram(): boolean {
    const alpha: string = 'abcdefghijklmnopqrstuvwxyz'

    return alpha
      .split('')
      .filter((letter): boolean => !this.sentence.includes(letter))
      .length === 0
  }
}
