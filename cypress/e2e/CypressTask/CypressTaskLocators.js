class Billing
{
    firstname()
    {
        return cy.get("#billing_first_name")
    }
    lastname()
    {
        return cy.get("#billing_last_name")   
    }
    companyname()
    {
        return cy.get("#billing_company")   
    }
    country()
    {
    return cy.get("#select2-billing_country-container")
    
    }
    streetAddress()
    {
    return cy.get("input[name='billing_address_1']")
    }
    city()
    {
     return cy.get("input[name='billing_city']")   
    }
    state()
    {
     return cy.get("#select2-billing_state-container")   
    }
    pincode()
    {
     return cy.xpath("//input[@name='billing_postcode']")   
    }
    phone()
    {
    return cy.xpath("//input[@name='billing_phone']")
    }
    email()
    {
    return cy.xpath("//input[@name='billing_email']")
    }
    }
    export default Billing
    