/**
 * @author		Markus Bartz
 * @copyright	2011 Markus Bartz
 * @package		com.woltlab.community.roul.bbcode.spoiler
 * @license		GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
(function( $, undefined ) {

$.widget( "ui.wcfSpoiler", {
	options: {},
	
	/**
	 * @see	jQuery.ui.Widget._create()
	 */
	_create: function() {
		// hide spoiler content
		this.element.children('.quoteBody').css('display', 'none');
		
		// switch css class to jsSpoiler 
		this.element
			.removeClass('cssSpoiler')
			.addClass('jsSpoiler');
		
		// add click event
		var $self = this;
		this.element.children('.quoteHeader').children('h3').click(function() {
			$self._toggle();
		});
	},
	
	/**
	 * @see	jQuery.ui.Widget.destroy()
	 */
	destroy: function() {
		$.Widget.prototype.destroy.apply(this, arguments);
		
		// remove click event
		this.element.children('.quoteHeader').children('h3').unbind('click');
		
		// switch css class to cssSpoiler 
		this.element
			.removeClass('jsSpoiler')
			.addClass('cssSpoiler');

		// hide spoiler content
		this.element.children('.quoteBody').css('display', 'block');
	},
	
	_toggle: function() {
		this.element.children('.quoteBody').toggle('blind', null, 'fast');
	},
});

$(document).ready(function() {
	$('.spoiler').wcfSpoiler();
});
}( jQuery ) );
