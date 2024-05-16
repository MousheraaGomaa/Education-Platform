import { useState, useEffect, useCallback } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";

import Question from '../../components/question/question';
import styles from './quiz.module.css'

const Quiz = () => {

    const [questions] = useState([
        {
            id: 1,
            text: "From these choices, what're from ux principles?",
            options: [
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            text: "From these choices, what're from Es6 features?",
            options: [
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography"
            ],
            correctAnswer: 4
        },
        {
            id: 3,
            text: "From these choices, what're from oop principles?",
            options: [
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography",
                "User experience design, Testing, Accessibity and Typography"
            ],
            correctAnswer: 2
        }
    ]);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    useEffect(() => {
        let initialAnswers = []
        questions.forEach((question) => {
            initialAnswers.push({ id: question.id, selectedAnswer: -1 })
        })
        setAnswers(initialAnswers);
    }, [questions]);
    
    const handleOptionSelect = (answerIndex) => {
        answers[currentQuestionNumber-1].selectedAnswer = answerIndex;
        setAnswers([...answers]);
    }
    const handleBack = useCallback(()=>{
        setCurrentQuestionNumber((questionNumber)=>{
            if(questionNumber>1)
                return questionNumber - 1;
            else
                return questionNumber
        });
    },[])
    const handleNext = ()=>{
        setCurrentQuestionNumber((questionNumber)=>{
            if(questionNumber < questions.length)
                return questionNumber + 1;
            else
                return questionNumber
        });
    }
    return (
        <div className={`header-space custom-container ${styles?.['quiz-container']}`}>
            <div className={`col-12  col-lg-7 col-xl-6 ${styles?.['quiz-content']}`}>
                {
                    questions.length ? <Question
                        question={questions[currentQuestionNumber - 1]}
                        questionNumber={currentQuestionNumber}
                        onOptionSelect={handleOptionSelect}
                        selectedOptionValue={answers.length?answers[currentQuestionNumber - 1]?.selectedAnswer:-1}
                    /> : ''
                }
                <div className={styles?.['navigation-btns']}>
                    <button disabled={currentQuestionNumber===1} onClick={handleBack}>
                        <HiOutlineArrowLeft /> Back
                    </button>
                    <button disabled={currentQuestionNumber===questions.length} onClick={handleNext}>
                        Next <HiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <div className='d-none d-lg-block col-lg-5 col-xl-6'>
                <img src='images/quiz/quiz.png' className="w-100" alt='start quiz' />
            </div>
        </div>
    );
}

export default Quiz;
