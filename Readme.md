<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/frontend/src/images/OkCroissantLogo.png" />
</p>

[Click here to view the live site!](https://okcroissant.herokuapp.com/#/)
<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/splash.gif" />
</p>

## Overview

<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/main.gif" />
</p>

Have you ever visited a country and fallen in love with their bread? Can't find anything that compares at home? That's where OKCroissant comes in. Ok Croissant is a world wide delivery service for bread. Breads are sourced from their country of origin and delivered to your doorstep.

Users can log in, fill out a profile, and shop for bread. Profile will suggest breads that users might like, but users can also shop off their suggestions. They can buy breads, and leave reviews for different breads.

Finally, all your bread dreams are fulfilled!

## OkCroissant was built with: 
* ReactJs
* MongoDB
* Redux
* Express
* Axios 
* React: Node-Sass, React-slick, Infinite-react-carousel

## Features 
+ User Authorization -- User can log in, create an account, or sign in as a guest.


<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/auth.gif" />
</p>


+ Bread Profile -- Every new user will have to create a bread profile by completing a multi-page form in order for their bread suggestions to generate on their bread profile. Once a bread profile is created, a carousel of suggested breads will appear on the User profile. The User can edit their bread profile and their suggested breads carousel will accomdate to the new bread profile.


<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/breadprofile.gif" />
</p>


+ Bread Show -- Every bread on the website has its own show page. It will show more information to the bread and Users will be able to write a review and add the bread to cart from the bread show.


<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/breadshow.gif" />
</p>


+ Bread Reviews -- User can leave a review on the bread show page and will render on the page once the User clicks on *create*


<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/reviews.gif" />
</p>


+ Cart -- User can add items to cart, delete items on the cart and checkout!


<p align="center">
  <img src="https://github.com/arieltlr/okcroissant/blob/main/gifs/cart.gif" />
</p>


## Code Highlights

+ Ariel: 



+ Kai: 
```javascript
export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);
```
```javascript
  bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user =>{ 
                    const payload = {
                        id: user.id,
                        username: user.username
                    }
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 3600},
                        (err, token) => {
                             
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            })
                        }
                    )
                })
                .catch(err => console.log(err));
            })
```

+ Monica: 
```javascript
export const fetchSuggestedBreads = (breadData) => {
    const totalqueryString = `thin=${breadData.thin}&wholewheat=${breadData.wholewheat}&savory=${breadData.savory}&filling=${breadData.filling}`
    return axios.get(`/api/breads/matches?${totalqueryString}`)
}
```
```javascript
        case RECEIVE_ALL_BREADS:
            let array = {}
            action.breads.data.forEach(bread => {
                array[bread._id] = bread
            })
            return array
```

+ Jane:
```javascript
    breads = this.props.cart.map((items, i) => {
                // debugger
                price += items.price
                return (
                    <div>
                        <hr />
                        <div className="cart-items" key={i}>
                            <CartItem className breadId={items.bread} />
                            <div className="button-cart">
                                <button className="button-splash1" value={items._id} onClick={this.handleDelete(items._id)}>Delete Bread</button>
                            </div>
                        </div>
                    </div>
                )
            })
 ```
 ```css
     .cart-items{
        display: flex;
        justify-content: space-between;
        margin-right: 85px;
        padding-top: 20px;
        .cart-items-master{
            margin-left: 30px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            
        }
 ```
