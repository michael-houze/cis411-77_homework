$(document).ready(function(){

	var turn = 1;
	var player1 = 0;
	var player2 = 0;
	var win = [ 7, 56, 448, 273, 292, 146, 73, 84]

		$("#cell_1_1")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 1;
					for (var i=0; i<win.length; i+=1)
					{
						if(player1 === win[i])
						{
							alert("X wins!");
						}
					}
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 1;
				}
				});

		$("#cell_1_2")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 2;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 2;
				}
				});

		$("#cell_1_3")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 4;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 4;
				}
				});

		$("#cell_2_1")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 8;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 8;
				}
				});

		$("#cell_2_2")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 16;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 16;
				}
				});

		$("#cell_2_3")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 32;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 32;
				}
				});

		$("#cell_3_1")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 64;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player2 += 64;
				}
				});

		$("#cell_3_2")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 128;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player1 += 128;
				}
				});

		$("#cell_3_3")
		.click(
			function(){
				var cell = $(this);
				if(turn==1)
				{
					cell.css('background-image', 'url(x.png)');
					turn = 2;
					player1 += 256;
				}
				else
				{
					cell.css('background-image', 'url(o.png)');
					turn = 1;
					player1 += 128;
				}
				});
});