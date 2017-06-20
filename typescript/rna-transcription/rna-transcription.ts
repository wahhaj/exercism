export default class Transcriptor {
  toRna(dna: String): String {
    if (dna.search(/[^ACGT]/g) > -1) {
      throw new Error('Invalid input DNA.')
    }

    return dna.replace(/[ACGT]/g, (n: string): string => {
      switch (n) {
        case 'G':
          return 'C'
        case 'C':
          return 'G'
        case 'T':
          return 'A'
        case 'A':
          return 'U'
      }
    })
  }
}
