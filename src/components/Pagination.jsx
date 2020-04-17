import React, { Component } from 'react'
import cn from 'classnames';

export default class Pagination extends Component {
    render() {
        const { 
            total, 
            currentPage, 
            updateCurrentPageNext, 
            updateCurrentPagePrevious, 
        } = this.props;

        // console.log(currentPage);

        return (
            <ul className="tabs nav nav-pills d-flex justify-content-between">
                <li className="nav-item">
                    <div 
                        className={cn("nav-link", {active: true})}
                        onClick={() => updateCurrentPagePrevious(currentPage)}
                    >
                        Previous
                    </div>
                </li>
                <li className="nav-item">
                    <div>
                        {`${currentPage} from ${total}`}
                    </div>
                </li>
                <li className="nav-item">
                    <div 
                        className={cn("nav-link", {active: true})}
                        onClick={() => updateCurrentPageNext(currentPage)}
                    >
                        Next
                    </div>
                </li>
            </ul>
        )
    }
}
