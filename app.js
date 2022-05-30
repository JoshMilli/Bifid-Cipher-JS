//table is the 'key' where the length should be = to 25 char in length
//indexes is the 'size of the table' where the length should be = to 5 char in length
const table = 'BGWKZQPNDSIOAXEFCLUMTHYVR';
const indexes = '12345';

//encryption method
function bifidEncrypt(word) {
    if (!okWord(word)) {
        console.log('Invalid word');
        // should have some explanatory error messages
        return '';
    }
    let row = '';
    let col = '';
    let tempRow = '';
    let encrypted = '';

    word = word.toUpperCase();

    // first find the row and column for given letters
    for (let i = 0; i < word.length; i++) {
        let idx = table.indexOf(word.charAt(i));
        row += indexes.charAt(idx / 5);
        col += indexes.charAt(idx % 5);
    }

    // combine the row and col
    tempRow = row + col;

    // find letters for the combined rows
    for (let i = 0; i < tempRow.length; i += 2) {
        encrypted += table.charAt((parseInt(tempRow.charAt(i)) - 1) *
            5 + parseInt(tempRow.charAt(i + 1) - 1));
    }

    // return encrypted word
    return encrypted;
}

//decryption method
function bifidDecrypt(word) {
    if (!okWord(word)) {
        // should have some explanatory error messages
        return '';
    }
    let crow = '';
    let row = '';
    let col = '';
    let decrypted = '';

    word = word.toUpperCase();

    // find numbers from the table
    for (let i = 0; i < word.length; i++) {
        let idx = table.indexOf(word.charAt(i));
        crow += indexes.charAt(idx / 5) + indexes.charAt(idx % 5);
    }

    // create row and col from numbers
    row = crow.substring(0, crow.length / 2);
    col = crow.substring(crow.length / 2);

    // find chars from table
    for (let i = 0; i < row.length; i++) {
        decrypted += table.charAt((parseInt(row.charAt(i)) - 1) *
            5 + parseInt(col.charAt(i) - 1));
    }

    // return decrypted word
    return decrypted;
}


// Basic checks of the input
function okWord(word) {
    if (word === undefined || word === '') {
        return false;
    }
    if ((/[^BGWKZQPNDSIOAXEFCLUMTHYVR]/i.test(word))) {
        return false;
    }
    return true;
}

module.exports = {
    bifidDecrypt,
    bifidEncrypt
}