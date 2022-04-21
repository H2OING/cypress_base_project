import CheckBoxPage from "../../pageObjects/checkBoxPage";
import TextBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import WebTablePage from "../../pageObjects/webTablePage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import LinksPage from "../../pageObjects/linksPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      TextBoxPage.fullNameInput.type("George");
      TextBoxPage.fullEmailInput.type("email@email.com");
      TextBoxPage.currentAddressInput.type("Some random permanent address 1234");
      TextBoxPage.permanentAddressInput.type("Some random permanent address 1234");
      TextBoxPage.submitButton.click();

      TextBoxPage.nameParagraph
        .should("be.visible").should("contain", "George");

      TextBoxPage.emailParagraph
        .should("be.visible")
        .should("contain", "email@email.com");

      TextBoxPage.currentAddressParagraph
        .should("be.visible")
        .should("contain", "Some random permanent address 1234");

      TextBoxPage.permanentAddressParagraph
        .should("be.visible")
        .should("contain", "Some random permanent address 1234");

      it("Fillint in text boces with fuxture", () => {
        TextBoxPage.fullNameInput.type(data.fullName);
        TextBoxPage.fullEmailInput.type(data.email);
        TextBoxPage.currentAddressInput.type(data.currentAddress);
        TextBoxPage.permanentAddressInput.type(data.permanentAddress);

        TextBoxPage.submitButton.click();

        TextBoxPage.nameParagraph.should("be.visible").should("contain", data.fullName);

        TextBoxPage.emailParagraph.should("be.visible").should("contain", data.email);

        TextBoxPage.currentAddressParagraph.should("be.visible").should("contain", data.currentAddress);

        TextBoxPage.permanentAddressParagraph.should("be.visible").should("contain", data.permanentAddress);

      });
    });

  });

  context("Checkbox scenarios", () => {
    beforeEach(() => {
      // Preconditions
      CheckBoxPage.visit();
    });

    it("Clicking checkbox - Notes", () => {
      // Scenario stuff

      CheckBoxPage.expandAllButton.click();

      CheckBoxPage.checkboxListItems.contains("Notes").click();
      CheckBoxPage.checkboxListItems.contains("General").click();
      CheckBoxPage.selectedItemsArea.should("contain", "notes").should("contain", "general");

    });

    it("Clicking checkbox - office", ()=>{
      CheckBoxPage.expandAllButton.click();
      CheckBoxPage.checkboxListItems.contains("Office").click();
      CheckBoxPage.selectedItemsArea
      .should("contain", "office ")
      .should("contain", "public")
      .should("contain", "private")
      .should("contain", "classified")
      .should("contain", "general");
    })
  });

  context("Radio button", () => {
    beforeEach(() => {
      // Preconditions
      RadioButtonPage.visit();
    });
    it("Clicking radio button", ()=>{
      RadioButtonPage.yesRadioButton.click();
      RadioButtonPage.resultText.should("contain", "Yes");

      RadioButtonPage.impressiveRadioButton.click();
      RadioButtonPage.resultText.should("contain", "Impressive");

      RadioButtonPage.noRadioButton.should("be.disabled");
    });
  });

  context("Web table", () => {
    beforeEach(() => {
      // Preconditions
      WebTablePage.visit();
    });
    
    it("Adding to table", ()=>{
      WebTablePage.addButton.click();

      WebTablePage.firstName.type('ewrtg');
      WebTablePage.lastName.type('dfsgh');
      WebTablePage.userEmail.type('fgf@fggf.com');
      WebTablePage.userAge.type('12');
      WebTablePage.salary.type('50000');
      WebTablePage.department.type('Science');
     
      WebTablePage.submitButton.click();

      WebTablePage.allTable.should('contain','fgf@fggf.com' );
    });

    it("Deleting from table", ()=>{
      WebTablePage.deleteRow('alden@example.com');
      WebTablePage.deleteRow('kierra@example.com');
      WebTablePage.deleteRow('cierra@example.com');
    });
  });


  context("Buttons page", () => {
    beforeEach(() => {
      // Preconditions
      ButtonsPage.visit();
    });
    
    it("click buttons", ()=>{
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.rightClickButton.rightclick();

      ButtonsPage.doubleClickButtonSuccess.should('contain', 'You have done a double click');
      ButtonsPage.rightClickButtonSuccess.should('contain', 'You have done a right click');

      ButtonsPage.clickButton.click();
      ButtonsPage.dynamicClickButtonSuccess.should('contain', 'You have done a dynamic click');
    });

  });

  context("Link page", () => {
    beforeEach(() => {
      // Preconditions
      LinksPage.visit();
    });
    
    it.only("click link buttons", ()=>{
      cy.intercept("GET", "created"{ statusCode: }).as("getCreated");
      LinksPage.createdLink.click();
      cy.wait("@getCreated").then((data) =>{
        expect(data.response.statusCode).to.eq(201)
      });

    });

  });
});
