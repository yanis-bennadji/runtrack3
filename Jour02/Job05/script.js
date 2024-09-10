const footer = document.getElementById('myFooter');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; 
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (documentHeight - viewportHeight)) * 100; 

    footer.style.background = `linear-gradient(to right, green ${scrollPercentage}%, black ${scrollPercentage}%)`;
});
