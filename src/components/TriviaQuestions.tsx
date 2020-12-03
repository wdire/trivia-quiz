import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Question, QuestionState, QuestionStatusCode, fetchQuestions} from "../API/fetchQuestions";
import { Loading } from './General.styles';
import { decodeHtml } from '../utils';
import { 
    TriviaQuestionsWrapper,
    TriviaQuestion,
    TriviaAnswersGroup,
    TriviaAnswer,
    TriviaCurrentQuestion,
    TriviaNextQuestionButton,
    TriviaAnswerInput,
    TriviaAnswerButton,
    TriviaBottom,
    TriviaQuestionCategory
} from "./TriviaQuestions.styles";

interface AnswerObject{
    question:string;
    answer:string;
    correctAnswer:string;
    correct:boolean;
}

interface Props {
    totalQuestions:number;
    category:string;
    difficulty:string;

}

interface State {
    questions:QuestionState[];
    currentQuestion:number;
    questionsLoaded:boolean;
    userAnswers:AnswerObject[];
}

export default class TriviaQuestions extends Component<Props, State> {

    constructor(props: any){
        super(props);

        this.state = {
            questions:[],
            currentQuestion:1,
            questionsLoaded:false,
            userAnswers:[]
        }
    }

    componentWillMount = () => {
        this.getQuestions();
    }

    getQuestions = async () => {
        console.log(this.props);
        let result:{status:QuestionStatusCode, data?:QuestionState[]} = await fetchQuestions(this.props.category, this.props.difficulty);
        if(result.status === QuestionStatusCode.SUCCESS){
            this.setState({questions:result.data || []});
            this.setState({questionsLoaded:true});
        }else if(result.status === QuestionStatusCode.NOT_ENOUGH_QUESTIONS){

        }else if(result.status === QuestionStatusCode.UNKNOWN_ERROR){

        }
    }

    handleUserAnswer = (e:any) => {
        if(this.state.userAnswers.length === this.state.currentQuestion){
            return;
        }
        console.log(e); 
        let userAnswer = e.target.nextElementSibling.innerText;
        let correctAnswer = this.state.questions[this.state.currentQuestion-1].correct_answer;

        let correct = userAnswer === correctAnswer;

        let answerObject = {
            question:this.state.questions[this.state.currentQuestion-1].question,
            answer:userAnswer,
            correct:correct,
            correctAnswer:correctAnswer
        };

        this.setState((prevState) => ({userAnswers:[...prevState.userAnswers, answerObject]}));
    }

    handleNextQuestion = () =>{
        this.setState((prevState) => ({currentQuestion:prevState.currentQuestion+1}));
    }

    writeQuestions = () => {
        let currQuestion = this.state.questions[this.state.currentQuestion-1];
        return (
            <>
                <TriviaCurrentQuestion>Question {this.state.currentQuestion}<span style={{fontSize:"14px"}}>/{this.props.totalQuestions}</span></TriviaCurrentQuestion>
                <TriviaQuestion>{decodeHtml(currQuestion.question)}</TriviaQuestion>
                <TriviaAnswersGroup onChange={this.handleUserAnswer}>
                    {
                        currQuestion.answers.map((answer)=>{
                            return(
                                <TriviaAnswer 
                                    key={answer}
                                    correct={this.state.userAnswers ? this.state.userAnswers[this.state.currentQuestion - 1]?.correctAnswer === answer : false}
                                    userClicked={this.state.userAnswers ? this.state.userAnswers[this.state.currentQuestion - 1]?.answer === answer : false}
                                    answered={Boolean(this.state.userAnswers[this.state.currentQuestion - 1])}
                                >
                                    <label>
                                        <TriviaAnswerInput name="trivia-question"/>
                                        <TriviaAnswerButton>
                                            {decodeHtml(answer)}
                                        </TriviaAnswerButton>
                                    </label>
                                </TriviaAnswer>
                            )
                        })
                    }
                    
                </TriviaAnswersGroup>
                <TriviaBottom>
                    <TriviaQuestionCategory>{currQuestion.category}</TriviaQuestionCategory>
                    {this.state.userAnswers.length === this.state.currentQuestion ? (
                        <TriviaNextQuestionButton onClick={this.handleNextQuestion}>Next</TriviaNextQuestionButton>
                    ) : ""}
                    
                </TriviaBottom>
            </>
        );
    }

    render() {
        return (
            <>
                <TriviaQuestionsWrapper>
                    {!this.state.questionsLoaded && (
                        <Loading height="30px">
                            <AiOutlineLoading3Quarters></AiOutlineLoading3Quarters>
                        </Loading>
                    )}
                    {this.state.questionsLoaded && 
                        this.writeQuestions()
                    }
                </TriviaQuestionsWrapper>
            </>
        )
    }
}
