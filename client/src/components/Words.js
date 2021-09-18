import React,{useState,useEffect} from 'react'
import axios from "axios"
// import {Link } from "react-bootstrap"

export default function Words() {
 
        const [words,setWords]=useState([])
        useEffect(() => {
          axios({
            method:"get",
            url:"http://localhost:5000/wordlist",
          }).then(res=>{
            console.log(res.data)
            setWords(res.data)
      
          })
         
        }, [])
        return(
            <>
            <div>{words.map(word=>{
                return(
                    <div>
                        <ul className="wordList">
                        <li>English : {word.englishWord} </li>
                        <li>Ereyga : {word.name} </li>
                        <li>Macnaha: {word.meaning} </li>
                        <li>Faahfaahin : {word.explanition} </li>
                        
                        </ul>

                    </div>
                )
            })}</div>


            </>
        )
    }
//     return (
//         <div className="words-list">
//                 {words.map(word=>{
//         return(
//           <div className="prod">
//             <h4>{word.name}</h4>
//             <Link to={`/wordlist/${word.id}`}>
            
//             </Link>
//             <p>${word.meaning}</p>
//           </div>
//         )
//       })}
            
//         </div>
//     )
// }
