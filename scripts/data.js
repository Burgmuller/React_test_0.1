var lang = [
	{
		isocode: 'en-GB',
		friendlyname: 'English Great Britain',
		langID: 1,
		general: [
			// Top navigation
            { key: 'nav1', fID: 0, imageurl: '', text: 'Our Products' },
            { key: 'nav2', fID: 0, imageurl: '', text: 'Where to Buy' },
            { key: 'nav3', fID: 0, imageurl: '', text: 'News & Reviews' },
            { key: 'nav4', fID: 0, imageurl: '', text: 'Help & Support' },
            { key: 'nav5', fID: 0, imageurl: '', text: 'My Opticron' },
            // Content sections
            { key: 'top1-title', fID: 0, imageurl: '', text: 'New Products' },
            { key: 'top1-p', fID: 0, imageurl: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mauris ut augue ultrices, et lobortis lectus semper.' },
            { key: 'top1-btn', fID: 0, imageurl: '', text: 'New Products' },
            { key: 'top2-title', fID: 0, imageurl: '', text: 'Field Events' },
            { key: 'top2-p', fID: 0, imageurl: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mauris ut augue ultrices, et lobortis lectus semper.' },
            { key: 'top2-btn', fID: 0, imageurl: '', text: 'View Events' },
            { key: 'top3-title', fID: 0, imageurl: '', text: 'Latest News' },
            { key: 'top3-p', fID: 0, imageurl: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mauris ut augue ultrices, et lobortis lectus semper.' },
            { key: 'top3-btn', fID: 0, imageurl: '', text: 'Read Article' },
            { key: 'top4-title', fID: 0, imageurl: '', text: 'Gallery' },
            { key: 'top4-p', fID: 0, imageurl: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mauris ut augue ultrices, et lobortis lectus semper.' },
            { key: 'top4-btn', fID: 0, imageurl: '', text: 'View Gallery' },
            { key: 'offers-title', fID: 0, imageurl: '', text: 'Special Offers' },
            { key: 'offers-p1', fID: 0, imageurl: '', text: 'Discovery WP PC<br /><b>£20 Cashback</b>' },
            { key: 'offers-p2', fID: 0, imageurl: '', text: 'HR ED Fieldscopes<br /><b>Free Digiscoping Kit</b>' },
            { key: 'offers-p3', fID: 0, imageurl: '', text: 'IS 60 WP Fieldscope Kits<br /><b>Save 25%</b>' },
            { key: 'offers-btn', fID: 0, imageurl: '', text: 'View All Offers' },
            { key: 'cat-title', fID: 0, imageurl: '', text: 'Product Categories' },
            { key: 'cat-p1', fID: 0, imageurl: '', text: 'Binoculars' },
            { key: 'cat-p2', fID: 0, imageurl: '', text: 'Compact Binoculars' },
            { key: 'cat-p3', fID: 0, imageurl: '', text: 'Telescopes & Eyepieces' },
            { key: 'cat-p4', fID: 0, imageurl: '', text: 'Observation & Marine' },
			// Footer
			{ key: 'foo-p1', fID: 0, imageurl: '', text: '<b>Opticron</b> Unit 21, Titan Court, Laporte Way, Lutton, Bedfordshire, LU4 8EF, UK' },
            { key: 'foo-n1', fID: 0, imageurl: '', text: 'Site map' },
            { key: 'foo-n2', fID: 0, imageurl: '', text: 'Terms' },
            { key: 'foo-n3', fID: 0, imageurl: '', text: 'Privacy Policy' },
            { key: 'foo-n4', fID: 0, imageurl: '', text: 'Site By Verto' },
            { key: 'foo-call', fID: 0, imageurl: '', text: 'call' },
            { key: 'foo-call-num', fID: 0, imageurl: '', text: '01582 726522' },
            { key: 'foo-email', fID: 0, imageurl: '', text: 'email us' },
            { key: 'foo-email-txt', fID: 0, imageurl: '', text: 'sales@opticron.co.uk' },
            // Logo
            { key: "logo", imageurl: '', text: "<img width='209' height='50' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAAAyCAMAAAD1NM7xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMkIwNDkwRDg0OTExRTlBMTM2RTdGNkE3QUFBMjgwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxMkIwNDkxRDg0OTExRTlBMTM2RTdGNkE3QUFBMjgwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTEyQjA0OEVEODQ5MTFFOUExMzZFN0Y2QTdBQUEyODAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyQjA0OEZEODQ5MTFFOUExMzZFN0Y2QTdBQUEyODAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YaJQTAAAAe1BMVEVPm3Z7rZYJhkfU3NplpIbC0ssSh02nw7c6kmYfjFWQtqVwqY2Fsp0vjV9an35Elm+Quaa2zcMnjVqzycAbiFKbu60+lmucvq8ykmJ9q5ZbmnyQtKRAjGdIkm4uil2auKttoomGr5xQknM3jmRIj22lv7QliVcAhULm5+jFN5NkAAAAKXRSTlP/////////////////////////////////////////////////////AFL0IIcAAAT5SURBVHja7JnnkuQoDIBNcg4d7OnuDbd3twvu93/CcwBMEA5VW7Mzc6OfmKAPCyGJ6PnRJPokCshDjPLFbS6ESE/vkwj1o0RQK04+EFE1tdZvjugbbFE7iATY+ueJ9ugFEzVTa/GBiJJ4aKzI+yO6cv731KfhszD1hRVR+bpAPtG1iKZjExVXmIjkNB07VFGpFI96R5D8MPNdl9k72lhj82iSsQfPEeqMrsNC9bRQWhubcjUGdAiVnGwQ5SnWauEo8YkIuiyKx/V5ncjZC1QZY6fZZ2PteVLPXXFVyG0itF06t1RtHlcDqJyrbfIVIuaohmvi6JVc7B4x2k+U3J3ZC6KIvmNjymJc9OQslJUW0b/GgD69hYjOmatZfz9bepXY69GQnUQnf+wLQT0gL+RJ/c7UJHL2hsJEANCwN2dDryKw/h4iAKjHHUiEOwo10yCRwnWIWAb2vROtF6TU9OGLEPFsMWKWh0d0g4BOT4gInxCsdhEmMpAWomWjq8GZ/NQa1EqvBRmnQ4+/dP9yO2Yg+ljgSo0dgAwinKLuR5GOzYleOx4XErpLYhGliPOvNJbfbh5RrjvOviOJsJpH6kW1v5h9bK5O+mU4SuU6EXX8Z55OQAtRJjUqq5OMNMbjwWz3mhpEsXQVrF6UsIlS7/cpI5Ob9F3uRqazA0KXY8PVkiARi7Wd6Tzj9jSIsrNxg6g2HbOTF9mUa6J4GUDts6uIOv+IKSQ8Xwzt8uvdySpFJAJEyAOygid70tqHVEiNJkJe9Jg6RFQNefoKg25sXkkaHt8gavztsohMayXtcjpdtxUzrvfQCETmXbnaRHLNzlpPGYshFzvqyBXmKpFUMmYhIlN73kMGLC+OjkN7U0mTtIiEjw4FA+42S13rdSLehzI/FQX5TcgJN+cTgDj0NTLbotX42r8YSjADinYRoSNEHJyq4NDXFSK6ScTBv/gKRI01Ff99/yj/U0TCsrrdRO59QsFIBKqN7CGiR4gc85ZO6gBRY3lAde4vHpHD3Nm+zhnv+LpqFxHvIXMpbV+XbxNRyB1BESM0l76P3F/o3EflHiKJb1f55MWn76Mdvq4DbnWZXmAZVwMXUrncdwK6rpyYwQwDwoem1lmKZ/46ZthBpOK67OblS+ms1y8Z5r0wL/IrAnp4cZ2BdDuFiPLemwphJ67bQ5QbufK8/yp5yKVe6rrNpOExlWhmzNRDWkuSQLG3Sq5Jgc3Y2z7oKmi+J06xYIm99xDpGL5va9Q9aLUkdF5+lFL0FdWxHeopPXBTDF8bPBogkB9VFP1AdStTGpBI50c4LcphKrXQOOAI0RnOYYcfsJnDzmaE/YBpPYcdbBC+fIpwnnqEaNmaYJ2BBuoMsB6Dt9qoM2TnwHUKLtQ8jxI9kwwEMvQqcBjI1+NOtmpBLEAEIc2VtmNEz3PjGhRzIqTbxa+5Gc7cyT7+Wa/X1SQU8hh+ySoMHiaa8n8jPsiBmmpxceuiZqxCDaYLct5prHostmqqfjRhTRW7NdX9RLIyjYVoaBeqe9eVaGMhIsQARcpo+lrVOVDBn0rZLV6q6gmahEEl+WmquDUL7EPjPMDeydxsg18crltvE4StPQ9sfL0eeGlgh182ftf70dt7K3+IgHCD6Jt4y/KwiQKF2enQaiLRv2VxPAPjATFjGf6mhX30c/T/IvJeU9890fuST6JPoteX/wQYAIZO2YzAjOZ6AAAAAElFTkSuQmCC' />" }
		]
	},
	// Oher languages
	{
		isocode: 'fr-FR',
		friendlyname: 'French',
		langID: 2,
		general: [
			// Top navigation
			{ key: 'hello', imageurl: '', text: 'Bonjour' },
		]
	}
];
// --- i18n.js function only --- //
var gFields;
function translatePage(langID) {
	gFields = lang[langID].general
	$.each(gFields, function (i, j) {
		if (j.imageurl != '') {
			$('[data-i18n_ap="' + j.key + '"]').attr('src', j.imageurl);
		} else {
			$('[data-i18n_ap="' + j.key + '"]').html(j.text);
		}
	})
}