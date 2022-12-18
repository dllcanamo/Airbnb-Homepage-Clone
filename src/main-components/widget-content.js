import classes from "./widget-content.module.css";
import magnifyIcon from '../assets/svgexport-4.svg';

function WidgetContent() {
  return (
    <div className={classes.widgetContentCont}>
      <div className={classes.anywhereCont}>
        <span className={classes.whereText}>Anywhere</span>
      </div>
      <div className={classes.widgetSpacer}><div className={classes.widgetSpacerInner}></div></div>
      <div className={classes.anyweekCont}>
        <span className={classes.weekText}>Any week</span>
      </div>
      <div className={classes.widgetSpacer}><div className={classes.widgetSpacerInner}></div></div>
      <div className={classes.addCont}>
        <span className={classes.guestText}>Add guests</span>
        <div className={classes.magnifyCont}>
            <img className={classes.magnifyIcon} src={magnifyIcon} alt='magnify-icon'></img>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
