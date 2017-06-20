export default class Hamming {
  compute(s: string, t: string): number {
    if (s.length !== t.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    let hamming = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) {
        hamming++
      }
    }
    return hamming
  }
}
