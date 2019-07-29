  const logo = document.createElement("IMG");
  logo.setAttribute("src", "img/booklist.jpg");
  logo.setAttribute("alt", "Book List");
  logo.id = 'logo';
  document.body.appendChild(logo);


/*const bookTitles =[
    'don_quixote',
    'a_tale_of_two_cities',
    'the_lord_of_the_rings',
    'the_little_prince',
    'harry_potter_and_philosophers_stone',
    'the_hobbit',
    'the_dream_of_the_red_chamber',
    'and_then_there_were_none',
    'the_lion_the_witch_and_the_wardrobe',
    'alices_adventures_in_wonderland'
]
console.log(bookTitles)*/


const bookProperties = {
  _don_quixote: {
    title: 'Don Quixote',
    language: 'English',
    author: 'Miguel de Cervantes'
},

_a_tale_of_two_cities: {
    title: 'A Tale of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
},

_the_lord_of_the_rings: {
    title: 'The Lord of the Rings',
    language: 'English',
    author: 'J. R. R. Tolkien',
},

_the_little_prince: {
    title: 'Le Petit Prince',
    language: 'French',
    author: 'Antoine de Saint-Exupéry',
},

_harry_potter_and_philosophers_stone: {
    title: 'Harry Potter and the Philosophers Stone',
    language: 'English',
    author: 'J. K. Rowling',
},

_the_hobbit: {
    title: 'The Hobbit',
    language: 'English',
    author: 'J. R. R. Tolkien',
},

_the_dream_of_the_red_chamber: {
    title: 'Dream of the Red Chamber',
    language: 'Vernacular Chinese',
    author: 'Cao Xueqin',
},

_and_then_there_were_none: {
    title: 'And Then There Were None',
    language: 'English',
    author: 'Agatha Christie',
},

_the_lion_the_witch_and_the_wardrobe: {
    title: 'The Lion, the Witch and the Wardrobe',
    language: 'English',
    author: 'C. S. Lewis',
},

alices_adventures_in_wonderland: {
    title: "Alice's Adventures in Wonderland",
    language: 'English',
    author: 'Lewis Carroll',
    },
  };
  
  const bookInfo = Object.entries(bookProperties);
  function bookList() {
    const h1 = document.createElement('h1');
    h1.innerText = 'My Books';
    document.body.appendChild(h1);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.id ='booklist';
    const body = document.body;
    for (let i = 0; i < bookInfo.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const title = document.createElement('h1');
      title.textContent = 'Title: ' + bookInfo[i][1].title;
      li.appendChild(title);
      title.id = 'booktitles';
      const language = document.createElement('p');
      language.textContent = 'Language: ' + bookInfo[i][1].language;
      li.appendChild(language);
      const author = document.createElement('p');
      author.textContent = 'Author: ' + bookInfo[i][1].author;
      li.appendChild(author);
     
      
    }
    body.appendChild(ul);
  }	
  
  window.onload = () => bookList();