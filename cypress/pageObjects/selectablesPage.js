import BasePage from "./basePage";


class SelectablesPage extends BasePage {
  
  static get url () {
    return '/selectable';
  }

  static get listItems () {
    return cy.get("#verticalListContainer > li");
  }

  static get gridNavButton () {
    return cy.get("#demo-tab-grid");
  }

  static get gridItems () {
    return cy.get("#gridContainer > div > li");
  }
  
}

export default SelectablesPage;