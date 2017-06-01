$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['homepage', 'intro', 'compare', 'AC', 'DC','Q&A'],
				menu: '#menu',
				easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)','navigation': true,
				'navigationPosition': 'right',controlArrows: true,scrollBar:true
			});

		});