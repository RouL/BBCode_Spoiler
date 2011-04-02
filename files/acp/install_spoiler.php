<?php
// get all wbbs
$sql = "SELECT	instanceNo
	FROM	wcf".WCF_N."_package
	WHERE	package = 'com.woltlab.wbb'";
$result = WCF::getDB()->sendQuery($sql);
while ($row = WCF::getDB()->fetchArray($result)) {
	// clear postcache to "kill" old spoilers
	$sql = "TRUNCATE TABLE wbb".WCF_N."_".$row['instanceNo']."_post_cache";
	WCF::getDB()->sendQuery($sql);
}

// look for 'com.woltlab.wcf.form.user.signature'
$sql = "SELECT packageID
	FROM wcf".WCF_N."_package
	where package = 'com.woltlab.wcf.form.user.signature'";
$row = WCF::getDB()->getFirstRow($sql);
if (is_array($row) && $row['packageID']) {
	// clear signaturecache to "kill" old spoilers
	$sql = "UPDATE wcf".WCF_N."_user
		SET signatureCache = ''";
	WCF::getDB()->sendQuery($sql);
}

// refresh all style files
require_once(WCF_DIR.'lib/data/style/StyleEditor.class.php');
$sql = "SELECT * FROM wcf".WCF_N."_style";
$result = WCF::getDB()->sendQuery($sql);
while ($row = WCF::getDB()->fetchArray($result)) {
	$style = new StyleEditor(null, $row);
	$style->writeStyleFile();
}
?>