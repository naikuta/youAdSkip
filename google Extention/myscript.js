$(function() {


	$(document).on("DOMNodeInserted", function(e) {
		var target = e.target;
		$(target).find('.videoAdUiSkipButton').each(function(){
			setTimeout(function(){
				$('.videoAdUiSkipButton').trigger("click");
			},9000);
		});
	});
});
