const resolvers = {
  Book: {
    author: (book, args, { db }) => db.getAuthorById(book.authorId),
    cover: parent => ({
      path: parent.coverPath
    })
  },
  Author: {
    books: (author, args, { db }) => parent.bookIds.map(db.getBookById),
    photo: parent => ({
      path: parent.photoPath
    })
  },
  Avatar: {
    image: avatar => ({
      path: avatar.imagePath
    })
  },
  Image: {
    url: (image, args, context) => context.baseAssetsUrl + image.path
  },
  Query: {
    books: (rootValue, args, { db }) => db.getAllBooks(),
    authors: (rootValue, args, { db }) => db.getAllAuthors(),
    users: (rootValue, args, { db }) => db.getAllUsers(),
    randomBook: (rootValue, args, { db }) => {
      const numberOfBooks = db.getAllBooks().length;
      const randomId = Math.floor(Math.random() * numberOfBooks + 1);
      return db.getBookById(randomId);
    },
    randomAuthor: (rootValue, args, { db }) => {
      const numberOfAuthors = db.getAllAuthors().length;
      const randomId = Math.floor(Math.random() * numberOfAuthors + 1);
      return db.getAuthorById(randomId);
    }
  }
};

module.exports = resolvers;
