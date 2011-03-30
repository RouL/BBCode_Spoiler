<?php
require_once(WCF_DIR.'lib/data/message/bbcode/BBCodeParser.class.php');
require_once(WCF_DIR.'lib/data/message/bbcode/BBCode.class.php');

/**
 * Parses the [spoiler] bbcode tag.
 *
 * @author		Markus Bartz
 * @copyright	2011 Markus Bartz
 * @package		com.woltlab.community.roul.bbcode.spoiler
 * @license		GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @version		$Id$
 */
class SpoilerBBCode implements BBCode {
	/**
	 * @see BBCode::getParsedTag()
	 */
	public function getParsedTag($openingTag, $content, $closingTag, BBCodeParser $parser) {
		if ($parser->getOutputType() == 'text/html') {
			// show template
			WCF::getTPL()->assign(array(
				'content' => $content,
				'spoilerTitle' => (!empty($openingTag['attributes'][0]) ? $openingTag['attributes'][0] : '')
			));
			return WCF::getTPL()->fetch('spoilerBBCodeTag');
		}
		else if ($parser->getOutputType() == 'text/plain') {
			return "[SPOILER]\n";
		}
	}
}
?>