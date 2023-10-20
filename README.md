# GraphQL Federation with `mercurius` + `apollo gateway`

> **Warning**  
> This example is based on federation v1 !

- apps/gateway → `apollo gateway` server
- apps/user-server → `mercurius` server
- apps/photo-server → `mercurius` server

## Testing

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
