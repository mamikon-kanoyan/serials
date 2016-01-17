$(document).ready(function(){
	$.getJSON('http://gameapp.96.lt/', function(data){
		var serialsList = '';
		$.each(data, function(date, items){
			serialsList += '<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-a">' + date + '</li>';
			$.each(items, function(i, elem){
				serialsList += '<li><a href="javascipt:;" onclick="openPage("' + elem.link + '")" target="_blank">' + elem.title + '</a></li>';
			})
		})

		$('#list').html(serialsList).listview('refresh');
	})
})