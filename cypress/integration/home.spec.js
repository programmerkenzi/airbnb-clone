/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-22 13:49:42
 * @LastEditTime: 2021-08-22 14:18:26
 * @LastEditors: Kenzi
 */

///<reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show banner text", () => {
    cy.get("div").get("p").should("contain", "Not sure where to go? Perfect.");
  });
});
