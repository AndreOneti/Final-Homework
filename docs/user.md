# User Route

> ### Path
> '/user'
>
> ### Methods
> GET
> > Retrieve all or one users existing in database.
>
> ```
> - '/user'
>   - to get all users.
> - '/user/id'
>   - to get one specific user by id.
> ```
>
> Post
> > Create one user inside of database.
>
> - All fields are required for this route.
>
> - '/user'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br",
>   "password": "12345"
> }
> ```
>
> Patch
> > Update one user inside of database.
>
>- All fields are optional for this route.
>
> - '/user/id'
>
> ```javascript
> {
>   "name": "Andre",
>   "email": "andreluiz@inatel.br",
>   "password": "12345"
> }
> ```
>
> Delete
> > Delete one user inside of database.
>
> ```
> - '/user/id'
>   - to delete one specific user.
> ```
>
> <br>
