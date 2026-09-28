exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "customerData": [
          {
            "OrderNumber": 10100,
            "CustomerId": 1,
            "Description": "T-Shirts: 7"
          },
          {
            "OrderNumber": 10200,
            "CustomerId": 2,
            "Description": "Jeans: 12"
          },
          {
            "OrderNumber": 10300,
            "CustomerId": 3,
            "Description": "Shoes: 15"
          },
          {
            "OrderNumber": 10400,
            "CustomerId": 1,
            "Description": "Shoes: 15"
          },
          {
            "OrderNumber": 10500,
            "CustomerId": 2,
            "Description": "Jeans: 3"
          },
          {
            "OrderNumber": 10600,
            "CustomerId": 3,
            "Description": "T-Shirts: 4"
          },
          {
            "OrderNumber": 10700,
            "CustomerId": 1,
            "Description": "Shoes: 10"
          },
          {
            "OrderNumber": 10800,
            "CustomerId": 2,
            "Description": "Jeans: 3"
          },
          {
            "OrderNumber": 10900,
            "CustomerId": 3,
            "Description": "T-Shirts: 10"
          },
          {
            "OrderNumber": 11000,
            "CustomerId": 1,
            "Description": "T-Shirts: 10"
          }
        ]
      }
    )
  };
}