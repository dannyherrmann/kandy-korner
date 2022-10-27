# kandy-korner

```
{
  "users": [
    {
      "id": 1,
      "fullName": "Danny Herrmann",
      "email": "dannyherrmann91@gmail.com",
      "isStaff": true
    },
    {
      "id": 2,
      "fullName": "Kim Herrmann",
      "email": "kim@gmail.com",
      "isStaff": false
    }
  ],
  "employees": [
    {
      "id": 1,
      "userId": 1,
      "startDate": "2020-03-09T22:18:26.625Z",
      "payRate": 25
    }
  ],
  "customers": [
    {
      "id": 1,
      "userId": 2,
      "loyaltyNumber": 12345
    }
  ],
  "purchases": [
    {
      "id": 1,
      "customerId": 1,
      "productId": 1,
      "quantity": 3
    }
  ],
  "products": [
    {
      "id": 1,
      "productName": "Snickers",
      "productTypeId": 1,
      "locationId": 1,
      "cost": 3
    },
    {
      "id": 2,
      "productName": "Smarties",
      "productTypeId": 2,
      "locationId": 3,
      "cost": 4
    },
    {
      "id": 3,
      "productName": "Bazooka Bubble Gum",
      "productTypeId": 3,
      "locationId": 2,
      "cost": 26.5
    },
    {
      "userId": 1,
      "productName": "Hershey's",
      "productTypeId": 1,
      "cost": 5,
      "id": 4
    },
    {
      "userId": 1,
      "productName": "Bazooka",
      "productTypeId": 3,
      "cost": 10,
      "id": 5
    },
    {
      "userId": 1,
      "productName": "Hershey's Kisses",
      "productTypeId": 1,
      "cost": 1,
      "id": 6
    }
  ],
  "productTypes": [
    {
      "id": 1,
      "name": "Chocolate"
    },
    {
      "id": 2,
      "name": "Hard Candy"
    },
    {
      "id": 3,
      "name": "Gum"
    }
  ],
  "locations": [
    {
      "id": 1,
      "addressLine1": "123 Smarties Way",
      "city": "Nashville",
      "state": "TN",
      "zip": 37211,
      "squareFootage": 3000
    },
    {
      "id": 2,
      "addressLine1": "657 Snickers Drive",
      "city": "Chicago",
      "state": "IL",
      "zip": 60521,
      "squareFootage": 2500
    },
    {
      "id": 3,
      "addressLine1": "782 Kandy Korner St",
      "city": "Dallas",
      "state": "TX",
      "zip": 70511,
      "squareFootage": 4000
    }
  ]
}
```