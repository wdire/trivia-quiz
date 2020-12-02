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
}

export default class TriviaQuestions extends Component<Props, State> {

    constructor(props: any){
        super(props);

        this.state = {
            questions:[],
            currentQuestion:0,
            questionsLoaded:false
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

    writeQuestions = () => {
        let currQuestion = this.state.questions[this.state.currentQuestion];
        return (
            <>
                <TriviaCurrentQuestion>Question {this.state.currentQuestion}<span style={{fontSize:"14px"}}>/{this.props.totalQuestions}</span></TriviaCurrentQuestion>
                <TriviaQuestion>{decodeHtml(currQuestion.question)}</TriviaQuestion>
                <TriviaAnswersGroup>
                    {
                        currQuestion.answers.map((answer)=>{
                            return(
                                <TriviaAnswer>
                                    <TriviaAnswerInput name="trivia-question"/>
                                    <TriviaAnswerButton>
                                        {decodeHtml(answer)}
                                    </TriviaAnswerButton>
                                </TriviaAnswer>
                            )
                        })
                    }
                    
                </TriviaAnswersGroup>
                <TriviaBottom>
                    <TriviaQuestionCategory>{currQuestion.category}</TriviaQuestionCategory>
                    <TriviaNextQuestionButton>Next</TriviaNextQuestionButton>
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
