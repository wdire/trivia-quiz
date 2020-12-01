import React, { Component } from 'react'
import { Question, QuestionStatusCode, fetchQuestions} from "../API/fetchQuestions";

interface Props {
    category:string;
    difficulty:string;
}

interface State {
    questions:Array<Question> | undefined;
}

export default class TriviaQuestions extends Component<Props, State> {

    constructor(props: any){
        super(props);

        this.getQuestions();

        this.state = {
            questions:[]
        }
    }

    getQuestions = async () => {
        console.log(this.props);
        let result:{status:QuestionStatusCode, data?:Array<Question>} = await fetchQuestions(this.props.category, this.props.difficulty);
        if(result.status === QuestionStatusCode.SUCCESS){
            this.setState({questions:result.data});
            console.log(result.data);
        }else if(result.status === QuestionStatusCode.NOT_ENOUGH_QUESTIONS){
            
        }else if(result.status === QuestionStatusCode.UNKNOWN_ERROR){

        }
    }

    render() {
        return (
            <>
                <h1>QUESTIONS</h1>   
            </>
        )
    }
}
