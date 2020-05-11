import React from 'react'

import './Board.css'

const Board = (props) => {
    return(
        <div className="board">
            <div className="board-header">
                <h3>Brazil Trends</h3>
                <i class="fas fa-cog"></i>
            </div>
            <div className="board-card">
                <small>1 . Trending</small>
                <h3>BINGO ADOLESCENTE</h3>
                <p>9,885 Tweets</p>
            </div>
            <div className="board-card">
                <small>2 . Trending</small>
                <h3>ESTAMOS COM VOCE RAFA</h3>
                <p>248K Tweets</p>
            </div>
            <div className="board-card">
                <small>3 . Trending</small>
                <h3>CONTIGO PRIOR</h3>
                <p>445K Tweets</p>
            </div>
            <div className="board-card">
                <small>4 . Trending</small>
                <h3>SEGUNDOU COM TAG PRA GIZELLY</h3>
                <p>23.9K Tweets</p>
            </div>
            <div className="board-card">
                <small>5 . Trending</small>
                <h3>#SegundaDetremuraSDV</h3>
                <p>2,292 Tweets</p>
            </div>
            <div className="board-footer">
                <p>Show more</p>
            </div>
        </div>
    )
}

export default Board