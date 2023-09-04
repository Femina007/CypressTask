import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Billing from "./CypressTaskLocators"
    const bg = new Billing();
    var data;

beforeEach("To open the site",function(){
        cy.visit("https://shop.demoqa.com/my-account/")
    
})
before("Details page loaded",function(){
    cy.fixture('details').then((info)=>{
        data=info;  
    })
}) 
   
Given('I enter the registration details',()=>
{   
    //cy.visit("https://shop.demoqa.com/my-account/")
    cy.get("#reg_username").type(data.name)
    cy.get("#reg_email").type(data.email)
    cy.get("#reg_password").type(data.pass)
})
When('I click on register button',()=>
{
    cy.get("button[name='register']").click()
})
When('I click on logout link',()=>
{
    cy.get(".woocommerce-MyAccount-content").find("a[href*='logout']").click()
})
Then('I logout from account',()=>{

})

Given("I enter the login details",()=>
{   
    //cy.visit("https://shop.demoqa.com/my-account/")
    cy.get("#username").type(data.name)
    cy.get("#password").type(data.pass)
    cy.get("button[name='login']").click()
    cy.get(".custom-logo").eq(0).click()  //go to main page
})
When("I select the item",()=>{
    cy.get(".noo-thumbnail-product.hover-device").eq(4).click({force:true}) //try with href
    
})
When("I choose the size and color",()=>{
    cy.get("#pa_color").select("Beige")
    cy.get("#pa_size").select("medium")
    cy.get("input[name='quantity']").clear().type("4")
    //cy.get(".qty-increase").click().click()
    //cy.get(".yith-wcwl-add-button").eq(0).click() /uncomment later

})

When("I add to cart",()=>{
    //cy.get("//button[@type='submit']").eq(1).click()
    cy.get(".single_add_to_cart_button.button.alt").as('AddToCart')
    cy.get('@AddToCart').click()

})
When("I view the cart",()=>{
    cy.get(".button.wc-forward").as('ViewCart')
    cy.get('@ViewCart').click()
})
When("I proceed to checkout",()=>{
    cy.get(".checkout-button.button.alt.wc-forward").as('Proceed To Checkout')
    cy.get('@Proceed To Checkout').click()


})
When("I enter billing details",function(){
bg.firstname().type(data.name)
bg.lastname().type(data.lname)
bg.companyname().type(data.company)
bg.country().click()
cy.get(".select2-results__options").find(".select2-results__option").each((el)=>{
    const place = el.text()
    cy.log(place)
    if(place ==='Thailand'){
        cy.wrap(el).click()
    }
 })
bg.streetAddress().type(data.address)
bg.city().type(data.city)
bg.city().click()
bg.state().click()
cy.get(".select2-results__options").find(".select2-results__option").each((el)=>{
    const area=el.text()
    cy.log(area)
    if(area==='Phuket'){
        cy.wrap(el).click()
    }
})
bg.pincode().type(data.pincode) 
bg.phone().type(data.mobile)  
bg.email().type(data.email)
})

When("I place order",()=>{
cy.get("input[name='terms']").click()   
cy.xpath("//button[@id='place_order']").click()
})

When("I verify the details once order is placed",function(){
cy.get(".woocommerce-thankyou-order-received").should('contain','Thank you. Your order has been received.')
cy.get(".woocommerce-store-notice__dismiss-link").click()
cy.xpath("//a[@href='https://shop.demoqa.com/my-account/']").click()

})
Then("I logout from account after placing order",()=>{
    cy.get("#username").type(data.name)
    cy.get("#password").type(data.pass)
    cy.get("button[name='login']").click()
    cy.get(".woocommerce-MyAccount-content").find("a[href*='logout']").click()
})