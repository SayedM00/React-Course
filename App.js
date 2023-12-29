import { useState } from "react"

export default function App() {
    const [rValue, setRvalue] = useState(1)
    const [iValue, setIvalue] = useState(0)
    
    return <section style={{textAlign:"center"}}>
        <Range value={rValue} setValue={setRvalue} />
        <Days value={iValue} setValue={setIvalue} rangeValue={rValue} />
        <Date />
    </section>
}

function Range({value, setValue}) {
    return <div>
        <input type="range" min="1" max="10" value={value} onChange={(e) => setValue(+e.target.value)}></input>
        {value}
    </div>
}

function Days({value, setValue, rangeValue}) {
    function forward() {
        rangeValue > 1 ? setValue((i) => i + rangeValue) : setValue((i) => i + 1)
        
    }
    function backward() {
        rangeValue > 1 ? setValue((i) => i - rangeValue) : setValue((i) => i - 1)
    }
    return <div>
        <button className="btn" onClick={backward}>-</button>
        <input type="text" value={value}></input>
        <button className="btn" onClick={forward}>+</button>
    </div>
}

function Date() {
    return <p>{new Date()}</p>
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
