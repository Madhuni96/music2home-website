import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {

  const url = "http://localhost:4000/event/" + props.id + "/images/" + props.src;

  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    //fetchImage();
  }, []);

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;