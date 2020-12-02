import React from "react";
import { GlobalStyle, Wrapper, Main, StartButton } from "./App.styles";
import TriviaOptions from "./components/TriviaOptions";
import TriviaQuestions from "./components/TriviaQuestions";

const TOTAL_QUESTIONS = 10; 

enum STAGE {
    START = 0,
    INGAME = 1,
    ENDGAME = 2
}

interface IProps{
}

interface IState{
    optionCategory: string;
    optionDifficulty: string;
    gameStage:STAGE;
}

export class App extends React.Component<IProps, IState>{    

    constructor(props: IProps){
        super(props);

        
        this.state = {
            optionCategory:"any",
            optionDifficulty: "any",
            gameStage:STAGE.INGAME
        }
    }

    setOptions = (key:string, value:any) => {
        let obj = {[key]:value} as Pick<any,any>;
        this.setState(obj);
    }

    restartGame = (stage: STAGE, msg:any) => {

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
                        />
                    </>
            ) 
            break;

            case STAGE.ENDGAME: return(
                22
            )
            break;
        }
        
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