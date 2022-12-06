function digitalDecipher(eMessage, key) {
    const alphabet = new Map([
        [1, "a"],
        [2, "b"],
        [3, "c"],
        [4, "d"],
        [5, "e"],
        [6, "f"],
        [7, "g"],
        [8, "h"],
        [9, "i"],
        [10, "j"],
        [11, "k"],
        [12, "l"],
        [13, "m"],
        [14, "n"],
        [15, "o"],
        [16, "p"],
        [17, "q"],
        [18, "r"],
        [19, "s"],
        [20, "t"],
        [21, "u"],
        [22, "v"],
        [23, "w"],
        [24, "x"],
        [25, "y"],
        [26, "z"]
    ]);
    
    var text = "";
    const Key = key.toString().split("");
    for (var i = 0; i < eMessage.length; i++) {
        text += alphabet.get(eMessage[i] - Key[i % Key.length]);
    }
    
    return text;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939))
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100))
