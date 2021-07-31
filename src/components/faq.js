import React from "react";
import Dropdown from "./subcomponents/dropdown";
import faqData from "../data/faq.json";

const Faq = () => {
    return (
        <section id="faq">
            <div className="faqSubcontainer">
                <h2>No Dumb Questions</h2>

                <dl>
                    {faqData.map((data) => (
                        <Dropdown
                            header={data.question}
                            body={data.answer}
                            key={data.question}
                        />
                    ))}
                </dl>
            </div>
        </section>
    )
};

export default Faq;