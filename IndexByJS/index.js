	window.onload = function() {
	    var oDivIHS = document.getElementById('index_HanSight')
	    var oLiIHS = oDivIHS.getElementsByTagName('li');
	    var oBtnIH1 = document.getElementById('btnIHS1');
	    var oBtnIHS2 = document.getElementById('btnIHS2');
	    var oBtnIL1 = document.getElementById('btnIL1');
	    var oDivIN = document.getElementById('index_News')
	    var aBtnIN = oDivIN.getElementsByTagName('input')
	    var oBtnIE = document.getElementById('btnIE1')
	    var oBtnIT1 = document.getElementById('btnIT1')
	    var oDivFoot = document.getElementById('foot')
	    var oLiFoot = oDivFoot.getElementsByTagName('li')
	    var oDivI4B = document.getElementById('index_4blocks')
	    var aP3Show = getByClass(oDivI4B, 'p3Show')
	    var aP3Hide = getByClass(oDivI4B, 'p3Hide')
	    var aP3ShowTxt = getByClass(oDivI4B, 'p3ShowTxt')
	    var aP3ShowImg = getByClass(oDivI4B, 'p3ShowSign')
	    var aP3HideBtn = getByClass(oDivI4B, 'p3HideBtn')
	    // gary方法谷歌浏览器会显示跨域，ie10以上的版本不支持filter方法，需要以下的
	    // 放在服务器上可以做到IE和谷歌同时兼容
	    // for(var i=0;i<imgObj.length;i++){
	    // 	if(gray{
	    // 	imgObj[i].index=i;
	    //  imgObj[i].src = gray(imgObj[i]);
	    //             }

	    //   }



	    //index_4blocks 里的事件响应

	    for (var i = 0; i < aP3Show.length; i++) {
	       aP3Hide[i].index = aP3Show[i].index = i;
	        aP3Hide[i].onmouseover = aP3Show[i].onmouseover = function() {
	            changeStyle(aP3Hide[this.index], { top: 0 });
	            changeStyle(aP3ShowImg[this.index], { opacity: 0 });
	            changeStyle(aP3ShowTxt[this.index], { opacity: 0 });
	        }
	        aP3Hide[i].onmouseout = aP3Show[i].onmouseout = function() {
	            changeStyle(aP3Hide[this.index], { top: -800 });
	            changeStyle(aP3ShowTxt[this.index], { opacity: 100 });
	            changeStyle(aP3ShowImg[this.index], { opacity: 100 });
	        }
	    }


	    //index_HanSight的事件响应（产品、方案、Blog)

	    for (var i = 0; i < oLiIHS.length; i++) {
	        oLiIHS[i].onmouseover = function() {
	            for (var i = 0; i < oLiIHS.length; i++) {
	                oLiIHS[i].className = ''
	            }
	            this.className = 'active'
	        }
	        oLiIHS[i].onmouseout = function() {
	            for (var i = 0; i < oLiIHS.length; i++) {
	                oLiIHS[i].className = ''
	            }

	        }
	    }
	    //各个按钮响应方法
	    function backgroundToWhite(obj) {
	        obj.style.background = 'white'
	    }

	    function backgroundToBlue(obj) {
	        obj.style.background = '#54C2F0'
	    }

	    function ChangeStyle(obj, attr, value) {
	        obj.style[attr] = value
	    }


	    function colorToBlue(obj) {
	        obj.style.color = '#54C2F0'
	    }

	    function colorToWhite(obj) {
	        obj.style.color = 'white'
	    }

	    function borderToWhite(obj) {
	        obj.style.border = '1px solid white'
	    }

	    function borderToNone() {
	        obj.style.border = 'none'
	    }




	    for (var j = 0; j < aP3HideBtn.length; j++) {
	        aP3HideBtn[j].onmouseover = oBtnIHS2.onmouseover = oBtnIH1.onmouseover = function() {
	            ChangeStyle(this, 'background', 'white')
	            ChangeStyle(this, 'color', '#54C2F0')
	        }

	        aP3HideBtn[j].onmouseout = oBtnIHS2.onmouseout = oBtnIH1.onmouseout = function() {
	            ChangeStyle(this, 'background', 'none')
	            ChangeStyle(this, 'color', 'white')
	        }
	    }
	    for (var i = 0; i < aBtnIN.length; i++) {

	        oBtnIL1.onmouseover = aBtnIN[i].onmouseover = function() {
	            ChangeStyle(this, 'background', '#54C2F0')
	            ChangeStyle(this, 'color', 'white')
	        }
	        oBtnIL1.onmouseout = aBtnIN[i].onmouseout = function() {
	            ChangeStyle(this, 'background', 'white')
	            ChangeStyle(this, 'color', '#54C2F0')
	        }
	    }
	    oBtnIT1.onmouseover = function() {
	        ChangeStyle(this, 'background', '#54C2F0')
	        ChangeStyle(this, 'color', 'white')
	        ChangeStyle(this, 'border', 'none')
	    }
	    oBtnIT1.onmouseout = function() {
	        ChangeStyle(this, 'background', 'white')
	        ChangeStyle(this, 'color', '#54C2F0')
	        ChangeStyle(this, 'border', '1px solid white')
	    }
	    oBtnIE.onmouseout = function() {
	        ChangeStyle(this, 'background', 'white')
	        ChangeStyle(this, 'color', '#54C2F0')
	        ChangeStyle(this, 'border', '1px solid #54C2F0')
	    }
	    oBtnIE.onmouseover = function() {
	        ChangeStyle(this, 'background', '#54C2F0')
	        ChangeStyle(this, 'color', 'white')
	    }


	}