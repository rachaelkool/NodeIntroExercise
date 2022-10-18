const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('ERROR:', err);
            process.exit(1)
        } else {
            console.log('DATA...', data)
        }
    })
}


// async function webCat(url) {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             console.log('ERROR:', err);
//             process.exit(1)
//         } else {
//             let res = await axios.get (url)
//             console.log('DATA...', res.data)
//         }
//     })
// }

async function webCat(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
      } catch (err) {
        console.log('ERROR:', err);
        process.exit(1)
      }
}


let path = process.argv[2];

if (path.slice(0, 4) !== 'http') {
    cat(path)
} else {
    webCat(path)
}
