class Movie {
  constructor(title, rating) {
    this.title = title
    this.rating = rating
  }

  validate() {
    // Check object values
    let output = false
    // Check title first
    if (this.title !== '') {
      // Then check rating
      if (this.rating >= 1 && this.rating <= 5) {
        output = true
      }
    }
    return output
  }

  getAll() {
    return this.title + ' with rating ' + this.rating
  }
}