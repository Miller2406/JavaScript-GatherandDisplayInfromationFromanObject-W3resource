// Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books.

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
        console.log(`You're already read "${library[i].title}" by ${library[i].author}`);
    } else {
        console.log(`You're not read "${library[i].title}"  by ${library[i].author}`);
    }

}

