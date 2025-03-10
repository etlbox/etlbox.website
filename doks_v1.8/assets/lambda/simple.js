exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "data": [
          {
            "Id": 1,
            "Value": "Test1",
          },
          {
            "Id": 2,
            "Value": "Test2",
          },
          {
            "Id": 3,
            "Value": "Test3",
          },
          {
            "Id": 4,
            "Value": "Test4",
          }
        ]
      }
    )
  };
}
