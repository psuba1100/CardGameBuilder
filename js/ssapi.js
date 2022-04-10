export function Shuffle(arrayToShuffle) {
    for (let i = arrayToShuffle.length - 1; i > 0; i--){
        let randomPosition = Math.floor(Math.random() * (i + 1));
        let temp = arrayToShuffle[i];

        arrayToShuffle[i] = arrayToShuffle[randomPosition];
        arrayToShuffle[randomPosition] = temp;
    }

    return arrayToShuffle
}

export function Random(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function RandomBi(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function Double(n) {
    return n * 2;
}