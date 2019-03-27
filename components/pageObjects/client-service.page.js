const pageHelper = require('../../utils/helpers/pageHelper');

class ClientServicePage {

    /**
    * Click on topic card given title of card
    * @param {string} topicTitle - topic title to locate the element
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      ClientServicePage.clickTopicCardItem('test top card text');
    */
    static clickTopicCardItem(topicTitle) {
        return pageHelper.clickElementBySpanText(topicTitle);
    }

    /**
    * Click on subject card given title of subject
    * @param {string} subject - subject title to locate the element
    * @returns {Promise} resolves if element found and clicked to select subject, otherwise rejects   
    * @example
    *      ClientServicePage.selectSubjectTitle('testSubject');
    */
    static selectSubjectTitle(subject) {
        const divClass = 'support-topic-card__text-container';
        browser.pause(2000);
        const selector = '//div[contains(@class,\'support-topic-card__text-container\')]//span[contains(text(), \'' + subject + '\')]';
        //const element = pageHelper.getElementByCssClassAndSpanText(divClass, subject);
        //pageHelper.waitForElementToBeVisible(element, 1000);
        return $(selector).click();
    }

    /**
    * Click on question given question text
    * @param {string} question - question text to locate the element
    * @returns {Promise} resolves if element found and clicked to select question, otherwise rejects   
    * @example
    *      ClientServicePage.clickOnQuestion('question to click');
    */
    static clickOnQuestion(question) {
        browser.scroll(0, 500);
        browser.pause(2000);
        return pageHelper.clickElementBySpanText(question);
    }

    /**
    * Verify if answer contains given text
    * @param {string} details - part of the answer text
    * @returns {Promise} resolves true if element found , otherwise rejects   
    * @example
    *      ClientServicePage.AnswerDetailsContains('test answer detail');
    */
    static AnswerDetailsContains(details) {
        browser.pause(2000);
        return new Promise((resolve, reject) => {
            const elem = pageHelper.getParagraphElementByText(details);
            //'instructions__item-text'
            if (elem.isExisting()) {
                resolve(true);
            }
            else {
                reject("Element does not contain text" + details);
                return;
            }
        });
    }

    /**
    * Verify if answer feedback section contains given text
    * @param {string} title - title of the answer feedback
    * @returns {Promise} resolves true if element found , otherwise rejects   
    * @example
    *      ClientServicePage.AnswerDetailsFeedbackTitle('Tevreden met dit antwoord?');
    */
    static AnswerDetailsFeedbackTitle(title) {
        browser.scroll(0, 500);
        browser.pause(2000);
        return new Promise((resolve, reject) => {
            const elem = pageHelper.getDivElementByText(title);
            if (elem.isExisting()) {
                resolve(true);
            }
            else {
                reject("Element does not contain text" + title);
                return; // The function execution ends here 
            }
        });
    }

    /**
    * Click on feedback choice based on given feedback choice text
    * @param {string} feedbackChoice - feedback choice text
    * @returns {Promise} resolves if element found and clicks element, otherwise rejects   
    * @example
    *      ClientServicePage.clickFeedBackChoice('Ja');
    */
    static clickFeedBackChoice(feedbackChoice) {
        const selector = '//span[contains(@class,\'support-feedback__text\')]//div[contains(text(), \'' + feedbackChoice + '\')]';
        browser.scroll(0, 500);
        browser.pause(1000);
        return $(selector).click();
    }

    /**
    * Verify if answer feedback section contains given text after user input(Yes or No)
    * @param {string} response - user feedback response to answer to question
    * @returns {Promise} resolves true if element found , otherwise rejects   
    * @example
    *      ClientServicePage.feedbackChoiceResponse('Fijn dat we konden helpen!');
    */
    static feedbackChoiceResponse(response) {
        return new Promise((resolve, reject) => {
            const elem = pageHelper.getSpanElementByText(response);
            if (elem.isExisting()) {
                resolve(true);
            }
            else {
                reject("Element does not contain text" + response);
                return;
            }
        });
    }
}

module.exports = ClientServicePage;