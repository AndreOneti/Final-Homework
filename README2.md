# DM124 Final Work - Rest API with Node.js

## Why?

> This api is used to manage deliveries.
>
> Have the option to change status of delivery, create a new, retrieve one or many and delete one.

---------------------------------------------------------------------------------------------------------------

## Routs

> ## Default route
>
> ### Path
> '/api/'
>
> ### Methods
> GET
> > Retrieve all routes existed in this API.
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## User route
>
> ### Path
> '/api/user'
>
> ### Methods
> GET
> > Retrieve all or one users existing in database.
>
> Post
> > Create one user inside of database.
>
> Patch
> > Update one user inside of database.
>
> Delete
> > Delete one user inside of database.
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Order route
>
> ### Path
> '/api/order'
>
> ### Methods
> GET
> > Retrieve all or one orders existing in database.
>
> Post
> > Create one order inside of database.
>
> Patch
> > Update one order inside of database.
>
> Delete
> > Delete one order inside of database.
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Customer route
>
> ### Path
> '/api/customer'
>
> ### Methods
> GET
> > Retrieve all or one customers existing in database.
>
> Post
> > Create one customer inside of database.
>
> Patch
> > Update one customer inside of database.
>
> Delete
> > Delete one customer inside of database.
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Delivery route
>
> ### Path
> '/api/delivery'
>
> ### Methods
> GET
> > Retrieve all or one deliveries existing in database.
>
> Post
> > Create one delivery inside of database.
>
> Patch
> > Update one delivery inside of database.
>
> Delete
> > Delete one delivery inside of database.
>
> <br>

---------------------------------------------------------------------------------------------------------------

## Parameters

> ## User route
>
> ### Get
>
> ```
> - '/api/user'
>   - to get all users.
> - '/api/user/id'
>   - to get one specific user.
> ```
>
> ---
>
> ### Post
>
> - All fields are required for this route.
>
> - '/api/user/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br",
>   "password": "12345"
> }
> ```
>
> ---
>
> ### Patch
>
> - All fields are not required for this route.
>
> - '/api/user/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br",
>   "password": "12345"
> }
> ```
>
> ---
>
> ### Delete
>
> ```
> - '/api/user/id'
>   - to delete one specific user.
> ```
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Order route
>
> ### Get
>
> ```
> - '/api/order'
>   - to get all orders.
> - '/api/order/id'
>   - to get one specific order.
> ```
>
> ---
>
> ### Post
>
> - All fields are required for this route.
>
> - '/api/order/id'
>
> ```javascript
> {
>   "description": "MouseGamer",
>   "quantity": 1,
>   "price": 23.50
> }
> ```
>
> ---
>
> ### Patch
>
> - All fields are not required for this route.
>
> - '/api/order/id'
>
> ```javascript
> {
>   "description": "MouseGamer",
>   "quantity": 1,
>   "price": 23.50
> }
> ```
>
> ---
>
> ### Delete
>
> ```
> - '/api/order/id'
>   - to delete one specific order.
> ```
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Customer route
>
> ### Get
>
> ```
> - '/api/customer'
>   - to get all customers.
> - '/api/customer/id'
>   - to get one specific customer.
> ```
>
> ---
>
> ### Post
>
> - All fields are required for this route.
>
> - '/api/customer/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br"
> }
> ```
>
> ---
>
> ### Patch
>
> - All fields are not required for this route.
>
> - '/api/customer/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br"
> }
> ```
>
> ---
>
> ### Delete
>
> ```
> - '/api/customer/id'
>   - to delete one specific customer.
> ```
>
> <br>
>
> ---------------------------------------------------------------------------------------------------------------
>
> ## Delivery route
>
> ### Get
>
> ```
> - '/api/delivery'
>   - to get all deliverys.
> - '/api/delivery/id'
>   - to get one specific delivery.
> ```
>
> ---
>
> ### Post
>
> - All fields are required for this route except isBuyer.
>
> - '/api/delivery/id'
>
> ```javascript
> {
>   "orderId": "5db7a74ace328f232c4c06ce",
>   "custumerId": "5db7a74dce328f232c4c06cf"
>   "recieveName": "Andre"
>   "recieveVatNumber": "11111111111"
>   "isBuyer": "true"
>   "deliveryDate": "30/10/2019-13:54:20"
>   "location": "Conceicao dos ouros - MG"
> }
> ```
>
> ---
>
> ### Patch
>
> - All fields are not required for this route
>
> - '/api/delivery/id'
>
> ```javascript
> {
>   "orderId": "5db7a74ace328f232c4c06ce",
>   "custumerId": "5db7a74dce328f232c4c06cf"
>   "recieveName": "Andre"
>   "recieveVatNumber": "11111111111"
>   "isBuyer": "true"
>   "deliveryDate": "30/10/2019-13:54:20"
>   "location": "Conceicao dos ouros - MG"
> }
> ```
>
> ---
>
> ### Delete
>
> ```
> - '/api/delivery/id'
>   - to delete one specific delivery.
> ```
>
> <br>
