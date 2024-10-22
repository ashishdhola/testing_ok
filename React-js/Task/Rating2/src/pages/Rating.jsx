import { useEffect, useState } from 'react';
import './Rating.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";

function Rating() {
    let [rate, setRate] = useState([]);
    let [hover, setHover] = useState(0);
    let [close, setClose] = useState(true);
    let [review, setReview] = useState({});
    let [data, setData] = useState([]);

    let formText = [
        { review1: "Teaching/Explanation Skills [Psychometric Judging]" },
        { review2: "Communication Skills" },
        { review3: "Learning Ability and Adaptability" },
        { review4: "Problem-Solving Skills/ Conflict Resolution" },
        { review5: "How is the body language (Hand Gestures,Seating Position) of the Candidate in Lecture ?" },
        { review6: "How is the Engagement of the Candidate with the Students?" },
        { review7: "How is the Content preparation of the Candidate ?" },
        { review8: "How is the real time Doubt Resolution Skills of the Candidate?" },
        { review9: "How has the candidate winded up the Session ?" },
        { review10: "How was the overall observation of the lecture from Student's point of view?" },
    ]

    // console.log(Object.entries(formText));


    // console.log(formText[0]);


    let handleReview = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }

    let submitData = (e) => {
        e.preventDefault();
        let list = {
            ...review,
            'rating': rate
        }
        setData([...data, list])
    }
    console.log(data);

    return (
        <>
            <form method="post" onSubmit={submitData}>
                <p>Teaching/Explanation Skills [Psychometric Judging]</p>
                {close ?
                    <div className='close-wrap'>
                        < AiOutlineStop onClick={() => setClose(false)} className='close' />
                        {
                            [1, 2, 3, 4, 5].map((value, index) => {
                                index = index + 1;
                                return (
                                    <FaStar className='star' name='rating'
                                        onClick={(v, i) => setRate(index)}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(0)}
                                        style={(rate || hover) >= index ? { color: "yellow" } : { color: "#d3d2d2" }} />
                                )
                            })
                        }
                    </div>
                    :
                    <div onClick={() => setClose(true)}>
                        <a>undo</a>
                    </div>
                }
                < div className='textarea' >
                    <textarea placeholder='Add Comment' rows={3} cols={26} name='review' onChange={handleReview}></textarea>
                </div >
                <hr />

                <p>Communication Skills</p>
                {
                    [1, 2, 3, 4, 5].map((value, index) => {
                        index = index + 1;
                        return (
                            <FaStar className='star' name='rating2'
                                onClick={(v, i) => setRate(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(0)}
                                style={(rate || hover) >= index ? { color: "yellow" } : { color: "#d3d2d2" }} />
                        )
                    })
                }

                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Rating;
