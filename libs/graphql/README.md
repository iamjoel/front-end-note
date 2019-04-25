# GraphQL
将逻辑从 Schema 中抽出来，将 GraphQL Sever 四个逻辑部分为 Schema, Resolver, Model 和 Connecor。

Schema 定义有哪些字段， GraphQL Server 通过 URL及参数来 决定调用动态调用哪些 Resolver， Resolver 来掉对应的 Connector， Connector 调 Model 来进行数据库操作。

用 dataloader 来做数据缓存，减少查数据库的次数。

## Schema
字段的类型支持 `String`, `Int`, `Float`, `Boolean`, `ID`。 字段非空在值后`!`。如: 
```
enum Gender {
  GIRL
  NORMAL
  LOW
}

type User {
  name: String!,
  gender: Gender
  friends: [User],
  other(query: String): Int   // 传参的写法
}
```


[更多](https://graphql.org/graphql-js/basic-types/)

## 工具
* [graphiql](https://github.com/graphql/graphiql) 发送 GraphQL 工具

## 资源
* [Getting Started With GraphQL.js](https://graphql.org/graphql-js/)
* [GraphQL tools](https://www.apollographql.com/docs/graphql-tools/) Apollo。
* [《解析 GraphQL 的查询语法》【译】](https://zhuanlan.zhihu.com/p/40418866)

