
class CompareNumber{
    static compare(input, answer){
        const inputs = input.split('');
        const answers = answer.toString().split('');

        const rightDigits = inputs.filter( c => answers.includes(c)).length;
        const x = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;
        const y = rightDigits - x;

        return `${x}A${y}B`
    }
}

module.exports = CompareNumber;