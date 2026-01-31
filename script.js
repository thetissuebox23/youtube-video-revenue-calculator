function totalRevenue(){
  if(document.getElementById("has-ads").checked){
    document.getElementById("total-revenue").textContent = Math.floor(document.getElementById("views").value /1000) * 7 + Math.floor(document.getElementById("video-duration").value / 5) * 2 * 0.03;
  }
  else{
    document.getElementById("total-revenue").textContent = Math.floor(document.getElementById("views").value /1000) * 7;
  }
};

document.getElementById("views").addEventListener("input", totalRevenue);
document.getElementById("video-duration").addEventListener("input", totalRevenue);