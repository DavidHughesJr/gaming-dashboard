import dayjs from "dayjs";

const date = new Date()

const yearly = () => {
    return (
        dayjs(date).format('YYYY')
    )
}

export const datesConfig = {
    today: dayjs(date).format('YYYY-MM-DD'),
    thisWeek: dayjs(date).add(7, 'd').format('YYYY-MM-DD'),
    monthAgo: dayjs(date).subtract(7, 'd').format('YYYY-MM-DD'),
}

