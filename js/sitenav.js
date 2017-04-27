$(function() {

	setSiteNav($('.site-nav'));
	function setSiteNav(dom, callback) {
		$.ajax({
			url: "http://139.199.157.195:9090/api/getsitenav",
			success: function(data) {
				var html = template('siteNav', data);
				dom.html(html);
			}
		});
	}

});