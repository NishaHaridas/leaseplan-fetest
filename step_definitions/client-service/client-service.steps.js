const { When, Then } = require('cucumber'),
    clientServicePage = require('../../components/pageObjects/client-service.page');

When(/^I click topic card "([^"]*)"$/, topicTitle => clientServicePage.clickTopicCardItem(topicTitle));

Then(/^I select subject "([^"]*)"$/, topicTitle => clientServicePage.selectSubjectTitle(topicTitle));

Then(/^I click on question "([^"]*)"$/, question => clientServicePage.clickOnQuestion(question));

Then(/^I should see answer text "([^"]*)"$/, text => clientServicePage.AnswerDetailsContains(text));

Then(/^I should see title "([^"]*)" in answer feedback section$/, 
    title => clientServicePage.AnswerDetailsFeedbackTitle(title));

Then(/^I Click on "([^"]*)" button to give feedback$/, 
    feedbackChoice => clientServicePage.clickFeedBackChoice(feedbackChoice));

Then(/^I should see text "([^"]*)"$/, text => clientServicePage.feedbackChoiceResponse(text));

Then(/^I should see options to reach LeasePlan via phone "([^"]*)"$/, contactOption => clientServicePage.VerifyContactOptions(contactOption));