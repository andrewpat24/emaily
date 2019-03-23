module.exports = (survey) => {
    return `
       <html>
        <body>
            <div style="text-align:center;">
                <h3>We'd like to hear your feedback!</h3>
                <p>Please mark yes or no for the following question: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="${process.env.RESPONSE_REDIRECT}/thanks">yes</a>
                    <a href="${process.env.RESPONSE_REDIRECT}/thanks">no</a>
                </div>
            </div>
        </body>
       </html>
    `
};