import classes from "./top-navbar.module.css";
import abnbLogo from "../assets/svgexport-1.svg";
import globeLogo from '../assets/svgexport-5.svg';
import burger from '../assets/svgexport-6.svg';
import userIcon from '../assets/svgexport-7.svg';
import WidgetContent from "./widget-content";

function TopNavbar() {
  return (
    <div className={classes.mainTopNav}>
      <div className={classes.leftContainer}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={abnbLogo} alt="ABNB-LOGO"></img>
        </div>
      </div>
      <div className={classes.middleContainer}>
        <div className={classes.addWidgetContainer}>
            <div className={classes.addWidget}>
              <WidgetContent></WidgetContent>
            </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.miscContainer}>
            <div className={classes.bnbHome}>
                <div className={classes.bnbHomeTextCont}>
                    <span className={classes.bnbHomeText}>Airbnb your home </span>
                </div>
            </div>
            <div className={classes.settings}>
                <img className={classes.globeLogo} src={globeLogo} alt='globe-logo'></img>
            </div>
            <div className={classes.accountContainer}>
                <img className={classes.userIcon} src={userIcon} alt='user-icon'></img>
                <img className={classes.burgerIcon} src={burger} alt='burger-icon'></img>
            </div>

        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
