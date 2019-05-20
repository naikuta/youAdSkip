$(function() {
	$(document).on("DOMNodeInserted", function(ev) {
		var target = ev.target;
		$(target).find('.videoAdUiSkipButton').each(function(){
			setTimeout(function(){
				$('.videoAdUiSkipButton').trigger("click");
			},15000);
		});
	});

});
