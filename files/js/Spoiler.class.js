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
		this.element.find('.quoteBody').css('display', 'none');
		
		// switch css class to jsSpoiler 
		this.element
			.removeClass('cssSpoiler')
			.addCLass('jsSpoiler');
		
		// add click event
		this.element.find('h3').click(this.toggle);
	},
	
	/**
	 * @see	jQuery.ui.Widget.destroy()
	 */
	destroy: function() {
		$.Widget.prototype.destroy.apply(this, arguments);
		
		// remove click event
		this.element.find('h3').unbind('click', this.toggle);
		
		// switch css class to cssSpoiler 
		this.element
			.removeClass('jsSpoiler')
			.addCLass('cssSpoiler');

		// hide spoiler content
		this.element.find('.quoteBody').css('display', 'block');
	},
	
	toggle: function() {
		this.element.toggle('blind', null, 'slow');
	},
});

$.ready(function() {
	$('.spoiler').wcfSpoiler();
});
}( jQuery ) );
