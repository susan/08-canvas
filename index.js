document.addEventListener("DOMContentLoaded", () => {
  
  const canvasTag =document.querySelector("#draw")
  const ctxTag =canvasTag.getContext('2d')
   

    canvasTag.width = window.innerWidth;
    canvasTag.height=window.innerHeight;
    
  
    //ctxTag.strokeStyle = "#BADA55";
    ctxTag.lineCap = "round";
    ctxTag.lineWidth = 25;
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
  
    function draw(e)  {
      if(!isDrawing) return;
     //set color
      ctxTag.strokeStyle= `hsl(${hue}, 100%, 50%)`;
      
      ctxTag.beginPath()
      //console.log('------')
      ctxTag.moveTo(lastX, lastY)
      //console.log("lastX and lastY", lastX, lastY)
      ctxTag.lineTo(e.offsetX, e.offsetY)
      //console.log("offsets", e.offsetX, e.offsetY)
      ctxTag.stroke()
      
      //console.log("offsets", e.offsetX, e.offsetY)
      //console.log("x and y", e.x, e.y)  
     let {offsetX, offsetY} = e;
     lastX = offsetX;
     lastY = offsetY; 

     hue+=100;
     if (hue > 360) {
     hue = 0;
     }
     console.log(hue)
    }

    canvasTag.addEventListener("mousemove", draw)

    canvasTag.addEventListener("mousedown",(e) => {
        isDrawing = true;
        let {offsetX, offsetY} = e;
        lastX = offsetX;
        lastY = offsetY;   
    })

    canvasTag.addEventListener("mouseup", () => isDrawing = false)
    canvasTag.addEventListener("mouseout", () => isDrawing = false)
  
  
})
    