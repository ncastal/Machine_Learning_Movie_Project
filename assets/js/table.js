
var imdbData;



d3.csv('./table_data.csv').then(function (data) {
	imdbData = data;
	renderTable(imdbData)	
})

// Appending table with data


function renderTable(data) {
	var tbody = d3.select('tbody');

	tbody.html('');
	data.forEach(dataRow => {
		var row = tbody.append('tr');
		Object.values(dataRow).forEach(val => {
			var cell = row.append('td');
			cell.text(val);
		})
	});
};


function handleFilter(data) {
	// console.log("function called")
	var key = d3.select(this).property('id');
	// console.log(key)	
	var value = d3.select(this).property('value');
	console.log(value)
	imdbData = imdbData.filter( data => data[key].includes(value));

	renderTable(imdbData);
};
d3.selectAll('input').on('change', handleFilter);