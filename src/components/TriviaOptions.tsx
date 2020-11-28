import React, { Component } from 'react'
import { AiFillSetting } from "react-icons/ai";
import { 
    TriviaOptionsWrapper, 
    TriviaOptionsButton, 
    TriviaOptionsTextWrapper, 
    TriviaOptionsMenuWrapper, 
    TriviaOptionsMenu, 
    TriviaOptionsSelect, 
    TriviaOptionsSelectInput, 
    TriviaOptionsSelectButton,
    TriviaOptionsMenuButtonGroup,
    TriviaOptionsMenuHeader
} from './TriviaOptions.styles';

interface Props {
    totalQuestions:number;
}

interface State {
    optionButton: boolean;
    optionsMenuHeight: number | undefined;
}

export default class TriviaOptions extends Component<Props, State> {
    constructor(props: any){
        super(props);

        this.state = {
            optionButton: true,
            optionsMenuHeight: 0
        };
    }

    componentDidMount = () => {
        let height = document.querySelector(".optionsMenu")?.scrollHeight;
        this.setState({optionsMenuHeight:height});
    }

    handleOptionsButton = () => {
        this.setState({optionButton:!this.state.optionButton});
    }

    render() {
        return (
            <>
                <TriviaOptionsWrapper>
                    <TriviaOptionsTextWrapper>
                        <div>{this.props.totalQuestions} Questions</div>
                        <TriviaOptionsButton active={this.state.optionButton} onClick={this.handleOptionsButton}>
                            <AiFillSetting/> 
                        </TriviaOptionsButton>
                    </TriviaOptionsTextWrapper>
                    <TriviaOptionsMenuWrapper active={this.state.optionButton} valHeight={this.state.optionsMenuHeight} className="optionsMenu">
                        <TriviaOptionsMenu>
                            <TriviaOptionsMenuHeader fontSize="16px" style={{marginBottom:"12px"}}>Categories</TriviaOptionsMenuHeader>

                            <TriviaOptionsMenuButtonGroup>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Any
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            General Knowledge
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Sports
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            History
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Animals
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Vehicals
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Art
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Celebrities
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                            </TriviaOptionsMenuButtonGroup>

                            <TriviaOptionsMenuHeader fontSize="14px">Entertainment</TriviaOptionsMenuHeader>
                            <TriviaOptionsMenuButtonGroup>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Books
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Films
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Music
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                            </TriviaOptionsMenuButtonGroup>

                            <TriviaOptionsMenuHeader fontSize="14px">Science</TriviaOptionsMenuHeader>
                            <TriviaOptionsMenuButtonGroup>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Nature
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Computers
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Mathematics
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                            </TriviaOptionsMenuButtonGroup>

                            <TriviaOptionsMenuButtonGroup>

                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Sports
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            History
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Art
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Celebrities
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Celebrities
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Celebrities
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Art
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Animals
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                                <TriviaOptionsSelect>
                                    <label>
                                        <TriviaOptionsSelectInput name="trivia-category"/>
                                        <TriviaOptionsSelectButton>
                                            Vehicals
                                        </TriviaOptionsSelectButton>
                                    </label>
                                </TriviaOptionsSelect>
                            </TriviaOptionsMenuButtonGroup>
                            
                            <TriviaOptionsMenuHeader fontSize="16px" style={{marginBottom:"12px"}}>Difficulty</TriviaOptionsMenuHeader>

                                <TriviaOptionsMenuButtonGroup>
                                    <TriviaOptionsSelect>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-difficulty"/>
                                            <TriviaOptionsSelectButton>
                                                Any
                                            </TriviaOptionsSelectButton>
                                        </label>
                                    </TriviaOptionsSelect>
                                    <TriviaOptionsSelect>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-difficulty"/>
                                            <TriviaOptionsSelectButton>
                                                Easy
                                            </TriviaOptionsSelectButton>
                                        </label>
                                    </TriviaOptionsSelect>
                                    <TriviaOptionsSelect>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-difficulty"/>
                                            <TriviaOptionsSelectButton>
                                                Medium
                                            </TriviaOptionsSelectButton>
                                        </label>
                                    </TriviaOptionsSelect>
                                    <TriviaOptionsSelect>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-difficulty"/>
                                            <TriviaOptionsSelectButton>
                                                Hard
                                            </TriviaOptionsSelectButton>
                                        </label>
                                    </TriviaOptionsSelect>
                                </TriviaOptionsMenuButtonGroup>

                        </TriviaOptionsMenu>
                    </TriviaOptionsMenuWrapper>
                </TriviaOptionsWrapper>      
            </>
        )
    }
}
