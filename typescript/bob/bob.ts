export default class Bob {
  hey(query: string): string {
    // Queries that contain at least one letter and only uppercase letters are yelling
    if (query.search(/[A-z]/g) > -1 && query.toUpperCase() === query) {
      return 'Whoa, chill out!'
    }

    // Query ending with a ? is a question
    if (query.endsWith('?')) {
      return 'Sure.'
    }

    if (query.trim().length === 0) {
      return 'Fine. Be that way!'
    }

    return 'Whatever.'
  }
}
