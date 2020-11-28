import React from "react";
import { GlobalStyle, Wrapper, Main, StartButton } from "./App.styles";
import TriviaOptions from "./components/TriviaOptions";

const TOTAL_QUESTIONS = 10; 

interface IProps{
}

interface IState{
}

export class App extends React.Component<IProps, IState>{    

    constructor(props: IProps){
        super(props);
        this.state = {
            questionOptions:false
        }
    }

    render(){
        return (
            <>
                <GlobalStyle/>
                <Main>
                    <Wrapper>
                        <h1>Trivia Quiz</h1>
                        <TriviaOptions totalQuestions={TOTAL_QUESTIONS}/>
                        <StartButton>Start</StartButton>
                    </Wrapper>
                </Main>
            </>  
        );
    }

}