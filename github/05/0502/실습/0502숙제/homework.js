function drawStars(lines) {
    console.log(`drawStars(${lines})`);
    for (let i = 1; i <= lines; i++) {
        let line = '*'.repeat(lines-i) + ' '.repeat(i)
        console.log(line);
    }
}
function drawStars2(lines) {
    console.log(`drawStars2(${lines})`);
    for (let i = 1; i <= lines; i++) {
        const spaces = ' '.repeat(lines - i);
        const stars = '*'.repeat(i);
        console.log(`${spaces}${stars}`);
    }
}
function drawStars3(lines) {
    console.log(`drawStars3(${lines})`);
    for (let i = 1; i <= lines; i++) {
        let spaces = ' '.repeat(lines - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}
function drawStars4(lines) {
    console.log(`drawStars4(${lines})`);
    const totalLines = 2 * lines - 1;
    for (let i = 0; i < totalLines; i++) {
        const numOfStars = i < lines ? 2 * i + 1 : 2 * (totalLines - i) - 1;
        const numOfSpaces = (totalLines - numOfStars) / 2;
        const spaces = ' '.repeat(numOfSpaces);
        const stars = '*'.repeat(numOfStars);
        console.log(spaces + stars);
    }
}
function drawStars5(lines) {
    console.log(`drawStars5(${lines})`);
    for(let i = 0 ; i < lines; i ++) {
        let line= '';
        line += ' '.repeat(lines - i);
        line += '*'.repeat(lines);
        console.log(line);
    }
}
