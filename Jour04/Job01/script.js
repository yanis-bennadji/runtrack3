document.getElementById('button').addEventListener('click', function() {
    fetch('expressions.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('text').innerText = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
