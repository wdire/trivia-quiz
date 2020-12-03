import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { GlobalStyle, Wrapper, Main, StartButton, QuestionProgress, QuestionCorrect, QuestionWrong, EndHeadText, RestartGameButton, EndScore } from "./App.styles";
import TriviaOptions from "./components/TriviaOptions";
import TriviaQuestions, { AnswerObject } from "./components/TriviaQuestions";

const TOTAL_QUESTIONS = 10;

export enum STAGE {
    START = 0,
    INGAME = 1,
    ENDGAME = 2
}

export interface GameStats{
    score:number;
    userAnswers:AnswerObject[];
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
    gameStats:GameStats;

    constructor(props: IProps){
        super(props);

        this.gameStats = {
            score:0,
            userAnswers:[]
        };

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

    setGameStats = (gameStats: GameStats) => {
        this.gameStats = gameStats;
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
                            setGameStats={this.setGameStats}
                        />
                    </>
            ) 
            break;

            case STAGE.ENDGAME: return(
                <>
                    {this.writeGameStats()}
                    <RestartGameButton onClick={()=>{this.setGameState(STAGE.START)}}>Play Again</RestartGameButton>
                </>
            )
            break;  
        }
        
    }

    writeGameStats = () => {
        let correctAnswers = 0;
        return(
            <>
                <EndHeadText>Your Score</EndHeadText>
                <EndScore>{this.gameStats.score}</EndScore>
                <EndHeadText>Your Progress</EndHeadText>
                <QuestionProgress>
                    {this.gameStats.userAnswers && this.gameStats.userAnswers.map((answer:AnswerObject, index)=>{
                        if(answer.correct){
                            correctAnswers++;
                            return(
                                <QuestionCorrect key={index}>
                                    <AiFillCheckCircle/>
                                </QuestionCorrect>
                            )
                        }else{
                            return(
                                <QuestionWrong key={index}>
                                    <AiFillCloseCircle/>
                                </QuestionWrong>
                            );
                        }
                    })}
                    
                </QuestionProgress>

                <div>Congrats! You guessed {correctAnswers} out of {TOTAL_QUESTIONS} questions correctly, wanna play again ?</div>
            </>
        );
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