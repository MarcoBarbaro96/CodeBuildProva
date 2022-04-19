const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'eu-central-1'})


exports.handler = (event, context, callback) => {
  let params = {
      TableName: process.env.ddbTable,
      Item: {
          pk: "marco.barbaro@corley.it",
          sk: "user",
          first_name: "Marco",
          last_name: "Barbaro"
      },
      ConditionExpression: "attribute_not_exists(pk)",
      ReturnConsumedCapacity: 'TOTAL'
  }

  dynamodb.put(params, (err, data) => {
      if (err) callback(err)
      else callback(null, data)
  })
}