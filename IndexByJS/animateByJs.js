function getStyle(obj,name){
			if(obj.currentStyle)
				{return obj.currentStyle[name]}
			
			else
				{return getComputedStyle(obj,false)[name]}

		}
		function changeStyle(obj,json,Endfun){
			clearInterval(obj.timer)
			obj.timer=setInterval(function()
			{
				var aStop=true
				for(var attr in json)
				{
					var cur=0
				if(attr=='opacity')
				{
					var cur= parseFloat(getStyle(obj,attr))*100
				}
				else
				{
				var cur= parseInt(getStyle(obj,attr))
			}
				var speed=(json[attr]-cur)/3

			speed=speed>0?Math.ceil(speed):Math.floor(speed)

			if(cur!=json[attr])
			{
				aStop=false
			}

			
				if(attr=='opacity')
				{
					obj.style.filter="alpha(opcacity:"+(cur+speed)+")"
					obj.style[attr]=(cur+speed)/100
				}
				else{
				obj.style[attr]=cur+speed+'px'
			}
			
		}  
		     if(aStop){
		     	clearInterval(obj.timer)
				if(Endfun)Endfun()
			}
		},30)
		}