const regexAnyText = /.+/

it("init", () => {
	cy.visit("http://localhost:3000/demo")
})

it("can click button 1", () => {
	cy.get("[data-e2e='editor-toolbar-btn-1']")
		.click({ force: true }) // NOTE: disabled=true
		.click({ force: true })
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 2", () => {
	cy.get("[data-e2e='editor-toolbar-btn-2']")
		.click({ force: true }) // NOTE: disabled=true
		.click({ force: true })
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 3", () => {
	cy.get("[data-e2e='editor-toolbar-btn-3']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 4", () => {
	cy.get("[data-e2e='editor-toolbar-btn-4']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 5", () => {
	cy.get("[data-e2e='editor-toolbar-btn-5']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 6", () => {
	cy.get("[data-e2e='editor-toolbar-btn-6']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 7", () => {
	cy.get("[data-e2e='editor-toolbar-btn-7']")
		.click()
		.click()
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})

it("can click button 8", () => {
	cy.get("[data-e2e='editor-toolbar-btn-8']")
		.should("have.attr", "href", "https://github.com/codex-src/codex-app")
		.get("[data-e2e='tooltip']")
		.should("be.visible")
		.contains(regexAnyText)
})
