import React, {useState, useEffect} from 'react'
import { ButtonContainer } from '../components/Customs'
import CardItem from '../components/CardItem'
import '../components/CardItem.css';

function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4000/event";

        const fetchData = async () => {
            try {
                const response = await fetch(url,{
                    method: "GET",
                    headers: { api_key: process.env.REACT_APP_API_KEY }
                });
                const json = await response.json();
                console.log(json);
                setEvents(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const cardItemView = (res) => {
        const id = res._id;
        const title = res.title;
        const link = res.link;
        const des = res.description;
        const imgs = res.images;
        const img = imgs[0].key;

        console.log("Title:", title, " ", link, " ", des, " ", img, " ", id);
        

        <CardItem
            src={img}
            text={des}
            label={title}
            path={link}
            id={id}
        />
    }

    return (
        <div className="background">
            <ButtonContainer>Add Event</ButtonContainer>
            <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='../images/3.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='../images/5.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../images/6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='../images/7.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
        </div>
    )
}

export default Events
