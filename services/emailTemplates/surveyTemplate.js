module.exports = (survey) => {
    return `
       <html>
        <body>
            <div style="text-align:center;">
                <h3>We'd like to hear your feedback!</h3>
                <p>Please mark yes or no for the following question: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="http://localhost:3000">yes</a>
                    <a href="http://localhost:3000">no</a>
                </div>
            </div>
        </body>
       </html>
    `
};