import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Question, QuestionState, QuestionStatusCode, fetchQuestions} from "../API/fetchQuestions";
import { BlueButton, Loading } from './General.styles';
import { decodeHtml } from '../utils';
import { GameStats, STAGE } from "../App";
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
    TriviaQuestionCategory,
    TriviaErrorDesc
} from "./TriviaQuestions.styles";

export interface AnswerObject{
    question:string;
    answer:string;
    correctAnswer:string;
    correct:boolean;
}

interface ErrorObject{
    error:boolean;
    desc:string;
}

interface Props {
    totalQuestions:number;
    category: {
        name:string;
        id:string;
    };
    difficulty:string;
    setGameState(stage: STAGE):void;
    setGameStats(gameStats: GameStats):void;
}

interface State {
    questions:QuestionState[];
    currentQuestion:number;
    questionsLoaded:boolean;
    userAnswers:AnswerObject[];
    error:ErrorObject;
    score:number;
}

export default class TriviaQuestions extends Component<Props, State> {

    constructor(props: any){
        super(props);

        this.getQuestions();

        this.state = {
            questions:[],
            currentQuestion:1,
            questionsLoaded:false,
            userAnswers:[],
            error:{
                error:false,
                desc:""
            },
            score:0
        }
    }

    getQuestions = async () => {
        let result:{status:QuestionStatusCode, data?:QuestionState[]} = await fetchQuestions(this.props.category.id, this.props.difficulty);
        if(result.status === QuestionStatusCode.SUCCESS){
            this.setState({questions:result.data || []});
            this.setState({questionsLoaded:true});
        }else if(result.status === QuestionStatusCode.NOT_ENOUGH_QUESTIONS){
            this.setState({error:{
                error:true,
                desc:`There are not enough question with options <div>Category <b>${this.props.category.name}</b> and Difficulty <b>${this.props.difficulty.charAt(0).toUpperCase() + this.props.difficulty.slice(1)}</b>.</div> Please try changing one of these.`
            }});
        }else if(result.status === QuestionStatusCode.UNKNOWN_ERROR){
            this.setState({error:{
                error:true,
                desc:`There is a unknown error. Please try again after a time, or message me about this error.`
            }});
        }
    }

    handleUserAnswer = (e:any) => {
        //If still on the same question(didn't pressed next yet), return
        if(this.state.userAnswers.length === this.state.currentQuestion){
            return;
        }

        let userAnswer = e.target.nextElementSibling.innerText;
        let correctAnswer = this.state.questions[this.state.currentQuestion-1].correct_answer;

        let correct = userAnswer === correctAnswer;

        let answerObject = {
            question:this.state.questions[this.state.currentQuestion-1].question,
            answer:userAnswer,
            correct:correct,
            correctAnswer:correctAnswer
        };

        //Increment score if correct
        if(correct){
            this.setState((prevState) => ({score:prevState.score + 10}));
        }

        // Save user answers
        this.setState((prevState) => ({userAnswers:[...prevState.userAnswers, answerObject]}));

    }

    handleNextQuestion = () =>{

        const nextQuestion = this.state.currentQuestion + 1;

        if(nextQuestion > this.props.totalQuestions){
            this.props.setGameStats({
                score:this.state.score,
                userAnswers:this.state.userAnswers
            });

            this.props.setGameState(STAGE.ENDGAME);
        }else{
            this.setState((prevState) => ({currentQuestion:nextQuestion}));
        }
    }

    writeQuestions = () => {
        let currQuestion = this.state.questions[this.state.currentQuestion-1];
        return (
            <>
                <TriviaCurrentQuestion>
                    <div>Question {this.state.currentQuestion}<span style={{fontSize:"14px"}}>/{this.props.totalQuestions}</span></div>
                    <div>Score: {this.state.score}</div>
                </TriviaCurrentQuestion>
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
                        <>
                            <TriviaNextQuestionButton onClick={this.handleNextQuestion}>Next</TriviaNextQuestionButton>
                        </>
                    ) : null}
                    
                </TriviaBottom>
            </>
        );
    }

    render() {
        return (
            <>
                <TriviaQuestionsWrapper>
                    {!this.state.error.error && !this.state.questionsLoaded && (
                        <Loading height="30px">
                            <AiOutlineLoading3Quarters></AiOutlineLoading3Quarters>
                        </Loading>
                    )}
                    
                    {!this.state.error.error && this.state.questionsLoaded && 
                        this.writeQuestions()
                    }

                    {this.state.error.error && (
                        <>
                            <TriviaErrorDesc dangerouslySetInnerHTML={{__html:this.state.error.desc}}></TriviaErrorDesc>
                            <BlueButton onClick={() => {this.props.setGameState(STAGE.START)}}>Go to Start</BlueButton>
                        </>
                    )}
                </TriviaQuestionsWrapper>
            </>
        )
    }
}
