// recipe card
const Recipes = {
  title: 'Ragu',
  servings: 2,
  ingredients: ['mince', 'onions', 'tomatoes', 'white wine']
};

for (const key in Recipes) {
  if (Recipes.hasOwnProperty(key)) {
    if (typeof Recipes[key] === 'object') {
      console.log(key);
      Recipes[key].forEach((e) => {
        console.log(e);
      });
    } else {
      console.log(Recipes[key]);
    }
  }
}

// reading list

const addBook = (title, author, read = false) => ({
  title,
  author,
  read
});

const readingList = [];

readingList.push(addBook('hobbit', 'jrr tolkien'));
readingList.push(addBook('lotr', 'jrr tolkien'));
readingList.push(addBook('enders game', 'jrr tolkien', true));
readingList.push(addBook('hobbit', 'jrr tolkien'));

for (let i = 0; i < readingList.length; i++) {
  const book = readingList[i];
  console.log(
    `${book.title} by: ${book.author} Read: ${book.read ? 'yes' : 'no'}`
  );
}

// IMDB
const favMov = {
  title: 'Arrival',
  duration: 160,
  stars: ['some person', 'a guy i saw on tv once']
};

const showMovInfo = ({ title, duration, stars }) => {
  if (title && typeof duration==='number' && typeof stars==='object') {
    return `${title} lasts for ${duration} minutes. Stars: ${stars.reduce(
      (starsStr, star) => starsStr + ', ' + star
    )}`;
  }else{
    return 'not a valid object';
    
  }
};

console.log(showMovInfo(favMov));
