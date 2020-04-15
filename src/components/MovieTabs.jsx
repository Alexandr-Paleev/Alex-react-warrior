import React from 'react';
import cn from 'classnames';

const MovieTabs = (props) => {
    const { sort_by, updateSortBy } = props;

    const handleClick = value => () => updateSortBy(value);
    // console.log(sort_by)

    return (
        <ul className="tabs nav nav-pills">
            <li className="nav-item">
                <div 
                  className={cn("nav-link", {active: sort_by === "popularity.desc"})}
                  onClick={handleClick("popularity.desc")}
                >
                    Popularity
                </div>
            </li>
            <li className="nav-item">
                <div 
                  className={cn("nav-link", {active: sort_by === "original_title.desc"})}
                  onClick={handleClick("original_title.desc")}
                >
                    Original title
                </div>
            </li>
            <li className="nav-item">
                <div 
                  className={cn("nav-link", {active: sort_by === "vote_average.desc"})}
                  onClick={handleClick("vote_average.desc")}
                >
                    Vote average
                </div>
            </li>
        </ul>
    )
}

export default MovieTabs;