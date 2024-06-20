import { readFileSync } from 'node:fs';
import { Router, DBJson } from '../../core/index.js';

const booksRouter = new Router();

booksRouter.get('/books', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    });

    const DBBooks = new DBJson('./src/db/books.json');

    response.end(JSON.stringify(DBBooks.getAll()));
});

export {
    booksRouter
};

// написать post функцию !!! 