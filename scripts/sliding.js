window.onload = function() {
	var oCont = document.getElementById("container");
	var oImgs = oCont.getElementsByTagName("img");
	//单张图片的宽度
	var imgWidth = oImgs[0].offsetWidth;
	//	document.write(imgWidth);
	//设置隐藏的图片露出来的宽度
	var exposeWidth = 180;
	//设置容器的总宽度
	var boxWidth = imgWidth + (oImgs.length - 1) * exposeWidth;
	//style 是 dom 里面的属性
	oCont.style.width = boxWidth + 'px';
	//设置每张图片的初始位置
	function setImgsOringe() {
		for(var i = 1; i< oImgs.length; i++) {
			oImgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';

		}
	}
	setImgsOringe();
	var transfer = imgWidth - exposeWidth;
	for(var i = 0; i < oImgs.length; i++) {
		(function(i) {
			oImgs[i].onmouseover = function() {
				setImgsOringe();
				for(var j = 1; j <= i; j++) {
					oImgs[j].style.left = parseInt(oImgs[j].style.left, 10) - transfer + 'px';

				}
			};
		})(i);

	}
};