var CvAdminDashboard = (function() {
	function render(params) {
		$ui.loadScript({
			url: "https://www.gstatic.com/charts/loader.js",
			onload: function() {
				google.charts.load("current", { "packages": ["corechart"]});
				google.charts.setOnLoadCallback(function() {
					var data = new google.visualization.arrayToDataTable([
						["Element", "", { role: "style" }],
				        ['', 45, '#b87333'],
				    ]);
			    	// Instantiate and draw the chart.
			    	var visualisation = new google.visualization.BarChart(document.getElementById('progressBar'));
			    	var options = {
			        	height: 300,
			        	legend: 'none',
			        	hAxis: {
			            	minValue: 0,
			            	maxValue: 100,
			            	ticks: [0, 25, 50, 75, 100],
			            	format: '#\'%\''
			        	},
			        };
			    	visualisation.draw(data, options);
				});
			}
		});
	}

	return { render: render };
})();
