module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '.card-number-input #number',
    codeNumberField: '.card-code-input #code',
    messageForDriverField: '.input-container #comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '//div[@class="pp-button filled"]',
    addCardButton: '//div[contains(text(), "Add card")]',
    linkButton: 'button=Link',
    supportivePlanButton: '//div[contains(text(),"Supportive")]',
    blanketAndHandkerchiefButton: '//span[@class="slider round"]',
    orderButton: '.smart-button',
    // Options
    blanketAndHandkerchiefOption: '//div[contains(text(),"Blanket and handkerchiefs")]',
    iceCreamOption: '.counter-plus',
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: '.order-body',
    // Info within Modal
    driverInfo: '//div[contains(text(), "The driver will arrive")]',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCardAndCodeNumber: async function(cardNumber, codeNumber) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        await browser.pause(2000);
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await browser.pause(2000);
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(cardNumber);
        await browser.pause(1000);
        const codeNumberField = await $(this.codeNumberField);
        await codeNumberField.setValue(codeNumber);
        await browser.pause(1000);
        const clickSomewhereElseOnScreen = await $('.app');
        await clickSomewhereElseOnScreen.waitForDisplayed();
        await clickSomewhereElseOnScreen.click();
        await browser.pause(1000);
        const linkButton = $(this.linkButton);
        await linkButton.waitForClickable();
        await linkButton.click();
    },
    selectSupportivePlan: async function() {
        const supportivePlanButton = $(this.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    },
    openCarSearchModal: async function() {
        const orderButton = await $(this.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();    
    }
}