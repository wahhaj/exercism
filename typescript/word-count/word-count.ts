export default class WordCount {
  count(phrase: string): Map<string, number> {
    const counts = new Map()

    phrase.trim()
      .toLowerCase()
      .split(/\s+/g)
      .forEach((word) => {
        if (counts.has(word)) {
          counts.set(word, counts.get(word) + 1)
        } else {
          counts.set(word, 1)
        }
      })

    return counts
  }
}
