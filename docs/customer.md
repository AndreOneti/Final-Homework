# Customer Route

> ### Path
> '/customer'
>
> ### Methods
> GET
> > Retrieve all or one customers existing in database.
>
>```
> - '/customer'
>   - to get all customers.
> - '/customer/id'
>   - to get one specific customer.
> ```
>
> Post
> > Create one customer inside of database.
>
>- All fields are required for this route.
>
> - '/customer'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br"
> }
> ```
>
> Patch
> > Update one customer inside of database.
>
>- All fields are not required for this route.
>
> - '/customer/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br"
> }
> ```
>
> Delete
> > Delete one customer inside of database.
>
>```
> - '/customer/id'
>   - to delete one specific customer.
> ```
>
> <br>
