import { useState } from "react"
import Accordion from "./Accordion"

const faqs = [
    {title:'Where are these chairs assembled?',
    text:"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "},
    {title:'How Long do Ihave to return my Chair?',
    text:"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "},
    {title:'Do you ship to countries outside the EU?',
    text:"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "},

]

export default function App() {
    return <ul className="list-none">
        {faqs.map(f=> <Accordion faq={f} faqs={faqs}/>)}
    </ul>
}











































// Questions Carts $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const questions = [
//     {id:1, question: "What is your name?", answer:"Elsayed"},
//     {id:2, question: "What is your Father name?", answer:"Youssef"},
//     {id:3, question: "What is your Brother name?", answer:"Kareem"}
// ]

// // Step-01 : List Array & Set Uniqe Key 
// // Step-02 : Create A Person Component
// // Step-03 : Pass Props That Has Required Information
// // Step-04 : Using Props Information That Came From Parent Component
// // Step-05 : Create State That Will Take Control Of Showing Answers
// // Step-06 : Create Function That Will Change The State Value Depends Of Which Element Has Clicked
// // Step-07 : Pass The Following State (id) & Function (checkId) As Props
// // Step-08 : Create An Event That Handle The Showing Answers According to Passed Sate (id) and Function (checkId)
// // Step-09 : Using An Ternay Operator That Will Handle The Id
// // Step-10 : Done !

// export default function App() {
//     const [id, setId] = useState(null) // 5 
//     function checkId(cartId) { // 6
//         setId(id === cartId ? null : cartId)
//     }

//     return <div className="container">
//         {questions.map(question => <Person info={question} key={question.id} id={id}  checker={checkId}/>)} {/* 1, 3, 7*/}
//     </div>
// }


// function Person({info, id, checker}) { 
    
//     return <div className="cart" onClick={() => checker(info.id)}>{info.id === id  ? info.answer : info.question}</div> // 2, 4, 8
// }
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // const [step, setStep] = useState(1)
    // const [isOpen, setIsOpen] = useState(true)
    
    
    // function pervious() {
    //     if(step > 1) setStep((s) => s - 1)
    // }
    // function next() {
    //     if(step < 3) setStep((s) => s + 1)
    // }
    // return <>
    //     <button onClick={() => setIsOpen(!isOpen)}>&times;</button>
    //     {isOpen && <section className="container">
    //     <div className="numbers">
    //         <div className={`${step >= 1 ? "active" : ""}`}>1</div>
    //         <div className={`${step >= 2 ? "active" : ""}`}>2</div>
    //         <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    //     </div>
    //     <p className="message">Step {step}: {message[step - 1]}</p>
    //     <div className="buttons">
    //         <button onClick={pervious} className={step <= 1 ? "no-more" : ""}>Pervious</button>
    //         <button onClick={next} className={step >= 3 ? "no-more" : ""}>Next</button>
    //     </div>
    // </section>}
    // </>
