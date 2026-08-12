let responseTime: number[] = [200, 404, 500];

function greet(code: number[]): number[] {
    return code.filter(function (codes: number): boolean {
        return codes >= 400;
    });
}

console.log(greet(responseTime));
console.log(greet([400]));

