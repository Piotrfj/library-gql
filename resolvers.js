const resolvers = {
  Book: {
    author: (book, args, { db }) => db.getAuthorById(parent.authorId),
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
    url: (image, args, context) => context.baseAssetsUrl + parent.path
  },
  Query: {
    books: (rootValue, args, { db }) => db.getAllBooks(),
    authors: (rootValue, args, { db }) => db.getAllAuthors(),
    users: (rootValue, args, { db }) => db.getAllUsers()
  }
};

module.exports = resolvers;
