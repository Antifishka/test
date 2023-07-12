const form = document.querySelector('.search-form');
const symbolOutput = document.querySelector('.unique-symbol');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const text = e.currentTarget.elements.text.value;

    if (text === '') {
        return alert('Введіть текст для пошуку унікального символа!');
    }

    // Приклад використання
    const uniqueSym = findUniqueSymbol(text);
    symbolOutput.textContent = uniqueSym;

    e.currentTarget.reset();
}

function findUniqueSymbol(text) { 
    // Розділяємо текст на окремі слова
    const words = text.split(/\s+/);
    const arrSyms = [];

    for (const word of words) {
        const uniqueSyms = [];

        for (const sym of word) {
            // Перевіряємо, чи є символ унікальним в межах слова
            if (word.indexOf(sym) === word.lastIndexOf(sym)) {
                uniqueSyms.push(sym);
            }
        }
        
        // Зберігаємо перший унікальний символ слова
        const firstUniqueSym = uniqueSyms[0];
        arrSyms.push(firstUniqueSym);
    }
    
    // Знаходимо перший унікальний символ серед зібраних символів
    for (const sym of arrSyms) {
        if (sym?.length > 0 && arrSyms.indexOf(sym) === arrSyms.lastIndexOf(sym)) {
            return sym;
        }
    }
    
    // Якщо не знайдено унікальних символів
    return 'немає унікальних символів в тексті';
}