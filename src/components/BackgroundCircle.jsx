const BackgroundCircle = ({radius, strokeWidth})=> {
    return (
       <circle 
              r = {radius} 
              fill = "yellow"
              stroke="black"
              stroke-width={strokeWidth}
              >
          </circle>
    )
    }

export default BackgroundCircle;