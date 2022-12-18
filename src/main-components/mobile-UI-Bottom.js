import classes from "./mobile-UI-Bottom.module.css";
import pinkIcon from "../assets/svgexport-1-pink.svg";
import heart from "../assets/svgexport-2-bottom.svg";
import login from "../assets/svgexport-3-bottom.svg";

function MobileUIBottom() {
  return (
    <div className={classes.mobileUIBottom}>
      <div className={classes.bottomContentCont}>
        <div className={classes.explore}>
          <div className={classes.bottomIconContainer}>
            <img
              className={classes.botIcon}
              src={pinkIcon}
              alt="pink-icon"
            ></img>
          </div>
          <div className={classes.bottomTextCont}>
            <span className={classes.bottomText}>Explore</span>
          </div>
        </div>
        <div className={classes.wishlist}>
          <div className={classes.bottomIconContainer}>
            <img className={classes.botIcon} src={heart} alt="heart-icon"></img>
          </div>
          <div className={classes.bottomTextCont}>
            <span className={classes.bottomText}>Wishlists</span>
          </div>
        </div>
        <div className={classes.login}>
          <div className={classes.bottomIconContainer}>
            <img className={classes.botIcon} src={login} alt="login-icon"></img>
          </div>
          <div className={classes.bottomTextCont}>
            <span className={classes.bottomText}>Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileUIBottom;
