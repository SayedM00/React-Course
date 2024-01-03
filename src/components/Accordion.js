import { useState } from "react"
export default function Accordion({faq, faqs}) {
    const [status, setStatus] = useState(false)
    function clicked() {
        setStatus(!status)
    }
    return <li className={`faq ${status ? "show" : ""}`}  onClick={clicked}>
        <div style={{display:"flex", paddingTop:"10px", alignItems:"center"}}>
            <h4 className="question"><span className="number">0{faqs.indexOf(faq) + 1}</span>  {faq.title} </h4>
            <span style={{marginLeft:"auto"}}>{status ? "-" : "+"}</span>
        </div>
        <p className="paragraph">{faq.text}</p>
    </li>
}