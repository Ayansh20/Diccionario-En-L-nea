// Array of words (already provided above)
const words = [
    // (100 word objects go here)
    // For example:
    { word: "Amor", meaning: "Love", pronunciation: "Same across all Spanish-speaking countries" },
    //{ word: "Amor", meaning: "Love", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Casa", meaning: "House", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Perro", meaning: "Dog", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Gato", meaning: "Cat", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Agua", meaning: "Water", pronunciation: "Same across all Spanish-speaking countries" },
{ word: "Aventura", meaning: "Adventure", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Bonito", meaning: "Pretty", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Cielo", meaning: "Sky", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Día", meaning: "Day", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Escuela", meaning: "School", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Familia", meaning: "Family", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Guitarra", meaning: "Guitar", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Historia", meaning: "History", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Inteligente", meaning: "Intelligent", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Joven", meaning: "Young", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Kilo", meaning: "Kilogram", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Luz", meaning: "Light", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Mañana", meaning: "Morning", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Nieve", meaning: "Snow", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Oso", meaning: "Bear", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Playa", meaning: "Beach", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Querido", meaning: "Dear", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Ratón", meaning: "Mouse", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Sol", meaning: "Sun", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Tierra", meaning: "Earth", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Uva", meaning: "Grape", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Viento", meaning: "Wind", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Zapato", meaning: "Shoe", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Amigo", meaning: "Friend", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Bebé", meaning: "Baby", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Coche", meaning: "Car", pronunciation: "In Spain, 'coche' is used, while in Latin America 'carro' or 'auto' is more common" },
    { word: "Dedo", meaning: "Finger", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Elefante", meaning: "Elephant", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Fuego", meaning: "Fire", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Gris", meaning: "Gray", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Hombre", meaning: "Man", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Isla", meaning: "Island", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Jardín", meaning: "Garden", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Kilómetro", meaning: "Kilometer", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "León", meaning: "Lion", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Mujer", meaning: "Woman", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Niño", meaning: "Boy", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Ojo", meaning: "Eye", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Palabra", meaning: "Word", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Química", meaning: "Chemistry", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Río", meaning: "River", pronunciation: "Same across all Spanish-speaking countries" },
    { word: "Salud", meaning: "Health", pronunciation: "Same across all Spanish-speaking countries" },
];

// Function to display the words
function displayWords() {
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = ""; // Clear any existing content

    words.forEach(entry => {
        const wordItem = document.createElement("div");
        wordItem.className = "word-item";

        wordItem.innerHTML = `
            <h3>${entry.word}</h3>
            <p><strong>Meaning:</strong> ${entry.meaning}</p>
            <p><strong>Pronunciation:</strong> ${entry.pronunciation}</p>
        `;

        wordList.appendChild(wordItem);
    });
}

// Function to search for a word
function searchWord() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredWords = words.filter(entry =>
        entry.word.toLowerCase().includes(searchInput)
    );

    const wordList = document.getElementById("word-list");
    wordList.innerHTML = ""; // Clear existing results

    if (filteredWords.length > 0) {
        filteredWords.forEach(entry => {
            const wordItem = document.createElement("div");
            wordItem.className = "word-item";

            wordItem.innerHTML = `
                <h3>${entry.word}</h3>
                <p><strong>Meaning:</strong> ${entry.meaning}</p>
                <p><strong>Pronunciation:</strong> ${entry.pronunciation}</p>
            `;

            wordList.appendChild(wordItem);
        });
    } else {
        wordList.innerHTML = "<p>No words found.</p>";
    }
}

// Initialize and display all words on page load
displayWords();
