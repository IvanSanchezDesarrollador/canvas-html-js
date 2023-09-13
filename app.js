window.onload = () => {
  const canvas = document.getElementById("canvas");
  const canvasv2 = document.getElementById("canvasv2");
  const canvasv3 = document.getElementById("canvasv3");
  const canvasv4 = document.getElementById("canvasv4");
  const canvasv5 = document.getElementById("canvasv5");



  if (canvas && canvas.getContext) {
    canvasContext = canvas.getContext("2d");
    if (canvasContext) {
      canvasContext.fillStyle = "yellow";
      canvasContext.strokeStyle = "#ff0000";

      canvasContext.lineWidth = 5;
      canvasContext.fillRect(50, 50, 100, 100);
      canvasContext.strokeRect(50, 50, 100, 100);
      canvasContext.fillStyle = "blue";
      canvasContext.strokeStyle = "#ff0000";
      canvasContext.lineWidth = 5;
      canvasContext.fillRect(200, 200, 100, 100);
      canvasContext.strokeRect(200, 200, 100, 100);
    } else {
      alert("No se soporta");
    }
  }

  if (canvasv2 && canvasv2.getContext) {
    canvasContext = canvasv2.getContext("2d");
    if (canvasContext) {
      canvasContext.lineWidth = 50;
      canvasContext.strokeStyle = "#548157";

      canvasContext.beginPath();
      canvasContext.lineCap = "round";
      canvasContext.moveTo(50, 50);
      canvasContext.lineTo(450, 50);
      canvasContext.stroke();

      canvasContext.strokeStyle = "#789542";
      canvasContext.lineCap = "square";
      canvasContext.beginPath();
      canvasContext.moveTo(50, 120);
      canvasContext.lineTo(450, 120);
      canvasContext.stroke();

      canvasContext.strokeStyle = "#125892";
      canvasContext.lineCap = "butt";
      canvasContext.beginPath();
      canvasContext.moveTo(50, 220);
      canvasContext.lineTo(450, 220);
      canvasContext.stroke();
    } else {
      alert("No se soporta");
    }
  }

  if (canvasv3 && canvasv3.getContext) {
    canvasContext = canvasv3.getContext("2d");
    if (canvasContext) {
      canvasContext.lineWidth = 25;
      canvasContext.strokeRect = "#325478";
      canvasContext.fillStyle = "blue"
      canvasContext.beginPath();
      canvasContext.moveTo(50, 100);
      canvasContext.lineTo(100, 50);
      canvasContext.lineTo(150, 100);
      canvasContext.lineTo(100, 150);
      canvasContext.stroke();

      canvasContext.beginPath();
      canvasContext.moveTo(200, 100);
      canvasContext.lineTo(250, 50);
      canvasContext.lineTo(300, 100);
      canvasContext.lineTo(250, 150);
      canvasContext.closePath()
      canvasContext.stroke();

      canvasContext.beginPath();
      canvasContext.moveTo(350, 100);
      canvasContext.lineTo(400, 50);
      canvasContext.lineTo(450, 100);
      canvasContext.lineTo(400, 150);
      canvasContext.fill();
      canvasContext.closePath()
      canvasContext.stroke();


    } else {
      alert("No se soporta");
    }
  }

  if (canvasv4 && canvasv4.getContext) {
    canvasContext = canvasv4.getContext("2d");
    if (canvasContext) {
      canvasContext.lineWidth = 25;
      canvasContext.strokeRect = "#325478";
      canvasContext.fillStyle = "blue"

      canvasContext.beginPath();
      canvasContext.arc(100,150,50, 1.1*Math.PI, 1.9*Math.PI);
      canvasContext.stroke();


      canvasContext.beginPath();
      canvasContext.arc(250,150,50, 1.1*Math.PI, 1.9*Math.PI, true);
      canvasContext.stroke();

      canvasContext.beginPath();
      canvasContext.arc(400,150,50, 0 , 2*Math.PI);
      canvasContext.fill();
      canvasContext.stroke();
      


    } else {
      alert("No se soporta");
    }
  }

  if (canvasv5 && canvasv5.getContext) {
    canvasContext = canvasv5.getContext("2d");
    if (canvasContext) {
      canvasContext.lineWidth = 10;
      canvasContext.strokeRect = "#325478";
      canvasContext.beginPath();

      canvasContext.moveTo(20,20);
      canvasContext.bezierCurveTo(60,200,600,100,200,300);
      canvasContext.stroke();
      

      


    } else {
      alert("No se soporta");
    }
  }
};
