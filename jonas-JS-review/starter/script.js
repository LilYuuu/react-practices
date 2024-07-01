const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

////////////////////////////
////// Desctructuring //////
////////////////////////////

const books = getBooks();

const book = getBook(2);
console.log(book);

// const title = book.title;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

/////////////////////////////
////// rest and spread //////
/////////////////////////////

// rest operator
const [primaryGenre, secondaryGenre, ...otherGeneres] = genres;

console.log(primaryGenre, secondaryGenre);
console.log(otherGeneres);

// spread operator on arrays
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// spread operator on objects
const updatedBook = {
  ...book,

  // adding a new property
  moviePublicationDate: "2001-12-19",

  //overwriting an ecisting property
  pages: 1210,
};
console.log(updatedBook);

////////////////////////////////
////// temeplate literals //////
////////////////////////////////

const summary = ` ${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}.`;

console.log(summary);

// ternaries instead of if-else statements
const pageRange = pages > 1000 ? "long" : "short";
console.log(pageRange);

/////////////////////////////
////// arrow functions //////
/////////////////////////////

// function getYear(str) {
//   return str.split('-')[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

///////////////////////////////
////// short circuiting ///////
///////////////////////////////

// short circuiting: immediately return the first
// falsy value: 0, '', null, undefined, NaN, false

console.log(true && "Hello");
console.log(false && "Hello");

console.log(hasMovieAdaptation && "This book has a movie adaptation");

const spanishTranslation =
  book.translations.spanish || "No translation available";

// sometimes it could go wrong
console.log(book.reviews.librarything.reviewsCount);
const count = book.reviews.librarything.reviewsCount || "no data";
count; // returns 'no data'

// but the result is actually 0
// to fix this, we can use the nullish coalescing operator

// only returns the latter when the former is null or undefined
const newCount = book.reviews.librarything.reviewsCount ?? "no data";
newCount;

///////////////////////////////
////// optional chaining //////
///////////////////////////////

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;

  // const librarything = book.reviews.librarything.reviewsCount;   // this will throw an error if reviewsCount is not available

  // const librarything = book.reviews.librarything?.reviewsCount; // this will return undefined if reviewsCount is not available

  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // this will return 0 if reviewsCount is not available

  return goodread + librarything;
}

console.log(getTotalReviewCount(book));

////////////////////////////
////// Array methods ///////
////////////////////////////

// map
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

// const essentialData = books.map(book => {return {title: book.title, author: book.author}});
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce
const pagesofAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // acc starts at 0
pagesofAllBooks;

// sort
const arr = [1, 3, 2, 5, 4];
const sorted = arr.slice().sort((a, b) => a - b); // slice() is used to create a copy of the array so that the original array is not mutated
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

///////////////////////////////
////// immutable arrays ///////
///////////////////////////////

// 1. add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];

// 2. remove a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

//  3. update a book object in array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

///////////////////////////////
////// async: promises ////////
///////////////////////////////

fetch("https://jsonplaceholder.typicode.com/todos") // returns a promise
  .then((res) => res.json()) // also returns a promise
  .then((data) => console.log(data));

console.log("hello"); // this will be printed before the fetch request is completed

//////////////////////////////////
////// async: async/await ////////
//////////////////////////////////

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
// will return a promise if trying to store the result in a variable outside the function

getTodos();
