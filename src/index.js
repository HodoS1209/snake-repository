import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function isEqual(arrayOne, arrayTwo) {
   
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
  
    for (var i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] != arrayTwo[i]) {
        return false;
      }
    }
  
    return true;
  }

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: [7, 7],
            snake: [3, 3],
            food: [5, 3],
            snakeDirection: "East",
        }
    }

    render() {
        return (
                <>
                    <Grid 
                        grid = {this.props.gameGrid}  
                        size = {this.state.gridSize}
                        food = {this.state.food}
                        snake = {this.state.snake}
                    />
                </>
            )
    } 

    componentDidMount() {
        setInterval(() => this.moveSnake(), 500);
    }

    moveSnake() {
        const snakeDefaultCordinates = this.state.snake
        const snakeX = this.state.snake[0]
        const snakeY = this.state.snake[1]

        const SnakeXNextPosition = snakeX >= this.state.gridSize[0] - 1 ? 0 : snakeX + 1;
        this.setState({snake: [SnakeXNextPosition, snakeY]});
    }



    moveSnake() {

        switch(this.state.snakeDirection) {
    
          case 'East':
            this.turnRight() {
                const snakeDefaultCordinates = this.state.snake
                const snakeX = this.state.snake[0]
                const snakeY = this.state.snake[1]
        
                const SnakeXNextPosition = snakeX >= this.state.gridSize[0] - 1 ? 0 : snakeX + 1;
                this.setState({snake: [SnakeXNextPosition, snakeY]});
            };
            break;
          
          case 'West':
            this.turnLeft();
            break;
    
          case 'North':
            this.goUp();
            break;
    
          case 'South':
            this.goDown();
            break;

          }
    
      };

    //   turnRight() {
         
    //   }
    

    //   turnLeft() {

    //   }

    //   goUp() {

    //   }

    //   goDown() {

    //   }
      

}

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const gameGrid = Array(this.props.size[0]).fill(Array(this.props.size[1]).fill(null)); 
            
            return (
                <div className="xGrid">
                    {gameGrid.map((gridY,yIndex) => {
                        return(
                        <div className="yGrid">
                            {gridY.map((gridX,xIndex) => {
                               return <Tile 
                                    X = {xIndex} 
                                    Y = {yIndex}    
                                    food = {this.props.food}
                                    snake = {this.props.snake}
                                />
                            })}
                        </div>
                    )}
                )}
            </div>        
        )                     
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }    

        render(){

            let foodCordinates = isEqual(this.props.food, [this.props.X, this.props.Y])
            ? "food"
            : "";

            let snakeCordiantes = isEqual(this.props.snake, [this.props.X, this.props.Y])
            ? "snake"
            : "";
            
            let className = `tile ${foodCordinates} ${snakeCordiantes}`;

                return (                          
                        <div className={className}>
                            {snakeCordiantes ? "==>~" : ""}
                            {foodCordinates ? "Eat Me" : ""}
                        </div>             
                )                
    }

    

}



ReactDOM.render(<Game />, document.getElementById("root"));