(function($) {
	Drupal.behaviors.myModuleBehavior = {
		attach : function(context) {
			$('.webform-submit', context).each(function() {
				$(this).click(function() {
					var currentWebformId = $(this).parents("form").attr('id');
					$(this).hide();
					$('#'+currentWebformId+' .form-actions').append('<input class="button-primary form-submit" name="'+currentWebformId+'-process" value="Processing..." disabled>');
				});
			});
		}
	};
})(jQuery); 