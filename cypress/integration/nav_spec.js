describe("nav", () => {
	it("can click home", () => {
		cy.visit("http://localhost:3000/")
			.get("[data-e2e='nav-home']")
			.click()
			.url()
			.should("eq", "http://localhost:3000/")
	})
	it("can click demo", () => {
		cy.visit("http://localhost:3000/")
			.get("[data-e2e='nav-demo']")
			.click()
			.url()
			.should("eq", "http://localhost:3000/demo")
	})
})
