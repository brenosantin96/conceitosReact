import { Question } from "@/types/Question";

export const DataQuestions: Question[] = [

    {
        id: 1,
        question: "Qual o maior animal mamífero do mundo?",
        options: [
            { id: 1, optionText: "Tigre" },
            { id: 2, optionText: "Elefante" },
            { id: 3, optionText: "Macaco" },
            { id: 4, optionText: "Baleia" },
        ],
        correctAnswer: 4,
        answered: false,
        actualQuestion: true,
        
    },
    {
        id: 2,
        question: "Qual é o animal mais rápido do mundo?",
        options: [
            { id: 1, optionText: "Leão" },
            { id: 2, optionText: "Guepardo" },
            { id: 3, optionText: "Cavalo" },
            { id: 4, optionText: "Pombo" },
        ],
        correctAnswer: 2,
        answered: false,
        actualQuestion: false,
        
    },
    {
        id: 3,
        question: "Quantos tentáculos tem um polvo?",
        options: [
            { id: 1, optionText: "Seis" },
            { id: 2, optionText: "Oito" },
            { id: 3, optionText: "Dez" },
            { id: 4, optionText: "Doze" },
        ],
        correctAnswer: 2,
        answered: false,
        actualQuestion: false,
        
    },
    {
        id: 4,
        question: "Qual é o animal símbolo da Austrália?",
        options: [
            { id: 1, optionText: "Canguru" },
            { id: 2, optionText: "Koala" },
            { id: 3, optionText: "Diabo da Tasmânia" },
            { id: 4, optionText: "Dingo" },
        ],
        correctAnswer: 1,
        answered: false,
        actualQuestion: false,
        
    },
    {
        id: 5,
        question: "Quanto tempo vive uma tartaruga em média?",
        options: [
            { id: 1, optionText: "50 anos" },
            { id: 2, optionText: "100 anos" },
            { id: 3, optionText: "150 anos" },
            { id: 4, optionText: "200 anos" },
        ],
        correctAnswer: 3,
        answered: false,
        actualQuestion: false,
        
    },
];
