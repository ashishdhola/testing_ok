import { useEffect, useState } from 'react';
import './quiz.css'
import axios, { all } from 'axios';

function Quiz() {
    let [questions, setQuestions] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [perPageData, setPerPageData] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    let [count, setCount] = useState(1);

    let [selectedAnswer, setSelectedAnswer] = useState({});
    let [finalAnswer, setFinalAnswer] = useState("");
    let [allAnswerArr, setallAnswerArr] = useState([]);

    useEffect(() => {
        getQuizQuestions();
    }, [setQuestions, currentPage, setallAnswerArr])

    useEffect(() => {
        let allAnswersList = [];
        axios.get("http://localhost:3000/QuizQuestions")
            .then((res) => {
                res.data.filter((v, i) => {
                    allAnswersList.push(v.answer);
                })
            })
            .catch((err) => {
                console.log(err);
            })
        setallAnswerArr(allAnswersList);
    }, [])
    console.log(allAnswerArr);

    let getQuizQuestions = async () => {
        try {
            let response = await axios.get("http://localhost:3000/QuizQuestions");
            setQuestions(response.data);

            setTotalPages(Math.ceil(response.data.length / perPageData));

            const startIndex = (currentPage - 1) * perPageData;
            const endIndex = startIndex + perPageData;

            let paginationData = response.data.slice(startIndex, endIndex);

            let pageDetails = paginationData ? paginationData : [];
            setQuestions(pageDetails);
        } catch (error) {
            console.log(err);
        }
    }

    const handleNextQuestion = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setCount(count + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setCount(count - 1);
        }
    }

    let handleChange = (e) => {
        let { name, value } = e.target;
        setSelectedAnswer({ ...selectedAnswer, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        let result = allAnswerArr.filter((v, i) => {
            return v === selectedAnswer.options;
            // if (v === selectedAnswer.options) {
            // console.log(v, "api answer");
            // console.log(selectedAnswer.options, "selected anserr");
            // return true;
            // }
        })
        // setFinalAnswer(result);
        console.log(result, "true");
    }


    return (
        <>
            <div className='quiz-box'>
                {
                    questions.map((v, index) => {
                        index = index + 1;

                        return (
                            <>
                                <form onSubmit={(e) => handleSubmit(e)} action="">
                                    <div key={v.id}>
                                        <h1>Q{count}. {v.question}</h1>
                                        <label htmlFor='optionOne' className='option-wrap'>
                                            <input type="radio" name="options" id="optionOne" value={v.optionOne} onChange={(e) => handleChange(e)} />
                                            <h2>A. {v.optionOne}</h2>
                                            {/* <h2 style={finalAnswer ? { color: "green" } : { color: "red" }} >A. {v.optionOne}</h2> */}
                                        </label>

                                        <label htmlFor='optionTwo' className='option-wrap'>
                                            <input type="radio" name="options" id="optionTwo" value={v.optionTwo} onChange={(e) => handleChange(e)} />
                                            <h2>B. {v.optionTwo}</h2>
                                        </label>

                                        <label htmlFor='optionThree' className='option-wrap'>
                                            <input type="radio" name="options" id="optionThree" value={v.optionThree} onChange={(e) => handleChange(e)} />
                                            <h2>C. {v.optionThree}</h2>
                                        </label>

                                        <label htmlFor='optionFour' className='option-wrap'>
                                            <input type="radio" name="options" id="optionFour" value={v.optionFour} onChange={(e) => handleChange(e)} />
                                            <h2>D. {v.optionFour}</h2>
                                        </label>
                                    </div>

                                    <input type="submit" value="submit" />

                                    {/* {
                                        finalAnswer ?
                                            <h2>{finalAnswer}</h2>
                                            : ""
                                    } */}

                                    {/* <h1>{finalAnswer}</h1> */}
                                    {/* <h2>{finalAnswer ? "Correct" : "Incorrect"}</h2> */}
                                    {/* <h2>{allAnswerArr[count-1]}</h2> */}

                                    {/* <h2>{!finalAnswer?allAnswerArr[count-1]:"no"}</h2> */}
                                </form>
                            </>
                        )
                    })}

                <div className="navigation">
                    <button disabled={currentPage === 1} onClick={handlePreviousQuestion}>
                        Previous
                    </button>
                    <button disabled={currentPage === totalPages} onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
            </div >
        </>
    )
}
export default Quiz;


// useEffect(() => {
//     axios.get("http://localhost:3000/QuizQuestions")
//         .then((res) => {
//             {
//                 res.data.map((v, i) => {
//                     // allAnswersList.push(v.answer);
//                     setallAnswerArr([...allAnswerArr, v.answer]);
//                     // setChoices(v.answer)
//                 })
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     // setallAnswerArr(allAnswersList);
// }, [])

// setallAnswerArr(allAnswersList);
// console.log(allAnswerArr);





//     useEffect(() => {
//         getQuizQuestions();
//     }, []);

// const getQuizQuestions = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/QuizQuestions');
//         setQuestions(response.data);
//         setTotalPages(Math.ceil(response.data.length / perPageData));
//     } catch (err) {
//         console.error(err);
//     }
// };

//     const handleNextQuestion = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousQuestion = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const getVisibleQuestions = () => {
//         const startIndex = (currentPage - 1) * perPageData;
//         const endIndex = startIndex + perPageData;
//         return questions.slice(startIndex, endIndex);
//     };

//     return (
//         <>
//             <div className='quiz-box'>
//                 {getVisibleQuestions().map((question, index) => (
//                     <div key={question.id}> {/* Add unique key for each question */}
//                         <h1>Q{index + 1}. {question.question}</h1>
//                         <h2>A. {question.optionOne}</h2>
//                         <h2>B. {question.optionTwo}</h2>
//                         <h2>C. {question.optionThree}</h2>
//                         <h2>D. {question.optionFour}</h2>
//                     </div>
//                 ))}

//                 <div className="navigation">
//                     <button disabled={currentPage === 1} onClick={handlePreviousQuestion}>
//                         Previous
//                     </button>
//                     <button disabled={currentPage === totalPages} onClick={handleNextQuestion}>
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;




{/* <div className='quiz-box'>
                {
                    questions.map((v, i) => {
                        i += 1;
                        return (
                            <>
                                <h1>Q{i}. {v.question}</h1>
                                <h2>A. {v.optionOne}</h2>
                                <h2>B. {v.optionTwo}</h2>
                                <h2>C. {v.optionFour}</h2>
                                <h2>D. {v.optionThree}</h2>
                            </>
                        )
                    })
                }
            </div> */}
{/* {
                page.map((v, i) => {
                    return (
                        <button onClick={() => setcurrentPage(v)}>{v}</button>
                    )
                })
            } */}




// let pagination = () => {
//     let getQuizData = axios.get("http://localhost:3000/QuizQuestions")
//         .then((res) => {
//             let totalPages = Math.ceil((res.data).length / perPageData);
//             let num = [];
//             for (let i = 1; i <= totalPages; i++) {
//                 num.push(i);
//             }
//             // setPage(num);
//             let lastIndex = currentPage * perPageData;
//             let firstIndex = lastIndex - perPageData;
//             let paginationData = (res.data).slice(firstIndex, lastIndex);
//             // console.log(paginationData);
//             let pageDetails = paginationData ? paginationData : [];
//             setQuestions(pageDetails);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }


// const getVisibleQuestions = () => {

// let totalPages = Math.ceil((res.data).length / perPageData);
// let num = [];
// for (let i = 1; i <= totalPages; i++) {
//     num.push(i);
// }
// setPage(num);


// const startIndex = (currentPage - 1) * perPageData;
// const endIndex = startIndex + perPageData;


// let paginationData = questions.slice(startIndex, endIndex);
// console.log(paginationData);
// let pageDetails = paginationData ? paginationData : [];
// setQuestions(pageDetails);

// return questions.slice(startIndex, endIndex);
// }
