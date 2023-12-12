export type Question = {
    id: number,
    question: string,
    options: {id: number, optionText: string}[],
    correctAnswer: 0 | 1 | 2 | 3;
    answered: boolean;
    actualQuestion: boolean
}