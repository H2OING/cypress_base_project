import BasePage from "./basePage";


class ButtonsPage extends BasePage {
  static get url () {
    return '/buttons';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get doubleClickButton () {
    return cy.get('#doubleClickBtn');
  }

  static get doubleClickButtonSuccess () {
    return cy.get('#doubleClickMessage');
  }
  
  static get rightClickButton () {
    return cy.get('#rightClickBtn');
  }

  static get rightClickButtonSuccess () {
    return cy.get('#rightClickMessage');
  }
  
  static get clickButton() {
    return cy.get('button.btn-primary').contains(/^\bClick Me\b/);
  }

  static get dynamicClickButtonSuccess () {
    return cy.get('#dynamicClickMessage');
  }

  
}

export default ButtonsPage;