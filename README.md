# GraphQL Federation with `mercurius` + `apollo gateway`

> **Warning**  
> This example is based on federation v1 !

- apps/gateway → `apollo gateway` server
- apps/user-server → `mercurius` server
- apps/photo-server → `mercurius` server

## It works!

<img width="665" alt="image" src="https://github.com/rhea-so/nestjs-mercurius-apollo-gateway-federation/assets/25793226/6dddf735-76de-4cbd-bbce-aaa5cddd489c">

```graphql
query {
  user {
    id
    name
    photos {
      id
      description
    }
  }
}
```

```json
{
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "photos": [
        {
          "id": 1,
          "description": "test"
        }
      ]
    }
  }
}
```
