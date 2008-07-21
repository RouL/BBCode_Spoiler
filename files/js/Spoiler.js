/**
 * @author		Markus Bartz
 * @copyright	2008 Blackstorm
 * @package		com.woltlab.community.roul.bbcode.spoiler
 * @license		GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * SVN-ID:		$Id$
 */
function Spoiler() {
	this.spoilers = Array();
	this.spoilerCount = 0;
	
	/**
	 * Registers a new spoiler.
	 */
	this.register = function() {
		var spoilerNumber = this.spoilerCount++;
		this.spoilers[spoilerNumber] = false;
		
		document.write('<div class="hidden" id="spoiler'+spoilerNumber+'"></div>');
		var spoilerBlock = document.getElementById('spoiler'+spoilerNumber).parentNode;
		
		// add event listeners
		var element = spoilerBlock.getElementsByTagName('div')[0].getElementsByTagName('h3')[0].getElementsByTagName('a')[0];
		element.onclick = function(e) { return spoiler.toggle(spoilerNumber); };
		
		return true;
	}
	
	this.toggle = function(id) {
		var spoilerBlock = document.getElementById('spoiler'+id).parentNode;
		var element = spoilerBlock.getElementsByTagName('div')[1].getElementsByTagName('div')[0];
		
		if (this.spoilers[id]) {
			element.style.display = 'none';
			this.spoilers[id] = false;
		}
		else {
			element.style.display = 'block';
			this.spoilers[id] = true;
		}
	}
}

var spoiler = new Spoiler();