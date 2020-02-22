it("init", () => {
	cy.visit("http://localhost:3000/demo")
})

it("can click button 1", () => {
	cy.get("[data-e2e='editor-toolbar-button-1']")
		.click({ force: true }) // NOTE: disabled=true
		.click({ force: true })
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})
