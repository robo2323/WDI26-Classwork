document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#word').addEventListener('input', async (e) => {
        const word = e.target.value;

        const reversedWord = await fetch('/reverse', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                word: word
            })
        }).then((response) => response.text());

        document.querySelector('#reversed-word').textContent = reversedWord
    })
})