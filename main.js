import fs from 'fs';
const content = fs.readFileSync('test.txt', { encoding: 'utf-8' });

const contentArray = content.split(' ');
var counter = 0;

for (let input of contentArray) {

    for (var i = 0; i < input.length; i++) {
        if (input[i] === '\@') {
            if (input.substring(i) === "@softwire.com") {
                counter++;
            }

        }
    }


}
console.log(counter);