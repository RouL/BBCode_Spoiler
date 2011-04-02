/**
 * @author		Markus Bartz
 * @copyright	2011 Markus Bartz
 * @package		com.woltlab.community.roul.bbcode.spoiler
 * @license		GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @version		$Id$
 */
var Spoiler = Class.create({
	initialize: function() {
		// nothing to do here.
	},
	
	register: function(spoilerElement) {
		spoilerElement.down('.quoteBody').setStyle({
			display: 'none'
		});
		spoilerElement.className = 'quoteBox spoiler jsSpoiler';
		spoilerElement.down('h3').observe('click', this.toggle);
	},
	
	toggle: function(event) {
		spoilerElement = Event.element(event).up('.spoiler');
		contentElement = spoilerElement.down('.quoteBody');
		if (contentElement.visible()) {
			Effect.BlindUp(contentElement, { duration: 0.5 });
		}
		else {
			Effect.BlindDown(contentElement, { duration: 0.5 });
		}
	}
});

var spoiler = new Spoiler();

document.observe("dom:loaded", function() {
	$$('.spoiler').each(function(spoilerElement) {
		spoiler.register(spoilerElement);
	});
});
