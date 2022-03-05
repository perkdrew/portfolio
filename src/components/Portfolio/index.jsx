import React from "react";

import "./styles.scss";

const Projects = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="container">
                    <img src="images/qa.jpg" alt="ecommerce"/>
                    <div className="middle" style={{backgroundColor: "#FFFACD"}}>
                        <h2><a className="text" href="https://github.com/perkdrew/Neo4j-QA" target="_blank" rel="noopener noreferrer">Question-Answering System</a></h2>
                    </div>
                </div>
                <div className="container">
                    <img src="images/hiking.jpg" alt="svenskaleder"/>
                    <div className="middle" style={{backgroundColor: "#90EE90"}}>
                        <h2><a className="text" href="https://apps.apple.com/se/app/svenska-leder/id1578863022" target="_blank" rel="noopener noreferrer">Hiking Mobile Application</a></h2>
                    </div>
                </div>
                <div className="container">
                    <img src="images/hamilton.jpg" alt="music"/>
                    <div className="middle" style={{backgroundColor: "#B19CD9"}}>
                        <h2><a className="text" href="https://towardsdatascience.com/spamilton-text-generation-with-lstms-and-hamilton-lyrics-ec7938ae830c" target="_blank" rel="noopener noreferrer">Hamilton Lyrics Generator</a></h2>
                    </div>
                </div>
                <div className="container">
                    <img src="images/manifesto.jpg" alt="manifesto"/>
                    <div className="middle" style={{backgroundColor: "#E397A3"}}>
                        <h2><a className="text" href="https://towardsdatascience.com/tagging-genes-and-proteins-with-biobert-c7b04fc6eb4f" target="_blank" rel="noopener noreferrer">Mass Shooter Manifesto Classifier</a></h2>
                    </div>
                </div>
                <div className="container">
                    <img src="images/biobert.jpg" alt="biobert"/>
                    <div className="middle" style={{backgroundColor: "#ADD8E6"}}>
                        <h2><a className="text" href="https://towardsdatascience.com/tagging-genes-and-proteins-with-biobert-c7b04fc6eb4f" target="_blank" rel="noopener noreferrer">Biomedical Document Tagger</a></h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Projects)
