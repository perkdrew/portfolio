import React from "react";

import "./styles.scss";

const Projects = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="container">
                    <img src="images/qa.jpg" alt="ecommerce"/>
                    <div className="middle" style={{backgroundColor: "#FFFACD"}}>
                        <h1 className="text">Question-Answering System</h1>
                        <a className="text" href="https://github.com/perkdrew/Neo4j-QA" target="_blank" rel="noopener noreferrer">Check out here</a>
                    </div>
                </div>
                <div className="container">
                    <img src="images/hiking.jpg" alt="svenskaleder"/>
                    <div className="middle" style={{backgroundColor: "#90EE90"}}>
                        <h1 className="text">Hiking Mobile Application</h1>
                        <a className="text" href="https://apps.apple.com/se/app/svenska-leder/id1578863022" target="_blank" rel="noopener noreferrer">Check out here</a>
                    </div>
                </div>
                <div className="container">
                    <img src="images/hamilton.jpg" alt="music"/>
                    <div className="middle" style={{backgroundColor: "#B19CD9"}}>
                        <h1 className="text">Hamilton Lyrics Generator</h1>
                        <a className="text" href="https://towardsdatascience.com/spamilton-text-generation-with-lstms-and-hamilton-lyrics-ec7938ae830c" target="_blank" rel="noopener noreferrer">Check out here</a>
                    </div>
                </div>
                <div className="container">
                    <img src="images/manifesto.jpg" alt="manifesto"/>
                    <div className="middle" style={{backgroundColor: "#e397a3"}}>
                        <h1 className="text">Mass Shooter Manifesto Classifier</h1>
                        <a className="text" href="https://towardsdatascience.com/tagging-genes-and-proteins-with-biobert-c7b04fc6eb4f" target="_blank" rel="noopener noreferrer">Check out here</a>
                    </div>
                </div>
                <div className="container">
                    <img src="images/biobert.jpg" alt="biobert"/>
                    <div className="middle" style={{backgroundColor: "#ADD8E6"}}>
                        <h1 className="text">Biomedical Document Tagger</h1>
                        <a className="text" href="https://towardsdatascience.com/tagging-genes-and-proteins-with-biobert-c7b04fc6eb4f" target="_blank" rel="noopener noreferrer">Check out here</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Projects)
