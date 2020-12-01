import React, { Component } from 'react'
import { AiFillSetting, AiOutlineLoading3Quarters } from "react-icons/ai";
import { Loading } from "./General.styles";
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

import { fetchAllCategories } from "../API/fetchCategories";
import { Category } from "../API/fetchCategories";

const DIFFICULTIES = ["Any", "Easy", "Medium", "Hard"];

// The desired order of category with id's of category.
// https://opentdb.com/api_category.php
const CATEGORY_ORDER = {
    "_": [
        "any", 9, 20, 21, 22, 23, 24, 25, 26, 27, 28
    ],
    "Entertainment": [
        10, 11, 12, 13, 14, 15, 16, 29, 31, 32
    ],
    "Science": [
        17, 18, 19, 30
    ]
};


interface Props {
    totalQuestions:number;
}

interface State {
    optionButton: boolean;
    categories:Array<Object>;
    optionsLoaded:boolean;
}

export default class TriviaOptions extends Component<Props, State> {

    constructor(props: any){
        super(props);

        this.state = {
            optionButton: false,
            categories: [],
            optionsLoaded:false
        };
    }

    getCategories = async () => {
        let categories:Category[] = await fetchAllCategories();
        let orderedCategories = [];

        // Order categories as in CATEGORY_ORDER
        orderedCategories = Object.entries(CATEGORY_ORDER).map(element => {
            const [categoryName, categoryOrder] = element;

            return {
                [categoryName]:
                (categoryOrder as Array<Number | String>).map((orderId:Number | String) => {
                    if(orderId === "any") return "any";
                    let k:any = categories.find( ({ id } ) => id ===  orderId);

                    //Ex: Enternatinmant: Books -> Books
                    let regex = new RegExp("("+categoryName+"|[:&])","gi");

                    k.name = k.name.replaceAll(regex, "").trim();
                    return k;
                })
            };
        });

        this.setState({categories:orderedCategories});
        this.setState({optionsLoaded:true});
    }

    writeCategories = () => {
        
        const output = (
            this.state.categories && this.state.categories.map((e, i)=>{
                const [categoryName, categoryContent] = Object.entries(e)[0];
                
                return(
                    <React.Fragment key={i}>
                        {categoryName === "_" ? "" : <TriviaOptionsMenuHeader fontSize="14px" key={categoryName}>{categoryName === "_" ? "" : categoryName}</TriviaOptionsMenuHeader>}

                        <TriviaOptionsMenuButtonGroup key={"_"+categoryName}>
                            {categoryContent.map((k:Category)=>{
                                if(typeof k === "string" && k === "any"){
                                    return(
                                        <TriviaOptionsSelect key={k}>
                                            <label>
                                                <TriviaOptionsSelectInput name="trivia-category" defaultChecked />
                                                <TriviaOptionsSelectButton>
                                                    Any
                                                </TriviaOptionsSelectButton>
                                            </label>
                                        </TriviaOptionsSelect>
                                    )
                                }
                               
                                return(
                                    <TriviaOptionsSelect key={k.id}>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-category"/>
                                            <TriviaOptionsSelectButton>
                                                {k.name}
                                            </TriviaOptionsSelectButton>
                                        </label>
                                    </TriviaOptionsSelect>
                                )
                            })}
                        </TriviaOptionsMenuButtonGroup>
                    </React.Fragment>
                )
            })
        );

        return output;
    }

    componentDidMount = () => {

    }

    handleOptionsButton = () => {
        if(!this.state.optionsLoaded){
            this.getCategories();
        }

        this.setState({optionButton:!this.state.optionButton});
    }

    handleRadioButtons = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e,"2");
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
                    <TriviaOptionsMenuWrapper active={this.state.optionButton} valHeight={525}>
                    {!this.state.optionsLoaded && (
                        <Loading height="30px">
                            <AiOutlineLoading3Quarters></AiOutlineLoading3Quarters>
                        </Loading>
                    )}

                    {this.state.optionsLoaded && (
                        
                    
                        <TriviaOptionsMenu onChange={this.handleRadioButtons}>
                            <TriviaOptionsMenuHeader fontSize="16px" style={{marginBottom:"12px"}}>Categories</TriviaOptionsMenuHeader>

                            {this.writeCategories()}

                            <TriviaOptionsMenuHeader fontSize="16px" style={{marginBottom:"12px"}}>Difficulty</TriviaOptionsMenuHeader>

                                <TriviaOptionsMenuButtonGroup>
                                    <TriviaOptionsSelect>
                                        <label>
                                            <TriviaOptionsSelectInput name="trivia-difficulty" defaultChecked />
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
                    )}
                    </TriviaOptionsMenuWrapper>
                </TriviaOptionsWrapper>      
            </>
        )
    }
}
