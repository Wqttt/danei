(function(){
  ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json"
  }).then(result=>{
    console.log(result);
    var [p1, p2, p3]=result;
    var {title, details, price, href, pic}=p1;
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${details}</a>
        </h6>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
    </div>`;
    document.getElementById("p1").innerHTML=html;
  })
})();