{* SVN-ID: $Id$ *}
<script type="text/javascript">
	//<![CDATA[
	if (typeof spoilerJSIncluded == 'undefined') {
		spoilerJSIncluded = true;
		document.write('<'+'script type="text/javascript" src="{@RELATIVE_WCF_DIR}js/Spoiler.js"'+'><'+'/script'+'>');
	}
	//]]>
</script>
<div class="quoteBox spoiler">
	<div class="quoteHeader">
		<h3>
			<a>{if !$spoilerTitle|empty}{@$spoilerTitle}{else}&nbsp;&nbsp;<img src="{@RELATIVE_WCF_DIR}icon/warningS.png" alt="{lang}wcf.bbcode.spoiler.warning{/lang}" />&nbsp;{lang}wcf.bbcode.spoiler.warning{/lang}{/if}</a>
		</h3>
	</div>
	<div class="quoteBody">
		<div style="display: none;">
			{@$content}
		</div>
		<noscript>
			<div class="spoilerNoscript" style="background-color: {@$this->style->getVariable('messages.boxes.background.color')}; color: {@$this->style->getVariable('messages.boxes.background.color')}; border: {@$this->style->getVariable('container.border.outer.width')} {@$this->style->getVariable('container.border.outer.style')} {@$this->style->getVariable('container.border.outer.color')};">
				{@$content}
			</div>
			<div class="formFieldDesc spoilerNoscriptDesc">
				<p>{lang}wcf.bbcode.spoiler.noScript{/lang}</p>
			</div>
		</noscript>
	</div>
	<script type="text/javascript">
		//<![CDATA[
		spoiler.register();
		//]]>
	</script>
</div>
