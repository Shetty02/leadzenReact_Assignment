import React from 'react'
import Cards from './Cards'
import "./CardList.css"
function CardList({user}) {
  return (
    <div className="cardList">
       { user.map((userData, index) => {
            return (
                <>
                <Cards
                key={userData.id}
                name = {userData.name}
                email = {userData.email}
                city = {userData.address.city}
                user = {user}
                street = {userData.address.street}
                suite = {userData.address.suite}
                zipcode = {userData.address.zipcode}
                company = {userData.company.name}
                motto = {userData.company.bs}
                phone = {userData.phone}
                website = {<a style={{textDecorationLine:"none"}} href={userData.website}>{userData.website}</a> }
                
                />
                </>
            )
        })}
    </div>
  )
}

export default CardList