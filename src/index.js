import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gridSize:[7,7],
            snake:[],
            food:[],
        }
    }

    render () {
        return (
                <Grid 
                    grid={this.props.gameGrid}
                />
               )
    } 

}

class Grid extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        const gameGrid = Array(7).fill(Array(7).fill(null));  // [[null, null, ..., 7thNull], ..., 7th[null, null, null, ...]]
            
            return (
                <div className="xGrid">
                    {gameGrid.map((gridY,yIndex) => {
                        return(
                        <div className="yGrid">
                            {gridY.map((gridX,xIndex) => {
                               return <Tile X={xIndex} Y={yIndex} />
                            })}
                        </div>
                        )
                    }
                    )}
                </div>
            )              
    }

}

class Tile extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return <div className="tile">{`X ${this.props.X} - Y ${this.props.Y}`}</div>
    }
}



ReactDOM.render(<Game />, document.getElementById("root"));