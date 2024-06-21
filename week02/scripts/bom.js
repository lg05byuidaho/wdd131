document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const chapterInput = document.querySelector('#favchap');
    const chapterList = document.querySelector('#chapterList');

    addButton.addEventListener('click', () => {
        const chapter = chapterInput.value.trim();
        if (chapter === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = chapter;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            chapterList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        chapterList.appendChild(listItem);

        chapterInput.value = '';
        chapterInput.focus();
    });
});
