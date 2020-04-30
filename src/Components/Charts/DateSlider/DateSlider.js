/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {Waypoint} from 'react-waypoint';
import "./dateSlider.scss"
import {lastDayOfYear, addDays, addWeeks, format, getDate, isBefore, isSameDay, isAfter, subDays, subWeeks} from "date-fns";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import IconButton from '@material-ui/core/IconButton';

export default function DatePicker(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [softSelect, setSoftSelect] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [currentDate] = useState(new Date());
    const {endDate, shouldScroll} = props;
    let {selectDate} = props;
    let scroll = false;
    shouldScroll === true? scroll = true : scroll = false;
    let maxValue;
    if (scroll===false){
        maxValue = 2;
    }
    else{
        maxValue = endDate | 90;
    }
    const getStyles = (day) => {
        const classes = [];
        if (isSameDay(day, selectedDate)) {
            classes.push('DateDayItem--selected')
        }
        if (isBefore(day, currentDate)) {
            classes.push('DateDayItem--disabled')
        }
        if (isAfter(day, currentDate)) {
            classes.push('DateDayItem--disabled')
        }
        return classes.join(' ')
    };
    const getId = (day) => {
        if (isSameDay(day, selectedDate)) {
            return ('selected')
        } else {
            return ("")
        }
    };
    const getScroll = () => {
        if (scroll === true) {
            return ('Datepicker--DateList--scrollable');
        } else {
            maxValue = 7;
            return ('Datepicker--DateList');
        }
    };

    function renderDays() {
        const dayFormat = "EEEE";
        const dateFormat = "d";
        const dateFormats = "MMMM yyyy";

        const days = [];
        let startDay = new Date(currentWeek);
        console.log("Start day", startDay)
        for (let i = 0; i < maxValue; i++) {
            days.push(
                <div id={`${getId(addDays(startDay, i))}`}
                     className={`Datepicker--DateDayItem ${getStyles(addDays(startDay, i))}`}
                     key={i * i + 2}
                     onClick={() => onDateClick(addDays(startDay, i))}
                >
                    {getDate(addDays(startDay, i)) === 1 ?
                        <Waypoint horizontal={true} onEnter={() => (setSoftSelect(addDays(startDay, i)))}/> : null}
                    {getDate(addDays(startDay, i)) === 20 ?
                        <Waypoint horizontal={true} onEnter={() => (setSoftSelect(addDays(startDay, i)))}/> : null}
                    {isSameDay(addDays(startDay, i), currentDate) ?
                        <Waypoint horizontal={true} onEnter={() => (setSoftSelect(addDays(startDay, i)))}/> : null}
                    <div className={"Datepicker--DateLabel"} key={i * i + 1}>
                        {format(addDays(startDay, i), dateFormat)}th
                    </div>

                    <div className={"Datepicker--MonthYearLabel"}>
                        {scroll ? format(softSelect, dateFormats) : format(currentWeek, dateFormats)}
                        {/*{!scroll? isSameMonth(softSelect,currentWeek)? null: " / " + format(softSelect, dateFormat) : null}*/}
                    </div>

                    <div className={"Datepicker--DayLabel"} key={i}>
                        ({format(addDays(startDay, i), dayFormat)})
                    </div>
                </div>
            );
        }
        return <div id={"container"} className={`${getScroll()}`}>{days}</div>;
    }

    const onDateClick = day => {
        // if (!isBefore(day, currentDate)) {
        if ((day, currentDate)) {
            selectDate = null;
            setSelectedDate(day);
            if (props.getSelectedDay) {
                props.getSelectedDay(day);
            }
        }
    };

    useEffect(() => {
        if (props.getSelectedDay) {
            if (selectDate) {
                props.getSelectedDay(selectDate);
            } else {
                props.getSelectedDay(new Date());
            }
        }
    }, []);

    useEffect(() => {
        if (selectDate) {
            if (!isSameDay(selectedDate, selectDate)) {
                setSelectedDate(selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                    }
                }, 20);
            }
        }
    }, [selectDate]);


    let e = document.getElementById('container');
    let width = e ? e.getBoundingClientRect().width-'50' : null;

    const nextWeek = () => {
        scroll ? document.getElementById('container').scrollLeft += width : setCurrentWeek(addWeeks(currentWeek, 1))
    };

    const prevWeek = () => {
        scroll ? document.getElementById('container').scrollLeft -= width : setCurrentWeek(subWeeks(currentWeek, 1))
    };

    // noinspection SpellCheckingInspection
    const dateFormat = "MMMM yyyy";
    return (
        <div className={"Datepicker--Container"}>
            <div className={"Datepicker--Strip"}>
             {/* <span className={"Datepicker--MonthYearLabel"}>
                 {scroll ? format(softSelect, dateFormat) : format(currentWeek, dateFormat)}
                 {!scroll? isSameMonth(softSelect,currentWeek)? null: " / " + format(softSelect, dateFormat) : null}
             </span> */}
                <div className={"Datepicker"}>
                    <IconButton className={"Datepicker--button-prev"} onClick={prevWeek}><ArrowBackIosIcon /></IconButton>
                    {renderDays()}
                    <IconButton className={"Datepicker--button-next"} onClick={nextWeek}><ArrowForwardIosIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}