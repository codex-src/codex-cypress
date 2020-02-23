describe("marketing", () => {
	it("can click cta button", () => {
		cy.visit("http://localhost:3000/")
			.get("[data-e2e='cta-btn']")
			.click()
			.url()
			.should("eq", "http://localhost:3000/demo")
	})
	it("can click cta editor", () => {
		cy.visit("http://localhost:3000/")
			.get("[data-e2e='cta-editor']")
			.click()
			.url()
			.should("eq", "http://localhost:3000/demo")
	})
})
