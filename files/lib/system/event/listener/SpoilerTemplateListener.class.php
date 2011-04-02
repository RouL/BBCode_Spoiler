<?php
require_once(WCF_DIR.'lib/system/event/EventListener.class.php');
require_once(WCF_DIR.'lib/system/style/StyleManager.class.php');

/**
 * Adds Spoiler JS to each page.
 *
 * @author		Markus Bartz <roul@codingcorner.info>
 * @copyright	2011 Markus Bartz
 * @license		GNU Lesser General Public License <http://www.gnu.org/licenses/lgpl.html>
 * @package		com.woltlab.community.roul.bbcode.spoiler
 * @subpackage	system.event.listener
 * @category 	BBCode: Spoiler
 */
class SpoilerTemplateListener implements EventListener {
	/**
	 * @see EventListener::execute()
	 */
	public function execute($eventObj, $className, $eventName) {
		WCF::getTPL()->append('specialStyles', '<script type="text/javascript" src="wcf/js/Spoiler.class.js"></script>');
	}
}
?>