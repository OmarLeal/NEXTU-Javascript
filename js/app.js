
 $('.btn-reinicio').click(function(){ 	
 	$(this).text('Reiniciar'); 	 	 	
 });
 $("button:contains('Reiniciar')").on("click", function(){
        window.location.reload(true);
        time = new Date(120000);        
        displayTime();                       
        $(this).text('Iniciar'); 	 	
    });	
		var rows=5; 
		var cols = 8; 
		var grid = []; 
		var validFigures=0;
		var levelGoal = 0;
		 
 		function dulce(r,c,obj,src)
	    	{
			return {
				r: r,
				c: c,
				src:src,
				locked:false,
				isInCombo:false,
				o:obj
			}
		}
             var dulcesType=[];
     
         
             dulcesType[0]='image/1.png';
             dulcesType[1]='image/2.png';
             dulcesType[2]='image/3.png';
             dulcesType[3]='image/4.png';
             
             
            
             function pickRandomDulce()
             
              {
                 var pickInt = Math.floor((Math.random()*4));            
                 return dulcesType[pickInt];
             }


	    function _initGame() { 

		 // prepare grid - Simply and fun!
		 for (var r = 0; r < rows; r++)
		   {
		      grid[r]=[];
		       for (var c =0; c< cols; c++) {
		         grid[r][c]=new dulce(r,c,null,pickRandomDulce());
		     }
		  }    
 				_applyRectangleConstraint(1,1,1,1);
	

			// initial coordinates
		 	var width = $('.panel-tablero').width();
		 	var height = $('.panel-tablero').height();			 				
			var cellWidth = width / (cols+1);
			var cellHeight = height / (rows+1);
			var marginWidth = cellWidth/cols;
			var marginHeight = cellHeight/rows;
 		

 				for (var r = 0; r < rows; r++)
 				{
 					for (var c =0; c< cols; c++) { 						
 						var cell = $("<img class='dulce' id='jewel_"+r+"_"+c+"' r='"+r+"' c='"+c+"' ondrop='_onDrop(event)' ondragover='_onDragOverEnabled(event)'  src='"+grid[r][c].src+"' style='padding-right:20px;top:"+r*cellHeight+"px;left:"+(c*cellWidth+marginWidth)+"px;'/>");
 						cell.attr("ondragstart","_ondragstart(event)");
 						$(".panel-tablero").append(cell);
 						grid[r][c].o = cell;
 					}
 				} 
	

		
		}
	

 		  function _ondragstart(a)
 		  {
 			a.dataTransfer.setData("text/plain", a.target.id);
		  }
		  function _onDragOverEnabled(e)
 		{
 				e.preventDefault();
 		}
 			function _applyRectangleConstraint(u,d,l,r)
 			{
 				for(var i =0;i<u;i++) {
 					for(c=0;c<cols;c++) {
 								
 						grid[i][c].locked=true; 		
 								
 					}
 				}
 				for(var i =0;i<d;i++) {
 					for(c=0;c<cols;c++) {
 						grid[(rows-i)-1][c].locked=true; 		
 						
 					}
 					
 				} 				
 				for(var i =0;i<l;i++) {
 					for(rX=0;rX<rows;rX++) {
 						grid[rX][i].locked=true; 	
 									
 					}
 				}
 				for(var i =0;i<r;i++) {
 					for(rX=0;rX<rows;rX++) {
 						grid[rX][(cols-i)-1].locked=true;

 					}
 				} 			
 			}


		 function _onDrop(e)
 		 {

 				var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
 				  if (isFirefox) { 				  	
 					e.preventDefault();  
 				  } 		 				
 				var src = e.dataTransfer.getData("text"); 				
 				var sr = src.split("_")[1];
 				var sc = src.split("_")[2]; 				
 				var dst = e.target.id; 				
 				var dr = dst.split("_")[1];
 				var dc = dst.split("_")[2]; 				 				
				var ddx = Math.abs(parseInt(sr)-parseInt(dr));
				var ddy = Math.abs(parseInt(sc)-parseInt(dc));
 										
				if (ddx > 1 || ddy > 1)
					{					
					return;
				}
 				
 				var tmp = grid[sr][sc].src;
 				grid[sr][sc].src = grid[dr][dc].src;
 				grid[sr][sc].o.attr("src",grid[sr][sc].src);
 				grid[dr][dc].src = tmp;
 				grid[dr][dc].o.attr("src",grid[dr][dc].src);
 				 $("#movimientos-text").text(parseInt($("#movimientos-text").text()) + 1); 				 			
 				_checkAndDestroy(); 
 				
 			}

 			function _checkAndDestroy()
 			{ 		
 				for (var r = 0; r < rows; r++)
 				{ 					 				 			
 					var prevCell = null;
 					var figureLen = 0;
 					var figureStart = null;
 					var figureStop = null;
 					
 					for (var c=0; c< cols; c++)
 					{ 					  
 						if (grid[r][c].locked || grid[r][c].isInCombo)
 						{
 							figureStart = null;
 							figureStop = null;
 							prevCell = null; 	
 							figureLen = 1;
 							continue;
 						} 						 					
 						if (prevCell==null) 
 						{ 							
 							prevCell = grid[r][c].src;
 							figureStart = c;
 							figureLen = 1;
 							figureStop = null;
 							continue;
 						}
 						else
 						{
 							var curCell = grid[r][c].src;
 							if (!(prevCell==curCell))
 							{
 								prevCell = grid[r][c].src;
 								figureStart = c;
 								figureStop=null;
 								figureLen = 1;
 								continue;
 							}
 							else
 							{ 								
 								figureLen+=1;
 								if (figureLen==3)
 								{
 									validFigures+=1;
 									figureStop = c;
 									console.log("Combo from " + figureStart + " to " + figureStop + "!");
 									for (var ci=figureStart;ci<=figureStop;ci++)
 									{
 										 
 										grid[r][ci].isInCombo=true;
 										grid[r][ci].src=null; 										 										 
 									}
 									prevCell=null;
 									figureStart = null;
 									figureStop = null;
 									figureLen = 1;
 									continue;
 								}
 							}
 						}
 									
 					}
 				} 				 		
 				for (var c=0; c< cols; c++)
 				{ 					 				 				
 					var prevCell = null;
 					var figureLen = 0;
 					var figureStart = null;
 					var figureStop = null;
 					
 					for (var r = 0; r < rows; r++)
 					{ 					
 						if (grid[r][c].locked || grid[r][c].isInCombo)
 						{
 							figureStart = null;
 							figureStop = null;
 							prevCell = null; 	
 							figureLen = 1;
 							continue;
 						}
 						
 						if (prevCell==null) 
 						{
 							prevCell = grid[r][c].src;
 							figureStart = r;
 							figureLen = 1;
 							figureStop = null;
 							continue;
 						}
 						else
 						{
 							var curCell = grid[r][c].src;
 							if (!(prevCell==curCell))
 							{
 								prevCell = grid[r][c].src;
 								figureStart = r;
 								figureStop=null;
 								figureLen = 1;
 								continue;
 							}
 							else
 							{ 							
 								figureLen+=1;
 								if (figureLen==3)
 								{
 									validFigures+=1;
 									figureStop = r;
 									console.log("Combo from " + figureStart + " to " + figureStop + "!");
 									for (var ci=figureStart;ci<=figureStop;ci++)
 									{
 										 
 										grid[ci][c].isInCombo=true;
 										grid[ci][c].src=null;
 										 
 									}
 									prevCell=null;
 									figureStart = null;
 									figureStop = null;
 									figureLen = 1;
 									continue;
 								}
 							}
 						}
 									
 					}
 				} 				 				
 				
		 var isCombo=false;
		 for (var r = 0;r<rows;r++)
			for (var c=0;c<cols;c++)
				if (grid[r][c].isInCombo)
			{ 							
			 	isCombo=true;
			 	$("#score-text").text(parseInt($("#score-text").text()) + 10);	
			}
						
			if (isCombo) 
				_executeDestroy();				  				 				 			 				
			}
 			
		function _executeDestroy()
		{
		
		
			 for (var r=0;r<rows-1;r++)	 	 
			 	for (var c=0;c<cols-1;c++)
			 		if (grid[r][c].isInCombo)  
			 		{
			 			
			 			grid[r][c].o.animate({
			 				opacity:0
			 			},500);
			 		
			 		}
		
			$(":animated").promise().done(function() {

			   _executeDestroyMemory();
		}); 			 			 			 			
		} 	

		function _executeDestroyMemory() {
			  
			 for (var r=0;r<rows-1;r++)
			 { 				 	 
			 	for (var c=0;c<cols-1;c++)
			 	{
			 		
			 		if (grid[r][c].isInCombo)  
			 		{
			 		 		
			 			grid[r][c].o.attr("src","") 				 			 							
					grid[r][c].isInCombo=false;
					 
			 			for (var sr=r;sr>=0;sr--)
			 			{
			 				if (sr==0) break; 
			 				if (grid[sr-1][c].locked) 
			 					break; 
			 				 				 					
			 					var tmp = grid[sr][c].src;
			 			  		grid[sr][c].src=grid[sr-1][c].src;
							grid[sr-1][c].src=tmp;
						
			 			}
		
			 		}
			 	
			 	}
			 		 
			}		
 						 	
		for (var r=0;r<rows-1;r++)
			{	for (var c = 0;c<cols-1;c++)
				{
					grid[r][c].o.attr("src",grid[r][c].src);
					grid[r][c].o.css("opacity","1");
					grid[r][c].isInCombo=false;
					if (grid[r][c].src==null) 
						grid[r][c].respawn=true;
														
					 if (grid[r][c].respawn==true)
					{
					
						grid[r][c].o.off("ondragover");
						grid[r][c].o.off("ondrop");
						grid[r][c].o.off("ondragstart");

						
						grid[r][c].respawn=false; 								
						grid[r][c].src=pickRandomDulce();
						grid[r][c].locked=false;
						grid[r][c].o.attr("src",grid[r][c].src);
						grid[r][c].o.attr("ondragstart","_ondragstart(event)");
						grid[r][c].o.attr("ondrop","_onDrop(event)");
						grid[r][c].o.attr("ondragover","_onDragOverEnabled(event)"); 								
					}
				}
			} 					  	 				
			_checkAndDestroy(); 							
	}  			  	
_initGame();
