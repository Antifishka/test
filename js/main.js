const text = "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";

function findUniqueCharacter(text) { 
    // Розділяємо текст на окремі слова
    const words = text.split(/\s+/);
    const arrChars = [];

    for (const word of words) {
        let firstUniqueChar;
        const uniqueChars = [];

        for (const char of word) {
            // Перевіряємо, чи є символ унікальним в межах слова
            if (word.indexOf(char) === word.lastIndexOf(char)) {
                uniqueChars.push(char);
            }
        }
        
        // Зберігаємо перший унікальний символ слова
        firstUniqueChar = uniqueChars[0];
        arrChars.push(firstUniqueChar);
    }
    
    // Знаходимо перший унікальний символ серед зібраних символів
    for (const char of arrChars) {
        if (arrChars.filter((c) => c === char).length === 1) {
            return char;
        }
    }
    
    // Якщо не знайдено унікальних символів
    return 'Немає унікальних символів в тексті.';
}

// Приклад використання
const uniqueChar = findUniqueCharacter(text);
console.log('Унікальний символ:', uniqueChar);