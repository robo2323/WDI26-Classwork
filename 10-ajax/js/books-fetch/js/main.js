const qs = (query) => document.querySelector(query);

document.addEventListener('DOMContentLoaded', () => {
  const fetchBook = (bookTitle, clicked = false) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}&key=AIzaSyDQG-5o0qOxSVmtpPbAvAIiINWuWUoFXuM`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        JSON.parse(xhr.responseText).items.forEach((item) => {
          const results = qs('#results');
          const dataList = qs('#json-datalist');
          const option = document.createElement('option');
          results.innerHTML = '';
          option.value = item.volumeInfo.title;
          dataList.appendChild(option);

          if (clicked) {
            const resultA = document.createElement('A');
            const resultDiv = document.createElement('DIV');

            resultA.setAttribute('href', item.volumeInfo.infoLink);
            resultDiv.classList.add('result');

            const authors =
              typeof item.volumeInfo.authors === 'object'
                ? item.volumeInfo.authors.join(',')
                : item.volumeInfo.authors || '';

            const img = item.volumeInfo.imageLinks ? `<img src="${item.volumeInfo.imageLinks.thumbnail}">` : '';

            resultDiv.innerHTML = `<h2>${item.volumeInfo.title}</h2><h3>${authors}</h3>${img}`;

            resultA.appendChild(resultDiv);
            results.appendChild(resultA);
          }
        });
      }
    };
  };
  qs('#book-search').addEventListener('input', (e) => {
    fetchBook(e.target.value);
  });
  qs('#search-form').addEventListener('submit', (e) => {
    event.preventDefault();
    fetchBook(qs('#book-search').value, true);
  });
});
