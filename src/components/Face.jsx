import { Mouth } from "./Mouth"
import { Eyes } from "./Eyes"
import BackgroundCircle from "./BackgroundCircle"
export const FaceContainer = ({children, width, height, centerX, centerY}) => {
    return (
      
        <svg width={width} height={height}>
          <g transform={`translate(${centerX},${centerY})`}>
            {children}
          </g>
        </svg>
    )
  }
  
  export const Face = ({width, height, centerX, centerY,radius,eyeRadius, eyeOffsetX, eyeOffsetY, mouthRadius, mouthWidth,strokeWidth})=>{
    return(
        
      <FaceContainer centerX={centerX} centerY={centerY} width={width} height= {height}>
      <BackgroundCircle radius = {radius} strokeWidth={strokeWidth} />
        <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius} />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </FaceContainer>
      
    )
  }