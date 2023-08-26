import React from 'react';

const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
        &lt; Prev
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
        Next &gt;
    </div>
);

export { PrevArrow, NextArrow };