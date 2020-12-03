import React from "react";
import { GlobalStyle, Wrapper, Main, StartButton } from "./App.styles";
import TriviaOptions from "./components/TriviaOptions";
import TriviaQuestions, { AnswerObject } from "./components/TriviaQuestions";

const TOTAL_QUESTIONS = 3;

export enum STAGE {
    START = 0,
    INGAME = 1,
    ENDGAME = 2
}

interface IProps{
}

interface IState{
    optionCategory: {
        name:string;
        id:string;
    };
    optionDifficulty: string;
    gameStage:STAGE;
}

export class App extends React.Component<IProps, IState>{    
    userAnswers:AnswerObject[];

    constructor(props: IProps){
        super(props);

        this.userAnswers = [];

        this.state = {
            optionCategory:{
                name:"any",
                id:"0"
            },
            optionDifficulty: "any",
            gameStage:STAGE.START
        }
    }

    setOptions = (key:string, value:any) => {
        let obj = {[key]:value} as Pick<any,any>;
        this.setState(obj);
    }

    setUserAnswers = (userAnswers: AnswerObject[]) => {
        this.userAnswers = userAnswers;
    }

    setGameState = (stage:STAGE) => {
        this.setState({gameStage:stage});
    }

    startGame = () => {
        this.setState({gameStage:STAGE.INGAME});
    }

    renderStages = () => {
        switch(this.state.gameStage){
            case STAGE.START: return(
                <>
                    <TriviaOptions 
                        totalQuestions={TOTAL_QUESTIONS}
                        setOptions={this.setOptions}
                    />
                    <StartButton onClick={this.startGame}>Start</StartButton>
                </>
            )
            break;

            case STAGE.INGAME: return(
                    <>
                        <TriviaQuestions 
                            totalQuestions={TOTAL_QUESTIONS}
                            category={this.state.optionCategory}
                            difficulty={this.state.optionDifficulty}
                            setGameState={this.setGameState}
                            setUserAnswers={this.setUserAnswers}
                        />
                    </>
            ) 
            break;

            case STAGE.ENDGAME: return(
                <div>GAME OVER</div>
            )
            break;
        }
        
    }

    writeUserAnswers = () => {
        console.log(this.userAnswers);
    }

    render(){
        
        return (
            <>
                <GlobalStyle/>
                <Main>
                    <Wrapper>
                        <h1>Trivia Quiz</h1>
                        {
                            this.renderStages()
                        }
                    </Wrapper>
                </Main>
            </>  
        );
    }

}