var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowerWord = '';
var position = [];
var height = [];
var heighter = 0;
var area = 0;

function designerPdfViewer(h, word) {
    for(let i = 0; i <= h.length; i++) {
        if(h[i] < 1 || h[i] > 7) return -1; // Incorrect input
    }

    if(word.length > 7) return -2; // Word contains no more than 10 letters

    lowerWord = word.toLowerCase(); // It puts words in lowercase

    for(let i = 0; i < lowerWord.length; i++) {
        let index = letters.indexOf(lowerWord[i]);

        while(index != -1) {
            position.push(index);
            index = letters.indexOf(lowerWord[i], index + 1);
        }
        height[i] = h[position[i]];
    }
    height.sort();
    heighter = height[height.length - 1];

    area = lowerWord.length * heighter; // Calculate the area of the rectangle

    return area;
}

designerPdfViewer([1, 3, 1, 3, 6, 4, 1, 3, 6, 5, 5, 2, 5, 4, 3, 2, 7, 2, 5, 6, 5, 6, 4, 2, 5, 7], 'kratoz');

console.log('Word: ' + lowerWord);
console.log('Position: ' + position);
console.log('height: ' + height);
console.log('heighter: ' + heighter);
console.log('Area: ' + area);