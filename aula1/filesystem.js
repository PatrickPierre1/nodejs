const { error } = require('console');
let { readFile, writeFile } = require('fs');

writeFile("arquivo.txt",
    "Terceiro periodo de sistemas para internet",
    (error) => {
        if (error) {
            throw error;
        } else {
            console.log('Salvo com sucesso!');
        }
    }
);

readFile("arquivo.txt", "utf-8", (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto);
    }
});
