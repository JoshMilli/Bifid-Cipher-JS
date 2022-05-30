// example usage of library
const app = require('./app');
const argv = process.argv.slice(2);
const fs = require('fs');

// read a word in a txt file, encrypt the word and store the encrypted word in a variable called encrypted, then write the encrypted text to a new file called encrypted.txt
//create a method called encrypt, then read a text file, encrypt the text in the file and store the contents in a variable called text, then write the encrypted text to a new file called encrypted.txt

function EncryptFile(){
  fs.readFile("PlainText.txt", 'utf8', function (err, text) {
    if (err) {
      console.log(err);
    } else {

      const encryptedText = app.bifidEncrypt(text)
      //write the encrypted text to a text file
      fs.writeFile("Encrypted.txt", encryptedText, function (err) {
        if (err) {
          console.log(err);
        }
        console.log('File successfully encrypted!');
      });
    }
  });
}

//create a method called decrypt, then read a text file, decrypt the text in the file and store the contents in a variable called text, then write the decrypted text to a new file called decrypted.txt
function DecryptFile(){
  fs.readFile("Encrypted.txt", 'utf8', function (err, text) {

    if (err) { 
      console.log(err); 
    } else {
      let DecryptedText = app.bifidDecrypt(text);
      
      if(text.length == 0){
        console.log("No text to decrypt!");
      }else{
        fs.writeFile("Decryped.txt", DecryptedText, function (err) {
          if (err) {
            console.log(err);
          }
          console.log('File successfully decrypted!');
        });
      }
      }
    })
  }



//while user input is not equal to 1, 2, or 3, print an error message, otherwise, call the appropriate method
switch(argv[0]){
    case '1':
        EncryptFile();
        break;
    case '2':
        DecryptFile();
        break;
    default:
        console.log("1 - encrypt <file>");
        console.log("2 - decrypt <file>");
        
}