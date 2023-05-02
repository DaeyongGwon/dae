function drawStars4(lines) {
    const absLines = Math.abs(lines);
    console.log(`drawStars4(${lines})`);
    const totalLines = 2 * absLines - 1;
    let i = 0;
    while (i < totalLines) {
        let numOfStars = Math.abs(2 * i + 1);
        const numOfSpaces = Math.abs((totalLines - numOfStars) / 2);
        const spaces = ' '.repeat(numOfSpaces);
        const stars = '*'.repeat(numOfStars);
        
        console.log(spaces + stars);
        i++;
    }
}