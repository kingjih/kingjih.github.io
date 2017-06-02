$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['homepage', 'intro', 'production', 'compare', 'QA','contact'],
				menu: '#menu',
				easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)','navigation': true,
				'navigationPosition': 'right',controlArrows: true,scrollBar:true
			});

		});
