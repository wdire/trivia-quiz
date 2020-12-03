import { shuffleArray } from '../utils';
export interface Question {
    category:string;
    type:string;
    difficulty:string;
    question:string;
    correct_answer:string;
    incorrect_answers:Array<String>;
}

export type QuestionState = Question & { answers:string[] }

export enum QuestionStatusCode {
    SUCCESS = 0,
    NOT_ENOUGH_QUESTIONS = 1,
    UNKNOWN_ERROR = 2
}

export const fetchQuestions = async (totalQuestions: number, categoryId:string, difficulty:string) => {

    let endpoint = `https://opentdb.com/api.php?amount=${totalQuestions}`;

    if(Number(categoryId) >= 9 && 32 >= Number(categoryId)){
        if(categoryId !== "any"){
            endpoint += "&category="+categoryId;
        }
    }
    
    difficulty = difficulty.toLowerCase();
    if(["easy","medium","hard"].includes(difficulty)){   
        if(difficulty !== "any"){
            endpoint += "&difficulty="+difficulty;
        }
    }

    const data = await( await fetch(endpoint) ).json();

    if(data.response_code === 0){
        // Store all "correct" and "incorrect" answers in "answers";
        let newData = data.results.map((q:Question) => {
            return{
                ...q,
                answers:shuffleArray([...q.incorrect_answers, q.correct_answer])
            };
        });
        newData = shuffleArray(newData);
        return {status:QuestionStatusCode.SUCCESS, data: newData};
    }else if(data.response_code === 1){
        return {status:QuestionStatusCode.NOT_ENOUGH_QUESTIONS};
    }else{
        return {status:QuestionStatusCode.UNKNOWN_ERROR};
    }
    
}

