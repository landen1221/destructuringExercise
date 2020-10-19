function raceResults([first, second, third, ...rest]) {
    return {
        first,
        second,
        third,
        rest
    }
}

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))