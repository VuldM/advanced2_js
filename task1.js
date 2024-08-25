/**
 Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения
 списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет
 собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.
Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
 Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.
 Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false
в зависимости от того, есть ли такая книга в списке или нет.
Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.
 Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
 */
 class Library {
    #books;
    constructor(books) {
        if (new Set(books).size!== books.length) {
            throw new Error("Duplicate book titles are not allowed");
        }
        this.#books = books;
    }
    get allBooks() {
        return [...this.#books];
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Book '${title}' already exists`);
        }
        this.#books.push(title);
        return this.#books;
    }
    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error(`Book '${title}' does not exist`);
        }
        this.#books = this.#books.filter(book => book!== title);
        return this.#books;
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Test the Library class
const library = new Library(['Book 1', 'Book 2', 'Book 3']);
console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3']
console.log(library.addBook('Book 4')); // ['Book 1', 'Book 2', 'Book 3', 'Book 4']
console.log(library.removeBook('Book 2')); // ['Book 1', 'Book 3', 'Book 4']
console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3']
console.log(library.hasBook('Book 2')); // false
console.log(library.addBook('Book 2')); // Error: Book 'Book 2' already exists