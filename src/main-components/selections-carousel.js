import classes from "./selections-carousel.module.css";
import categories from "../constants/categories";
import prevButton from "../assets/svgexport-8.svg";
import nextButton from "../assets/svgexport-9.svg";
import catSampleLogo from "../assets/cat-sample-logo.jpg";
import catSampleLogoGrey from "../assets/cat-sample-logo-grey.jpg";

function SelectionsCarousel() {
  return (
    <div className={classes.carouselCont}>
      <div className={classes.prevCont}>
        <div className={classes.prevBtnCont}>
          {/* <div className={classes.prevBtn}>
            <img
              className={classes.icons}
              src={prevButton}
              alt="prev-btn"
            ></img>
          </div> */}
        </div>
        <div className={classes.lspacer}></div>
      </div>
      <div className={classes.nextCont}>
        <div className={classes.rspacer}></div>
        <div className={classes.nextBtnCont}>
          {/* <div className={classes.nextBtn}>
            <img
              className={classes.icons}
              src={nextButton}
              alt="next-btn"
            ></img>
          </div> */}
        </div>
      </div>
      {/* <div className={classes.categoryRow}> */}
      {categories.map((elem, index) => {
        if (index === 0) {
          return (
            <div className={`${classes.categoryContainer}  ${classes.firstElement}`}>
              <div className={classes.catLogoCont}>
                <img
                  className={classes.catLogo}
                  src={catSampleLogo}
                  alt="cat-sample-logo"
                ></img>
              </div>
              <span className={classes.catText}>{elem}</span>
            </div>
          );
        }

        if (index === categories.length-1) {
          return (
            <div className={`${classes.categoryContainer}  ${classes.lastElement}`}>
              <div className={classes.catLogoCont}>
                <img
                  className={`${classes.catLogo}  ${classes.initialIcon}`}
                  src={catSampleLogoGrey}
                  alt="cat-sample-logo"
                ></img>
                <img
                  className={`${classes.catLogo}  ${classes.hoveredIcon}`}
                  src={catSampleLogo}
                  alt="cat-sample-logo"
                ></img>
              </div>
              <span className={`${classes.catText}  ${classes.nonActiveText}`}>{elem}</span>
            </div>
          );
        }

        return (
          <div className={`${classes.categoryContainer}  ${classes.middleElement}`}>
            <div className={classes.catLogoCont}>
              <img
                className={`${classes.catLogo}  ${classes.initialIcon}`}
                src={catSampleLogoGrey}
                alt="cat-sample-logo"
              ></img>
              <img
                className={`${classes.catLogo}  ${classes.hoveredIcon}`}
                src={catSampleLogo}
                alt="cat-sample-logo"
              ></img>
            </div>
            <span className={`${classes.catText}  ${classes.nonActiveText}`}>{elem}</span>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
}

export default SelectionsCarousel;
