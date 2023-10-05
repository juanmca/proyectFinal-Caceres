
import { Ring } from '@uiball/loaders'




const LoaderComponent = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        
    
        }}> 
    
    <Ring 
 size={50}
 lineWeight={5}
 speed={4} 
 color="white" 
/>  </div>
  )
}

export default LoaderComponent