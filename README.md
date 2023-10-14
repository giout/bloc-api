<h1>API de bloc de notas</h1>
<p>URL -> https://bloc-api-production.up.railway.app</p>
<br>
<h2>Registro</h2>
<p>POST /auth/signup</p>
<br>
<p><strong>Request body</strong></p>

```json
{
  "username": "luigi",
  "email": "luigi@gmail.com",
  "password": "1234"
}
```
<br>
<p><strong>Response</strong></p>

```json
{
  "username": "luigi",
  "email": "luigi@gmail.com",
  "password": "$2b$10$iY4A.5iPRxzybrLmevjeJuhUab5L0tSg9O7Ab8sFHt64rr/4/R.5q",
  "_id": "6528d9cbfe3259323f7f6044"
}
```

<br>
<h2>Inicio de sesion</h2>
<p>POST /auth/login</p>
<br>
<p><strong>Request body</strong></p>

```json
{
    "email": "luigi@gmail.com",
    "password": "1234"
}
```

<br>
<p><strong>Response</strong></p>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjhkOWNiZmUzMjU5MzIzZjdmNjA0NCIsImlhdCI6MTY5NzE3NjA0NCwiZXhwIjoxNjk3NzgwODQ0fQ._L_z7B2e1hKn6DRprvrPZGOrXZN6Rra2Rx-jePxkbdg"
}
```

<br>
<p>Las siguientes rutas estan protegidas por una capa de sesion, es obligatorio para su funcionamiento pasar siempre el token de acceso al incluir la siguiente cabecera cuando se realiza cada solicitud: </p>

```javascript
Authorization -> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjhkOWNiZmUzMjU5MzIzZjdmNjA0NCIsImlhdCI6MTY5NzE3NjA0NCwiZXhwIjoxNjk3NzgwODQ0fQ._L_z7B2e1hKn6DRprvrPZGOrXZN6Rra2Rx-jePxkbdg
```

<br>

<h2>Obtener usuario</h2>
<p>GET /users</p>
<br>
<p><strong>Response</strong></p>

```json
{
  "_id": "6528d9cbfe3259323f7f6044",
  "username": "luigi",
  "email": "luigi@gmail.com",
  "password": "$2b$10$iY4A.5iPRxzybrLmevjeJuhUab5L0tSg9O7Ab8sFHt64rr/4/R.5q"
}
```

<br>
<h2>Actualizar usuario</h2>
<p>PUT /users</p>
<br>
<p><strong>Request body</strong></p>

```json
{
  "username": "luigi-og"
}
```

<br>
<p><strong>Response</strong></p>

```json
{
  "_id": "6528d9cbfe3259323f7f6044",
  "username": "luigi-og",
  "email": "luigi@gmail.com",
  "password": "$2b$10$iY4A.5iPRxzybrLmevjeJuhUab5L0tSg9O7Ab8sFHt64rr/4/R.5q"
}
```

<br>
<h2>Eliminar usuario</h2>
<p>DELETE /users</p>
<br>
<h2>Obtener carpetas por usuario</h2>
<p>GET /folders/user</p>
<br>
<p><strong>Response</strong></p>

```json
[
  {
    "_id": "6528dc0bfe3259323f7f604b",
    "title": "carpeta1",
    "userId": "6528d9cbfe3259323f7f6044"
  },
  {
    "_id": "6528dd54fe3259323f7f604d",
    "title": "universidad",
    "userId": "6528d9cbfe3259323f7f6044"
  },
  {
    "_id": "6528dd6afe3259323f7f604f",
    "title": "agenda",
    "userId": "6528d9cbfe3259323f7f6044"
  }
]
```

<br>
<h2>Crear carpeta</h2>
<p>POST /folders</p>
<br>
<p><strong>Request body</strong></p>

```json
{
  "title": "carpeta1",
  "userId": "6528d9cbfe3259323f7f6044"
}
```

<br>
<p><strong>Response</strong></p>

```json
{
  "title": "carpeta1",
  "userId": "6528d9cbfe3259323f7f6044",
  "_id": "6528dc0bfe3259323f7f604b"
}
```

<br>
<h2>Actualizar carpeta</h2>
<p>PUT /folders/6528dc0bfe3259323f7f604b</p>
<br>
<p><strong>Request body</strong></p>

```json
{
    "title": "secreto"
}
```

<br>

```json
{
  "title": "secreto",
  "userId": "6528d9cbfe3259323f7f6044",
  "_id": "6528dc0bfe3259323f7f604b"
}
```

<br>
<h2>Eliminar carpeta</h2>
<p>DELETE /folders/6528dc0bfe3259323f7f604b</p>
<br>
<h2>Obtener notas por carpeta</h2>
<p>GET /folders/6528dc0bfe3259323f7f604b</p>
<p><strong>Response</strong></p>

```json
[
  {
    "_id": "6528ded5fe3259323f7f6055",
    "title": "nota",
    "content": "...",
    "folderId": "6528dc0bfe3259323f7f604b"
  },
  {
    "_id": "6528df45fe3259323f7f6057",
    "title": "nota privada",
    "content": "...",
    "folderId": "6528dc0bfe3259323f7f604b"
  },
  {
    "_id": "6528df5efe3259323f7f6059",
    "title": "pendiente",
    "content": "o_O",
    "folderId": "6528dc0bfe3259323f7f604b"
  }
]
```

<br>
<h2>Crear nota</h2>
<p>POST /notes</p>
<br>
<p><strong>Request body</strong></p>

```json
{
  "title": "nota",
  "content": "...",
  "folderId": "6528dc0bfe3259323f7f604b"
}
```

<br>
<p><strong>Response</strong></p>

```json
{
  "title": "nota",
  "content": "...",
  "folderId": "6528dc0bfe3259323f7f604b",
  "_id": "6528ded5fe3259323f7f6055"
}
```

<br>
<h2>Actualizar nota</h2>
<p>PUT /folders/6528ded5fe3259323f7f6055</p>
<br>
<p><strong>Request body</strong></p>

```json
{
  "content": "Este contenido es privado."
}
```

<br>

<p><strong>Response</strong></p>

```json
{
  "title": "nota",
  "content": "Este contenido es privado.",
  "folderId": "6528dc0bfe3259323f7f604b",
  "_id": "6528ded5fe3259323f7f6055"
}
```

<br>
<h2>Eliminar nota</h2>
<p>DELETE /folders/6528ded5fe3259323f7f6055</p>
<br>
