(function($) {
	Drupal.behaviors.myModuleBehavior = {
		attach : function(context) {
			$('.webform-submit', context).each(function() {
				$(this).click(function() {
					var currentWebformId = $(this).parents("form").attr('id');
					$(this).hide();
					$('#'+currentWebformId+' .form-actions').append('<input class="webform-submit button-primary form-submit" type="submit" name="op" value="Processing..." disabled>');
				});
			});
		}
	};
})(jQuery); 