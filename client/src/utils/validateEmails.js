export default (emails) => {
    if(emails === undefined) {
        return null; 
    }

    const emailsArray = emails.trim().split(/[, ]+/); 
    let invalidEmails = []; 

    function validateEmail(email) {
        if(email.length === 0) {
            return true; 
        }

        var emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegexPattern.test(String(email).toLowerCase());
    }

    emailsArray.forEach((email) => {
        if(!validateEmail(email)) {
            invalidEmails.push(email);
        }
    });

    if(invalidEmails.length) {
        return `The following emails are invalid: ${invalidEmails}`;
    }

    return null; 
}