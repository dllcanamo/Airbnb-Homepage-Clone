
import classes from './mobile-UI-Top.module.css';
import magnifyIcon from '../assets/svgexport-4-black.svg';
import filterIcon from '../assets/svgexport-10.svg';

function mobileUITop() {
    return (
        <div className={classes.mobileUITop}>
            <div className={classes.mobileLeftIcon}>
                {/* <div className={classes.leftIconCont}> */}
                    <img className={classes.leftIcon} src={magnifyIcon} alt='magnify-icon'></img>
                {/* </div> */}
            </div>
            <div className={classes.mobileBtn}>
                <div className={classes.whereTo}>
                    <span className={classes.whereToText}>Where to?</span>
                </div>
                <div className={classes.aaa}>
                    <div className={classes.aaa1}>
                        <span className={classes.aaa1Text}>Anywhere</span>
                    </div>
                    <div className={classes.circle}>•</div>
                    <div className={classes.aaa1}>
                        <span className={classes.aaa2Text}>Any week</span>
                    </div>
                    <div className={classes.circle}>•</div>
                    <div className={classes.aaa1}>
                        <span className={classes.aaa3Text}>Add guests</span>
                    </div>
                </div>
            </div>
            <div className={classes.mobileRightIcon}>
                <div className={classes.rightIconCont}>
                    <img className={classes.rightIcon} src={filterIcon} alt='magnify-icon'></img>
                </div>
            </div>
        </div>
    );
}

export default mobileUITop;