const booksData = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  // Add more books if you'd like
];

export function BookList() {
  const books = booksData;
  return (
    <>
      <ul>
        {books.map((book) => (
          <Book bookObj={book} key={book.title} />
        ))}
      </ul>
      ;
    </>
  );
}

function Book(props) {
  return (
    <>
      <h1>{props.bookObj.title}</h1>
      <p>{props.bookObj.author}</p>
      <p>{props.bookObj.year}</p>
    </>
  );
}
