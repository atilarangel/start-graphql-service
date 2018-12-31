const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { importSchema } = require('graphql-import')
const app = express()

const overall = importSchema('./schema/schemas.graphql')
const schema = buildSchema(overall)

const resolvers = {
  say: 'Here we go again'
}

app.use('/', cors(),graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(5000, () => {
  console.log('Now browse to\nlocalhost:5000/')
})
