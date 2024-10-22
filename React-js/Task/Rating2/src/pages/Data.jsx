import Rating from "./Rating";

function Data() {

    let formText = [
        "Teaching/Explanation Skills [Psychometric Judging]",
        "Communication Skills",
        "Learning Ability and Adaptability",
        "Problem-Solving Skills/ Conflict Resolution",
        "How is the body language (Hand Gestures,Seating Position) of the Candidate in Lecture ?",
        "How is the Engagement of the Candidate with the Students?",
        "How is the Content preparation of the Candidate ?",
        "How is the real time Doubt Resolution Skills of the Candidate?",
        "How has the candidate winded up the Session ?",
        "How was the overall observation of the lecture from Student's point of view?",
    ]
    return (
        <>
            {/* <Rating data={formText} /> */}
        </>
    )
}

export default Data;




// import { useEffect, useState } from 'react';
// import './Rating.css'
// import { FaStar } from "react-icons/fa";
// import { AiOutlineStop } from "react-icons/ai";

// function Rating() {
//     let [rate, setRate] = useState(0);
//     let [hover, setHover] = useState(0);
//     let [close, setClose] = useState(true);
//     let [review, setReview] = useState({});
//     let [data, setData] = useState([]);

//     const formText = [
//         "Teaching/Explanation Skills [Psychometric Judging]",
//         "Communication Skills",
//         "Learning Ability and Adaptability",
//         "Problem-Solving Skills/ Conflict Resolution",
//         "How is the body language (Hand Gestures,Seating Position) of the Candidate in Lecture ?",
//         "How is the Engagement of the Candidate with the Students?",
//         "How is the Content preparation of the Candidate ?",
//         "How is the real time Doubt Resolution Skills of the Candidate?",
//         "How has the candidate winded up the Session ?",
//         "How was the overall observation of the lecture from Student's point of view?",
//     ];

//     let handleReview = (e) => {
//         setReview({ ...review, [e.target.name]: e.target.value })
//     }

//     let submitData = (e) => {
//         e.preventDefault();
//         let list = {
//             ...review,
//             'rating': rate
//         }
//         setData([...data, list])
//     }
//     console.log(data);

//     return (
//         <>
//             <form method="post" onSubmit={submitData}>
//                 {formText.map((name, index) => (
//                     <li key={index}>{name}</li>
//                 ))}

//                 {close ?
//                     <div className='close-wrap'>
//                         < AiOutlineStop onClick={() => setClose(false)} className='close' />
//                         {
//                             [1, 2, 3, 4, 5].map((value, index) => {
//                                 index = index + 1;
//                                 return (
//                                     <FaStar className='star' name='rating'
//                                         onClick={() => setRate(index)}
//                                         onMouseEnter={() => setHover(index)}
//                                         onMouseLeave={() => setHover(0)}
//                                         style={(rate || hover) >= index ? { color: "yellow" } : { color: "#d3d2d2" }} />
//                                 )
//                             })
//                         }
//                     </div>
//                     :
//                     <div onClick={() => setClose(true)}>
//                         <a>undo</a>
//                     </div>
//                 }
//                 < div className='textarea' >
//                     <textarea placeholder='Add Comment' rows={3} cols={26} name='review' onChange={handleReview}></textarea>
//                 </div >
//                 <hr />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// export default Rating;