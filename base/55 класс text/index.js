// ? 1 Сделайте класс Text, который будет выполнять некоторые манипуляции над текстом. Пусть текст передается параметром конструктора.
//? 2 Сделайте метод, который вернет количество символов в тексте.
//? 3 Сделайте метод, который вернет количество букв в тексте.
//? 4 Сделайте метод, который вернет количество пробелов в тексте.
//? 5 Сделайте метод, который вернет количество символов в тексте за вычетом пробелов.
//? 6 Сделайте метод, который вернет массив слов.
//? 7 Сделайте метод, который вернет массив предложений.

class Text {
  text;

  constructor(text) {
    this.text = text;
  }

  getCharacterCount() {
    return this.text.length;
  }

  getLetterCount() {
    return this.text.replace(/[^a-zA-Z]/g, '').length;
  }

  getSpaceCount() {
    return (this.text.match(/\s/g) || []).length;
  }

  getCharacterCountWithoutSpaces() {
    return this.text.replace(/\s/g, '').length;
  }

  getWords() {
    return this.text.trim().split(/\s+/);
  }

  getSentences() {
    return this.text.split('/(?<=[.!?])s+/');
  }
}

const myText = new Text(
  `Hello world! This is an example of a JavaScript class. How's it going?`
);

console.log('Total Number of Characters:', myText.getCharacterCount());
console.log('Total Number of Letters:', myText.getLetterCount());
console.log('Total Number of Vacancies:', myText.getSpaceCount());
console.log(
  'Number of Characters Excluding Spaces:',
  myText.getCharacterCountWithoutSpaces()
);
console.log('words:', myText.getWords());
console.log('Sentences:', myText.getSentences());
