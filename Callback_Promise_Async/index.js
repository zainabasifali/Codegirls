//With call_back hell
function Order_Processing(){

       const Order_data = "Bring a Pizza for me";
   
       Order_Address((Address) => {
          Order_Payment((Payment) => {
           logFinalData(Order_data,Payment);
         });
       });

   }
   
   function Order_Address(Callback) {
     const address = "Abc Garden 20004";
     Callback(address);
   }
   
   function Order_Payment(Callback) {
     payment = 2000;
     Callback(payment);
   }
   
   function logFinalData(order,payment) {
     console.log("Your order was : "+order)
     console.log('Payment '+payment+" is done,data is recorded");
   }
   
   Order_Processing();

// with Async await
async function orderProcessing() {

     const orderData = "Bring a Pizza for me";
   
     let address = await orderAddress();
     let payment = await orderPayment();
     let finalData = await logFinalData(orderData, payment);
   
   }
   
   async function orderAddress() {
     const address = "Abc Garden 20004";
     return address;
   }
   
   async function orderPayment() {
     let payment = 2000;
     return payment;
   }
   
   async function logFinalData(order, payment) {
     console.log("Your order was : " + order);
     console.log('Payment ' + payment + " is done, data is recorded");
   }
   
   orderProcessing(); 

// with promiss chain
function orderProcessing() {

     const orderData = "Bring a Pizza for me";
   
     return Promise.resolve(orderData)
       .then(orderAddress) 
       .then(orderPayment) 
       .then(logFinalData) 
       .catch(console.error); 
   }
   
   function orderAddress(orderData) {
     return new Promise((resolve) => {
       setTimeout(() => {
         const address = "Abc Garden 20004";
         resolve({ orderData, address }); // Pass both the order data and the address
       }, 1000);
     });
   }
   
   function orderPayment({ orderData, address }) {
     return new Promise((resolve) => {
       setTimeout(() => {
         let payment = 2000;
         resolve({ orderData, address, payment }); // Pass the order data, the address, and the payment
       }, 1000);
     });
   }
   
   function logFinalData({ orderData, address, payment }) {
     return new Promise((resolve) => {
       setTimeout(() => {
         console.log("Your order was : " + orderData);
         console.log("Your address is : " + address);
         console.log("Payment " + payment + " is done, data is recorded");
         resolve("Order processed successfully"); 
       }, 1000);
     });
   }
   
   orderProcessing().then(console.log); 