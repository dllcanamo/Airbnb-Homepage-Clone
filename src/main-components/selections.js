
import classes from './selections.module.css';
import SelectionsCarousel from './selections-carousel';
import filterIcon from '../assets/svgexport-10.svg';

function Selections() {
    return (
        <div className={classes.mainSelectionsContainer}>
            <div className={classes.spacer}></div>
            <div className={classes.selectionsContainer}>
                <SelectionsCarousel></SelectionsCarousel>
                <div className={classes.filterContainer}>
                    <button className={classes.filterButton}>
                        <div className={classes.filterDiv}>
                            <div className={classes.filterTextImgCont}>

                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Selections;