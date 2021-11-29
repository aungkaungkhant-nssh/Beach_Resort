import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import StyledHero from "../components/StyledHero";
import { RoomContext } from "../context";
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme)=>({
      singleRoom:{
        padding: "5rem 0 0 0",
        "& .single-room-info":{
          width: "80vw",
          display: "grid",
          gridTemplateColumns: "1fr",
          margin: "2rem auto",
          "& .desc,.info":{
            margin:" 1rem 0",
            "& h3":{
              textTransform: "capitalize",
              letterSpacing: "2px"
            },
            "& p":{
              lineHeight:"1.5"
            }
          }
        },
        "& .single-room-images":{
            width: "80vw",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gridRowGap: "2rem",
            gridColumnGap: "50px",
            "& img":{
              height:"300px",
              width: "100%",
              display: "block"
            }
        }
      },
      roomExtras:{
        width: "80vw",
        margin: "0 auto 3rem auto",
        "& h6":{
          textTransform: "capitalize",
          letterSpacing: "2px"
        },
        "& .extras":{
          listStyleType: "none",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gridColumnGap: "2rem",
          gridRowGap: "1rem"
        }
      },
  
}));
const SingleRoom=(props)=>{
    const classes=useStyles();
    const {slug}=useParams();
    const {rooms,singleRoom,loading,getRooms,getRoom}=useContext(RoomContext);
    useEffect(()=>{
      if(slug){
        getRoom(slug)
      }
    },[slug])
     const {name,price,size,capacity,pets,breakfast,image,description,extras}=singleRoom.fields||{};
  
    return(
      <>
          <StyledHero image={image&&image[0]}>
              <Banner title={`${name} rooms`}>
                <Link to="/rooms">
                    Back To rooms
                </Link>
              </Banner>
          </StyledHero>
          <section className={classes.singleRoom}>
              <div className="single-room-images">
                {image && image.map((item, index) => (
                  <img key={index} src={item}  />
                ))}
              </div>
              <div className="single-room-info">
                  <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                  </article>
                  <article className="info">
                      <h3>info</h3>
                      <h6>price : ${price}</h6>
                      <h6>size : {size} SQFT</h6>
                      <h6>
                        max capacity :
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                      </h6>
                      <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                      <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
              </div>
          </section>
          <section className={classes.roomExtras}>
            <h6>extras </h6>
            <ul className="extras">
              {extras && extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
        </section>
       </>
    )
}
export default SingleRoom