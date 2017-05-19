$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
				menu: '#menu',//equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
				easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)','navigation': true,
				'navigationPosition': 'right'
			});

		});