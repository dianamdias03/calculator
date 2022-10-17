export function operation (num1: number, num2: number, operator: string) {
    switch (operator) {
        case '-':
            return (num1 - num2).toString();
        case '+':
            return (num1 + num2).toString();
        case 'x':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
        default:
            return '';
    }
}