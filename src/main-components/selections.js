
import classes from './selections.module.css';
import SelectionsCarousel from './selections-carousel';
import filterIcon from '../assets/svgexport-10.svg';
import prevButton from "../assets/svgexport-8.svg";
import nextButton from "../assets/svgexport-9.svg";

function Selections() {
    return (
        <div className={classes.mainSelectionsContainer}>
            <div className={classes.spacer}></div>
            <div className={classes.selectionsContainer}>
                <SelectionsCarousel></SelectionsCarousel>
                <div className={classes.prevBtn}>
                    <img
                    className={classes.icons}
                    src={prevButton}
                    alt="prev-btn"
                    ></img>
                </div>
                <div className={classes.nextBtn}>
                    <img
                    className={classes.icons}
                    src={nextButton}
                    alt="next-btn"
                    ></img>
                </div>
                <div className={classes.filterContainer}>
                    <button className={classes.filterButton}>
                        <div className={classes.filterDiv}>
                            <div className={classes.filterTextImgCont}>
                                <div className={classes.logoCont}>
                                    <img className={classes.filterIcon} src={filterIcon} alt='filter-icon'></img>
                                </div>
                                <span className={classes.filterText}>Filters</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Selections;