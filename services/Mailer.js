const sendgrid = require ('sendgrid');
const helper = sendgrid.mail; 

class Mailer extends helper.Mail {
    constructor ({ subject, recipients }, content) {

        super(); 
        this.sgApi = sendgrid(process.env.SENDGRID_API_KEY);
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject; 

        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients); 
        this.addContent(this.body); 

        this.addClickTracking(); 
        this.addRecipients(); 
    }

    removeDuplicateRecipients (recipients) {

        let emailHashMap = {}; 
        let newRecipientsList = []; 
        recipients.forEach( (entry) => {

            let email = entry.email;
            if(emailHashMap[email]) {
                return; 
            }
            
            newRecipientsList.push(entry);
            emailHashMap[email] = true; 

        } );

        return newRecipientsList;
    }

    
    formatAddresses (recipients) {

        recipients = recipients.map ( ({ email }) => {
            return new helper.Email(email);
        });

        recipients = this.removeDuplicateRecipients(recipients);
        return recipients; 

    }

    addClickTracking () {
        const trackingSettings = new helper.TrackingSettings(); 
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);

        this.addTrackingSettings(trackingSettings);

    }

    addRecipients () {

        const personalize = new helper.Personalization(); 
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });

        this.addPersonalization(personalize);
    }

    async send () {
        const request = await this.sgApi.emptyRequest({
            method: "POST", 
            path: "/v3/mail/send",
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);
        return response; 
    }
}

module.exports = Mailer; 