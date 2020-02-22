it("init", () => {
	cy.visit("http://localhost:3000/")
})

it("can open home", () => {
	cy.get("[data-e2e='nav-home']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/")
})

it("can open demo", () => {
	cy.get("[data-e2e='nav-demo']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})
