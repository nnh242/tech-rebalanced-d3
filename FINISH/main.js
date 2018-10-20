const data = [
    { day: 'Sunday', temp: 52 },
    { day: 'Monday', temp: 56 },
    { day: 'Tuesday', temp: 62 },
    { day: 'Wednesday', temp: 55 },
    { day: 'Thursday', temp: 52 },
    { day: 'Friday', temp: 57 },
    { day: 'Saturday', temp: 61 }
];

const margin = { top: 5, right: 5, bottom: 50, left: 50};
const height = 960;
const width = 500;

d3.select("body").append("svg").attr('height', 960).attr('width', 500);
const svg = d3.select('svg');