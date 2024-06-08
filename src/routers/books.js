import { readFileSync, writeFileSync } from 'node:fs';
import { Router } from '../../core/index.js';

const booksRouter = new Router();

booksRouter.get('/books', (request, response) => {
    const { searchParams } = new URL('http://127.0.0.1:8080' + request.url);
    const id = searchParams.get('id');

    response.writeHead(200, {
        'Content-type': 'application/json'
    });

    const DBBooks = JSON.parse(readFileSync('./src/db/books.json', 'utf-8'));

    if (id) {
        const product = DBCatalog.find(product => product.id === parseInt(id));

        if (product) {
            response.end(JSON.stringify(product));
        } else {
            response.end(JSON.stringify({
                message: 'Товар не не найден'
            }));
        }
    } else {
        response.end(JSON.stringify(DBBooks));
    }
});

export {
    booksRouter
};