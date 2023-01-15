import React, { useState, useMemo} from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { render } from "react-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";


const events = [
    {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some event"
    },
    {
        start: new Date(moment().add(3, "days")),
        end: new Date(moment().add(3, "days")),
        title: "Another event"
    }
]

const Views =  {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
}



const CalendarComp = () => {
    const [newTask, setNewTask] = useState({});
    const localizer = momentLocalizer(moment);

    function handleSelectSlot(slotInfo) {
        setNewTask({
            start: slotInfo.start,
            end: slotInfo.end,
            title: ''
        });
    };

    const slotPropGetter = (date) => {
        return {
            className: 'slot',
            style: {
                cursor: 'pointer'
            }
        };
    };
    

    return (
        <Box className="calendar-comp">
            <Calendar
                onSelectSlot={handleSelectSlot}
                slotPropGetter={slotPropGetter}
                events={events}
                localizer={localizer}
                defaultDate={new Date()}
                defaultView='day'

        />
        </Box>
    )
}

export default CalendarComp;


