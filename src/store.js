const store={
    "products":[
        {
            "name":"Nike air force",
            "id":1,
            "category":"shoes",
            "details":"40 mins, 30 questions",
            "stock":"12",
            "price":"300",
            "alt":"demo product",
            "seller":"admin",
            "description":"product full description goes here",
            "image":["images/shoes-img9.png"]
          },
          {
            "name":"Adidas",
            "id":2,
            "category":"shoes",
            "details":"40 mins, 30 questions",
            "stock":"12",
            "price":"300",
            "alt":"demo product",
            "seller":"admin",
            "description":"product full description goes here",
            "image":["images/shoes-img2.png"]
          },
          {
            "name":"Nike force",
            "id":3,
            "category":"shoes",
            "details":"40 mins, 30 questions",
            "stock":"12",
            "price":"300",
            "alt":"demo product",
            "seller":"admin",
            "description":"product full description goes here",
            "image":["images/shoes-img5.png"]
          }
    ],
    "cart":JSON.parse(localStorage.getItem("cart")),
    "cartTotal":0,
    "user":[],
    "ledger":[],
    "brands":[],
    "application":{
      "siteName":"My script",
      "companyName":"Charming's Desk",
      "deliveryFee":"50",
      "currency":"$"
    },
    "categories":[
      {
        name:'shoes',
        image:'images/shoes-img9.png',
        alt:'category alt'
      }
    ],
    "slideShow": [
      {
          "url":"images/1.png",
          "caption":"slide 1"
      },
       {
          "url":"images/2.png",
          "caption":"slide 1"
      },
       {
          "url":"images/3.png",
          "caption":"slide 1"
      },
      ]
}

export default store;