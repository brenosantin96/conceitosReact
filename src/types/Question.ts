export type Question = {
    id: number,
    question: string,
    options: {id: number, optionText: string}[],
    correctAnswer: 1 | 2 | 3 | 4;
    answered: boolean;
    actualQuestion: boolean
}