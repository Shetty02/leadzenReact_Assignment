import React, { useState } from 'react';
import "./Cards.css";
import  './HiddenCard.css';

function Cards({name, email, street,
    suite,
     city,
  zipcode,
  company,
    motto,
    phone,
  website, user}) {
    
  const [toggle, setToggle] = useState({});
//   const [show, setShow] = useState(false);

  function toggleFunction(id) {
    setToggle({
      [id]:!toggle[id],
    });  
  }
//   const handleViewBtn = () =>{
//     if(show === true){
//         setShow(false);
//     }
//     else{
//         setShow(true);
//     }
//   }
  return (
    <>
      <div className="cards">
        <div className="card_infoContainer">
          <div className="card_info">
            <span>
              <b>Contact</b>
            </span>
            <span>{name}</span>
          </div>
          <div className="card_info">
            <span>
              <b>Email</b>
            </span>
            <span>{email}</span>
          </div>
          <div className="card_info">
            <span>
              <b>City</b>
            </span>
            <span>{city}</span>
          </div>
          {/* <button className='viewBtn' onClick={handleViewBtn}  >View Details</button> */}
          <button
            id="btn"
            className="viewBtn"
            onClick={() => {
              toggleFunction(user.id);
            }}
          >
            {toggle[user.id] ? <>Hide Details</> : <>View Details</>}
          </button>
        </div>
      </div>
      {toggle[user.id] && (
        <div className="hiddenCards" key={user.id}>
           <div className="lefthiddenCardContainer">
            <div className='lefthiddenCard'>
              <span>
                <b>Motto</b>
              </span>
              {motto}
            </div>
            <div className='lefthiddenCard'>
              <span>
                <b>Contact</b>
              </span>
              <span>{name}</span>
            </div>
            <div className='lefthiddenCard'>
              <span>
                <b>Address</b>
              </span>
              {street},{suite},{city},{zipcode}
            </div>
            </div>        
          <div className="righthiddenCardContainer">
            <div className='righthiddenCard'>
              <span>
                <b>Company</b>
              </span>
              {company}
            </div>
            <div className='righthiddenCard'>
              <span>
                <b>Phone</b>
              </span>
              {phone}
            </div>
            <div className='righthiddenCard'>
              <span>
                <b>Website</b>
              </span>
              {website}
            </div>
          </div>
        </div>
      )}
      {/* { user.map((userData, index) => {
        return(
    // toggle[userData.id] 
    show
            &&           
            <HiddenCards
            key={userData.id}  
            id = {userData.id}
            name = {userData.name}
            street = {userData.address.street}
            suite = {userData.address.suite}
            city =  {userData.address.city}
            zipcode = {userData.address.zipcode}
            company = {userData.company.name}
            motto = {userData.company.bs}
            phone = {userData.phone}
            website = {<a href='{userData.website}'></a>}
            user = {user}
            />
        

       )}) } */}
    </>
  );
}

export default Cards