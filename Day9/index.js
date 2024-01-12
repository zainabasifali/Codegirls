var a = [{
    "userId": 1,
    "Book_id": 1500,
    "Book_title": "Charlie and the chocolate factory",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 2,
    "Book_id": 2500,
    "Book_title": "Rapanzil",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 3,
    "Book_id": 3500,
    "Book_title": "Pride and Prejudice",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 4,
    "Book_id": 4500,
    "Book_title": "Silent Patient",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 5,
    "Book_id": 5500,
    "Book_title": "No Where",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }]


  const e = require('express')
  const app = e();
  
  app.get('/users/:uid/books/:bid', (req, res) => {
    let uid = req.params.uid
    let bid = req.params.bid
    let book = a.find(element => element.userId == uid && element.Book_id == bid)
    if(book) {
      res.send(`User Id IS ${uid} and Book Id IS ${bid}\nBook title: ${book.Book_title}\nBook body: ${book.body}`)
    }
    else {
      res.send(`No book found for User Id ${uid} and Book Id ${bid}`)
    }
  ;})

  
   app.listen(1000)
  
  