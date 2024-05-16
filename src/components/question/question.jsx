
import { useState, useEffect, memo } from 'react';

import styles from './question.module.css';

const Question = ( { question, questionNumber, onOptionSelect, selectedOptionValue} ) => {

    const [ selectedOption, setSelectedOption ] = useState(-1)

    useEffect(()=>{

        setSelectedOption(selectedOptionValue);

    },[selectedOptionValue])

    const isActive = (answerIndex) => {
        return answerIndex === selectedOption;
    }
    const handleSelect = (index) => {
        onOptionSelect(index);
        setSelectedOption(index)
    }

    return (
        <div className={styles?.['question-container']}>
            <div className="question-info">
                <h6>Question {questionNumber}</h6>
                <h4>{question.text}</h4>
                <ul className={styles?.['answers']}>
                    {
                        question?.options.map((option, index) => {
                            return (
                                <li
                                    className={`answer ${isActive(index) ? styles?.['active'] : ''}`}
                                    key={index}
                                    onClick={() => { handleSelect(index) }}
                                >
                                    {option}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default memo(Question);