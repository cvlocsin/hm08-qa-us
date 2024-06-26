const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    // Setting the address
    it('should set the address', async () => {
        await browser.url(`/`)
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        await browser.pause(1000);
        await expect(fromField).toBeExisting();
        await expect(toField).toBeExisting();
    })    

    // Selecting Supportive plan
    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await browser.pause(1000);
        await expect(supportivePlanButton).toBeExisting();
    })

    // Filling in the phone number
    it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberField = $(page.phoneNumberField);
        await phoneNumberField.setValue(helper.getPhoneNumber('+1'));
        await browser.pause(1000);
        await expect(phoneNumberField).toBeExisting();
    }) 

      // Adding a credit card
      it('should add a credit card', async () => {
       await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCardAndCodeNumber('1234 5678 9101', '12');
        await browser.pause(1000);
        const cardNumberField = await $(page.cardNumberField);
        const codeNumberField = await $(page.codeNumberField);
        await expect(cardNumberField).toBeExisting();
        await expect(codeNumberField).toBeExisting();
    })

    // Writing a message for the driver
   it('should write a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageForDriverField = await $(page.messageForDriverField);
        await messageForDriverField.waitForDisplayed();
        await messageForDriverField.setValue('Get some whiskey');
        await browser.pause(1000);
        await expect(messageForDriverField).toBeExisting();
    })

    // Ordering a blanket and handkerchiefs
   it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const blanketAndHandkerchiefOption = await $(page.blanketAndHandkerchiefOption);
        await blanketAndHandkerchiefOption.waitForDisplayed();
        await blanketAndHandkerchiefOption.click();
        const blanketAndHandkerchiefButton = await $(page.blanketAndHandkerchiefButton);
        await blanketAndHandkerchiefButton.waitForDisplayed();
        await blanketAndHandkerchiefButton.click();
        const blanketAndHandkerchiefOrder = await $('//input[@type="checkbox"]');
        await browser.pause(1000);
        await expect(blanketAndHandkerchiefOrder).toBeChecked();
    })

    // Ordering 2 ice creams
   it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const iceCreamOption = await $(page.iceCreamOption);
        await iceCreamOption.waitForDisplayed();
        await iceCreamOption.click();
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await browser.pause(1000);
        let iceCreamOrder = await $('.counter-value');
        let iceCreamOrderTotal = await iceCreamOrder.getText();
        await expect(iceCreamOrderTotal).toBe('2');
    })

    // The car search modal appears
   it('should open car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForExist();
        await browser.pause(1000);
        await expect(carSearchModal).toBeExisting();
    })

    // Waiting for the driver info to appear in the modal
   it('should show driver info in the modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.openCarSearchModal();
        await browser.pause(1000);
        const driverInfo = await $(page.driverInfo);
        await driverInfo.waitForExist();
        await expect(driverInfo).toBeExisting();
      })
})

