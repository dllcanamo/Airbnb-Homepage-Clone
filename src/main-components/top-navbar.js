
import classes from './top-navbar.module.css';
import abnbLogo from '../assets/svgexport-1.svg';

function TopNavbar() {
    return (
        <div className={classes.mainTopNav}>
            <div className={classes.leftContainer}>
                <div className={classes.logoContainer}>
                    <img className={classes.logo} src={abnbLogo} alt='ABNB-LOGO'></img>
                </div>
            </div>
            <div className={classes.middleContainer}>
                <div className={classes.addWidgetContainer}>
                    <div className={classes.addWidget}>
                        
                    </div>
                </div>
            </div>
            <div className={classes.rightContainer}>

            </div>

        </div>
    );
}

export default TopNavbar