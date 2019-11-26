# Order Route

> ### Path
> '/order'
>
> ### Methods
> GET
> > Retrieve all or one orders existing in database.
>
>```
> - '/order'
>   - to get all orders.
> - '/order/id'
>   - to get one specific order.
> ```
>
> Post
> > Create one order inside of database.
>
>- All fields are required for this route.
>
> - '/order'
>
> ```javascript
> {
>   "description": "MouseGamer",
>   "quantity": 1,
>   "price": 23.50
> }
> ```
>
> Patch
> > Update one order inside of database.
>
>- All fields are optional for this route.
>
> - '/order/id'
>
> ```javascript
> {
>   "description": "MouseGamer",
>   "quantity": 1,
>   "price": 23.50
> }
> ```
>
> Delete
> > Delete one order inside of database.
>
>```
> - '/order/id'
>   - to delete one specific order.
> ```
>
> <br>
