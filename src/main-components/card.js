import classes from "./card.module.css";
import starIcon from '../assets/svgexport-13.svg';
import heartIcon from '../assets/svgexport-14.svg';
import prevIcon from '../assets/svgexport-15.svg';
import nextIcon from '../assets/svgexport-16.svg';
import sampleHome from '../assets/sample.webp'

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.imgCont}>
        <div className={classes.imageBlock}>
          <img className={classes.sampleHome} src={sampleHome} alt='sample'></img>
        </div>
        <div className={classes.imgWidgetCont}>
          <div className={classes.heartCont}>
            <div className={classes.heartBtn}>
              <img className={classes.heartIcon} src={heartIcon} alt='heart-icon'></img>
            </div>
          </div>
          <div className={classes.nextPrevCont}>
            <div className={classes.prevBtn}>
            <img className={classes.prevIcon} src={prevIcon} alt='prev-icon'></img>
            </div>
            <div className={classes.nextBtn}>
            <img className={classes.nextIcon} src={nextIcon} alt='next-icon'></img>
            </div>
            </div>
            <div className={classes.circlesCont}>
              <div className={classes.circlesBlock}>
                <div className={classes.circleActive}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
              </div>
            </div>
        </div>
      </div>
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
