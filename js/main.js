const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const text = e.currentTarget.elements.text.value;

    if (text === '') {
        alert('Введіть текст для пошуку унікального символа!')
    };

    // Приклад використання
    const uniqueSym = findUniqueSymbol(text);
    console.log('Унікальний символ:', uniqueSym);

    e.currentTarget.reset();
}

function findUniqueSymbol(text) { 
    // Розділяємо текст на окремі слова
    const words = text.split(/\s+/);
    const arrSyms = [];

    for (const word of words) {
        let firstUniqueSym;
        const uniqueSyms = [];

        for (const sym of word) {
            // Перевіряємо, чи є символ унікальним в межах слова
            if (word.indexOf(sym) === word.lastIndexOf(sym)) {
                uniqueSyms.push(sym);
            }
        }
        
        // Зберігаємо перший унікальний символ слова
        firstUniqueSym = uniqueSyms[0];
        arrSyms.push(firstUniqueSym);
    }
    
    // Знаходимо перший унікальний символ серед зібраних символів
    for (const sym of arrSyms) {
        if (arrSyms.filter((s) => s === sym).length === 1) {
            return sym;
        }
    }
    
    // Якщо не знайдено унікальних символів
    return 'Немає унікальних символів в тексті.';
};