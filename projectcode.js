// Load the Visualization API and the pie chart package.
google.load('visualization', '1.0', {'packages':['corechart']});

var colorsArray=['blue', 'red', 'orange', 'green'];
var options = {
    title:'Colors',
    width: 500,
    height: 400,
    animation:{
		duration: 1000,
        easing: 'out',
        startup: true
    },
	colors: colorsArray,
	legend: 'none'
};
    
var options2 = {
    title:'Colors',
    width: 500,
    height: 400,
    animation:{
        duration: 1000,
        easing: 'out',
        startup: true
      },
    hAxis: { minValue: new Date('2015-12-03'), maxValue:  new Date('2015-12-11')}     
};

var options3 = {
    title:'Temperature',
    width: 500,
    height: 400,
    animation:{
        duration: 1000,
        easing: 'out',
        startup: true
    },
    hAxis: {viewWindow: {min:0, max:4}}
};
    
var options4 = {
    title:'Temperature',
    width: 500,
    height: 400,
    animation:{
        duration: 1000,
        easing: 'out',
        startup: true
    },
    hAxis: {viewWindow: {min:0, max:4}}
};   

var options5 = {
    title:'Temperature',
    width: 500,
    height: 400,
    animation:{
        duration: 1000,
        easing: 'out',
        startup: true
    },
};   



// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

var data;
var data2;
var visibleColumns = [];
var visibleRows = [];
var date1;
var date2;
var value;
var value2;
var chart;
var chart2;
var chart3;
var chart4;
var chart5;
var dataArray = [];
var pointer = 1;
 
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1yhoF-bk4Ipm3Ki36ntlXej-Y4rh6afW6ZEdcGaOjRmk/edit#gid=0');       
  
    query.send(handleQueryResponse);
    var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Jz8d-u_Eo7Skxm7qaDIk5qSaVl6_nxG7Qz-uCl1RVgg/edit#gid=0&vpid=A1');
    query2.send(handleQueryResponse2);        
        
    var query3 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1TUfmPIQy1UYkxaBnjQS4SFCo6S2NhLA-_-NASwG85Zs/edit#gid=0&vpid=A1');
    query3.send(handleQueryResponse3);  

    //var query4 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1bfVFePTN8OYqfM5t-nRTJtxnG8P_-7RdK713olIxaMU/edit#gid=0');
    //query4.send(handleQueryResponse4);    
}
      
// Handles getting data from one spreadsheet and creating two charts	  
function handleQueryResponse(response) {
    if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    data = response.getDataTable();
      
    chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    chart2 = new google.visualization.ScatterChart(document.getElementById('chart_div2'));
    chart2.draw(data, options2);
}

// Handles getting data from one spreadsheet and creating two more charts
// Also allows for switching data sets
function handleQueryResponse2(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    data2 = response.getDataTable();
      
    chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
    chart3.draw(data2, options3);
    chart4 = new google.visualization.ScatterChart(document.getElementById('chart_div4'));
    chart4.draw(data2, options4);
    chart5 = new google.visualization.BubbleChart(document.getElementById('chart_div5'));
    chart5.draw(data2, options5); 
    dataArray[0] = data2;  
   
}

// Helps with switching data sets
function handleQueryResponse3(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    data3 = response.getDataTable();
    dataArray[1] = data3;
}

// Helps with switching data sets
function handleQueryResponse4(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    data4 = response.getDataTable();
    
    chart5 = new google.visualization.BubbleChart(document.getElementById('chart_div5'));
    chart5.draw(data2, options5); 
}

// Switches data sets and redraws the charts
function handleSwitch(a){
    chart3.draw(dataArray[pointer], options3);
    chart4.draw(dataArray[pointer], options4);
    chart5.draw(dataArray[pointer], options5);
    pointer = 1 - pointer;
}

