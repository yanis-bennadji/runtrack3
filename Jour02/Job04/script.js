const textarea = document.getElementById('keylogger');

document.addEventListener('keydown', (keyEvent) => {
    if (keyEvent.key.length === 1 && /^[a-zA-Z]$/.test(keyEvent.key)) {
        textarea.value += keyEvent.key;
    }
});
