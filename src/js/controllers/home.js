app.controller("homeLunbo",["$scope","$timeout",function($scope,$timeout){//轮播
	$scope.imgsrc = ["images/img0.jpg","images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"];
			$scope.swiper = new Swiper('.swiper-first', {//创建swiper对象
				    paginationClickable: true,
			        spaceBetween: 30,
			        centeredSlides: true,
			        autoplay: 2500,
			        autoplayDisableOnInteraction: false,
			        loop:true,
			        observer:true
			});
}])
app.controller("homeCity",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
	$http.get(baseUrl+"home").then((data)=>{
		$scope.homecity = data.data.data.feed.entry;
	})
	
}])