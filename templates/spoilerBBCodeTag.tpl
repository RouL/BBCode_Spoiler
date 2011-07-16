<div class="quoteBox spoiler cssSpoiler">
	<div class="quoteHeader container-4">
		<h3>
			{if !$spoilerTitle|empty}
				{@$spoilerTitle}
			{else}
				<img src="{icon}warningS.png{/icon}" alt="{lang}wcf.bbcode.spoiler.warning{/lang}" />
				{lang}wcf.bbcode.spoiler.warning{/lang}
			{/if}
		</h3>
	</div>
	<div class="quoteBody container-4">
		{@$content}
	</div>
</div>
