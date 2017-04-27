'use stict'
$(function() {
	getbrandtitle($('#category .items'));

	function getbrandtitle(dom, data, callback) {
		$.ajax({
			url: "http://139.199.157.195:9090/api/getbrandtitle",
			success: function(data) {
				console.log(data);
				var html = template('brandtitle', data);
				dom.html(html);
			}
		});
	}
});