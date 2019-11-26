# Delivery Route

> ### Path
> '/delivery'
>
> ### Methods
> GET
> > Retrieve all or one deliveries existing in database.
>
>```
> - 'delivery'
>   - to get all deliverys.
> - 'delivery/id'
>   - to get one specific delivery.
> ```
>
> Post
> > Create one delivery inside of database.
>
>- All fields are required for this route except isBuyer.
>
> - 'delivery'
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
> Patch
> > Update one delivery inside of database.
>
>- All fields are not required for this route
>
> - 'delivery/id'
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
> Delete
> > Delete one delivery inside of database.
>
>```
> - 'delivery/id'
>   - to delete one specific delivery.
> ```
>
> <br>

