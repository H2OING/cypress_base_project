import BasePage from "./basePage";


class WebTablePage extends BasePage {
  static get url () {
    return '/webtables';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get addButton () {
    return cy.get("button#addNewRecordButton");
  }

  static deleteRow (signature) {
    this.allTableRows.contains(signature).parent().find("[title='Delete']").click();
  }
  
  static get firstName () {
    return cy.get('input#firstName');
  }
  static get lastName () {
    return cy.get('input#lastName');
  }
  static get userEmail () {
    return cy.get('input#userEmail');
  }
  static get userAge () {
    return cy.get('input#age');
  }
  static get salary () {
    return cy.get('input#salary');
  }
  static get department () {
    return cy.get('input#department');
  }
  static get submitButton () {
    return cy.get('button#submit');
  }


  static get allTable () {
    return cy.get('div.rt-td');
  }
  static get allTableRows (){
      return cy.get("[role='row']");
  }
  
}

export default WebTablePage;
