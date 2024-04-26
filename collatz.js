function collatz(number) {
    let array = [];
    let steps = 0;
    array.push(number);
    while (number != 1) {
        
        if(number % 2 == 0){
            number = number / 2;
        }else {
            number = (number * 3) + 1;
        }
        steps++;
        array.push(number);
    }
    return {steps, array}
}