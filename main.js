import fs from 'fs';
const content = fs.readFileSync('test.txt', { encoding: 'utf-8' });

//another way is 
//const content=fs.readFileSync('test.txt);
//console.log(content.toString());
//read the file content to string

const contentArray = content.split(' ');
var counter = 0;
const emailAddRegExp = /(@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
const domainRegExp = /\@softwire\.com\b/;
//const domainRegExp = /@softwire\.com\b/gi;
//  /g  global, all matches, not the first match
//  /i  insensitive, case insensitive  \b word boundary

for (let input of contentArray) {

    if (input.match(emailAddRegExp) && input.match(domainRegExp)) {
        console.log(input.match(domainRegExp));
        counter++;
    }

}
console.log(counter);