// Draws charts after modifying data in the spreadsheet
function handleClickNow(animate){    
    google.setOnLoadCallback(drawChart);
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1yhoF-bk4Ipm3Ki36ntlXej-Y4rh6afW6ZEdcGaOjRmk/edit#gid=0');
    query.send(handleQueryResponse);
	
    var view = new google.visualization.DataView(data, options);
    chart.draw(view, {
		title:'Colors',
		width: 500,
		height: 400,
		animation:{
			duration: 1000,
			easing: 'out',
			startup: true
		},
		colors: colorsArray,
		legend: 'none'
    });
}

function handleClickNow2(animate){    
    google.setOnLoadCallback(drawChart);
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Jz8d-u_Eo7Skxm7qaDIk5qSaVl6_nxG7Qz-uCl1RVgg/edit#gid=0');
    query.send(handleQueryResponse2);
	
    var view = new google.visualization.DataView(data2, options);
    chart3.draw(view, {
		title:'Colors',
		width: 500,
		height: 400,
		animation:{
			duration: 1000,
			easing: 'out',
			startup: true
		},
		colors: colorsArray,
		legend: 'none'
    });
    chart4.draw(view, {
		title:'Colors',
		width: 500,
		height: 400,
		animation:{
			duration: 1000,
			easing: 'out',
			startup: true
		},
		colors: colorsArray,
		legend: 'none'
    });  
}
 
// Handles showing the colors picked and making the label correspond with the color of the bar 
function handleClick(cb){
	var view = new google.visualization.DataView(data, options);
    visibleColumns.length = 0;
    visibleColumns.push(0);
    colorsArray = [];
	
    if (document.getElementById('Blue').checked) {
        visibleColumns.push(1);
        colorsArray.push('blue');
    }

    if (document.getElementById('Red').checked) {
        visibleColumns.push(2);
        colorsArray.push('red');
    }

    if (document.getElementById('Orange').checked) {
        visibleColumns.push(3);
        colorsArray.push('orange');
    }

    if (document.getElementById('Green').checked) {
        visibleColumns.push(4);
        colorsArray.push('green');
    }

    view.setColumns(visibleColumns);
    chart.draw(view, {
		title:'Colors',
		width: 500,
		height: 400,
		animation:{
			duration: 1000,
			easing: 'out',
			startup: true
		},
		colors: colorsArray,
		legend: 'none'
    });
}

// Handles moving the two charts to the right
function handleRight(a){
    options3.hAxis.viewWindow.min += 1;
    options3.hAxis.viewWindow.max += 1;
    chart3.draw(dataArray[1 - pointer], options3);
      
    options4.hAxis.viewWindow.min += 1;
    options4.hAxis.viewWindow.max += 1;
    chart4.draw(dataArray[1 - pointer], options4);
}

// Handles moving the two charts to the left    
function handleLeft(a){
    options3.hAxis.viewWindow.min -= 1;
    options3.hAxis.viewWindow.max -= 1;
    chart3.draw(dataArray[1 - pointer], options3);
      
    options4.hAxis.viewWindow.min -= 1;
    options4.hAxis.viewWindow.max -= 1;
    chart4.draw(dataArray[1 - pointer], options4);
}

// Handles selecting the dates to filter and redrawing the chart to correspond to those dates
function handleDate1(da){
	date1 = document.getElementById('datepicker');
    date2 = document.getElementById('datepicker2');
    value=$("#datepicker").val();
    value2=$("#datepicker2").val();
	
    var view2 = new google.visualization.DataView(data, options2);   
    visibleRows.length = 0;

    if (value <= '12/03/2015' && value2 >= '12/03/2015') {
		visibleRows.push(0);
    } 	
    if (value <= '12/07/2015' && value2 >= '12/07/2015') {
		visibleRows.push(1);
    }
    if (value <= '12/11/2015' && value2 >= '12/11/2015') {
		visibleRows.push(2);      
    }       
	
    view2.setRows(visibleRows);
    chart2.draw(view2, options2);
}

// jQuery functions to show the calendar to pick dates to filter from
$(function() {
    $("#datepicker").datepicker();
		value=$("#datepicker").val();
	});
	
$(function() {
    $("#datepicker2").datepicker();
		value2=$("#datepicker2").val();
});
