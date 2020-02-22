const regexAnyText = /.+/

it("can click the toolbar buttons", () => {
	cy.visit("http://localhost:3000/demo")

	cy.get("[data-e2e='editor-toolbar-button-1']")
		.click({ force: true }) // NOTE: disabled=true
		.click({ force: true })
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-2']")
		.click({ force: true }) // NOTE: disabled=true
		.click({ force: true })
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-3']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-4']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-5']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-6']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-7']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)

	cy.get("[data-e2e='editor-toolbar-button-8']")
		.should("have.attr", "href", "https://github.com/codex-src/codex-app")
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})
