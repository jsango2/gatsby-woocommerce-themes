require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
			resolve: 'gatsby-woocommerce-theme',
			options: {
				wordPressUrl: 'http://www.sutrashop.com.hr',
				gatsbySiteUrl: 'http://www.sutrashop.com.hr',
				googleTagManagerId: `${process.env.GOOGLE_TAGMANAGER_ID}`,
				fbAppId: `${process.env.FB_APP_ID}`,
			},
		},
	],
};
