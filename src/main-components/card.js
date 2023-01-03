import classes from "./card.module.css";
import starIcon from '../assets/svgexport-13.svg';

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.imgCont}></div>
      <div className={classes.detailCont}>
        <div className={classes.locationRating}>
          <div className={classes.location}>
            Marikina, Philippines
            {/* <span className={classes.locationText}>Marikina, Philippines asdkajsdhadahskjd</span> */}
          </div>
          <div className={classes.rating}>
            <img className={classes.starIcon} src={starIcon} alt='star-icon'></img>
            <span className={classes.ratingText}>4.95</span>
          </div>
        </div>
        <div className={classes.distance}>
            2,628 kilometers away
          {/* <span className={classes.distanceText}>2,628 kilometers away</span> */}
        </div>
        <div className={classes.dates}>
            Feb 15-20
          {/* <span className={classes.datesText}>Marikina, Philippines</span> */}
        </div>
        <div className={classes.price}>
          <span className={classes.priceText}>₱ 7,069</span>
          <span className={classes.nightText}>night</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
