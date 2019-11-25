import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => {
    return (
        <div className="row">
            {news.map(element => (
                <News key={element.url} element={element} />
            ))}
        </div>
    );
}

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;