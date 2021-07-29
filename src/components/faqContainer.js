import React from "react";
import faqData from "../data/faq.json";
import FAQ from "./faq";
import "bootstrap/dist/css/bootstrap.min.css"


const FAQContainer = () => {
  return (
    <div className="faq-container">
      <h1 class="title-faq">NO DUMB QUESTIONS</h1>
        <div class="row">
            <div class="test-container">
                <dl>
                    {faqData.map((data) => (
                    <FAQ
                        question={data.question}
                        answer={data.answer}
                        key={data.question}
                    />
                    ))}
                </dl>
             </div> 
        </div>
    </div>
    
  );
};

export default FAQContainer;