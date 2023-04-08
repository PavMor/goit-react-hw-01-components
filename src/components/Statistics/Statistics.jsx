import css from '../Statistics/Statistics.module.css';
import propTypes from 'prop-types';

const createColor = () => {
    const color =
        'rgba(' +
        Math.round(Math.random() * 225) +
        ',' +
        Math.round(Math.random() * 225) +
        ',' +
        Math.round(Math.random() * 225) +
        ',' + 0.5 + ')';
    return color
};

export const Statistics = ({ title, stats }) => { return ()}