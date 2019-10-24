# WLC GQL SVC

[![Build Status](https://dev.azure.com/jacksonmiller7855/AgF-WLC/_apis/build/status/Jacksondr5.wlc-gql-svc?branchName=master)](https://dev.azure.com/jacksonmiller7855/AgF-WLC/_build/latest?definitionId=1&branchName=master)

This repo houses the [GrahpQL](https://graphql.org/) service for the WLC apps. The service is used to power the front end web application, several back end processes, and possibly a future mobile app.

## Key Technologies

- [Apollo Server](https://www.apollographql.com): The GraphQL framework that powers the server, providing the basic web server, cloud teleletry system, and several tools that accelerate development
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that provides static type checking
- [Jest](https://jestjs.io/): An easy to use JS testing framework. Used for unit testing.
- [GraphQL code generator](https://graphql-code-generator.com/): Gave an easy way to generate TS types from .graphql files. Apollo didn't _seem_ to have an easy way to do this, but this utility worked out great.

## How to Use This Repo

1. Clone the repo
2. Install dependencies using the terminal

```
> npm i
```

3. Debug the server

```
> npm start
```

4. Connect using [GraphQL Playground](https://github.com/prisma/graphql-playground)
