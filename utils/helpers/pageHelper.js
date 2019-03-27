class PageHelper {

    /**
    * Click element By div css selector and span visible text
    * @param {string} id - id selector used to locate the elements
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      pageHelpers.clickElementById('testId');
    */
    static clickElementById(id) {
        // grab matching elements by css class and span text
        this.wait(2000);
        const elem = $('#' + id + '');
        this.waitForElementToBeVisible(elem, 1000);
        return elem.click();
    }

    /**
    * Click element By span visible text
    * @param {string} textToMatch - text for element selector
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      pageHelpers.clickElementBySpanText('test');
    */
    static clickElementBySpanText(textToMatch) {
        // grab matching elements
        const selector = '//span[contains(text(), \'' + textToMatch + '\')]';
        const element = $(selector);
        this.waitForElementToBeVisible(element, 1000);
        return element.click();
    }

    /**
    * Click element By <p> visible text
    * @param {string} textToMatch - text for element selector
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      pageHelpers.getParagraphElementByText('test');
    */
    static getParagraphElementByText(textToMatch) {
        // grab matching elements
        const selector = '//p[contains(text(), "' + textToMatch + '")]';
        return browser.element(selector);
    }

    /**
    * Click element By <div> visible text
    * @param {string} textToMatch - text for element selector
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      pageHelpers.getDivElementByText('test');
    */
    static getDivElementByText(textToMatch) {
        // grab matching elements
        const selector = '//div[contains(text(), "' + textToMatch + '")]';
        return browser.element(selector);
    }

    /**
    * Click element By <span> visible text 
    * @param {string} textToMatch - text for element selector
    * @returns {Promise} resolves if element found and clicked, otherwise rejects   
    * @example
    *      pageHelpers.getSpanElementByText('test');
    */
    static getSpanElementByText(textToMatch) {
        // grab matching elements
        const selector = '//span[contains(text(), "' + textToMatch + '")]';
        return browser.element(selector);
    }

    /**
    * Get element By div css selector and span visible text
    * @param {string} cssSelector - css selector used to locate the elements
    * @param {string} textToMatch - text to match inner content (if present)
    * @returns {Promise} resolves if element found, otherwise rejects   
    * @example
    *      pageHelpers.getElementByCssSelectorAndSpanText('testCss','test');
    */
    static getElementByCssClassAndSpanText(cssSelector, textToMatch) {
        // grab matching elements by css class and span text
        const selector = '//div[@class="' + cssSelector + '"]//span[contains(text(), "' + textToMatch + '")]';
        return $(selector);
    }

    /**
    * Waits for element to be visible
    * @param {string} element - HTML element
    * @returns {Promise} resolves if attribute exists within timeout, otherwise rejects
    * @example
    *      pageHelpers.waitForElementToBeVisible(element, 5000);
    */
    static waitForElementToBeVisible(element, waitInMilliseconds) {
        if (!element.isVisible()) {
            browser.pause(waitInMilliseconds);
        }
    }

    /**
    * Waits for element to be visible
    * @param {string} element - HTML element
    * @returns {Promise} resolves with browser pause
    * @example
    *      pageHelpers.wait(element, 5000);
    */
    static wait(waitInMilliseconds) {
        browser.pause(waitInMilliseconds);
    }
}

module.exports = PageHelper;
