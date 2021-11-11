/*

	swr-radiohub-docs

*/

const IS_GITHUB = process.env.IS_GITHUB === 'true'

const express = require('express')
const swaggerUi = require('swagger-ui-express')

const app = express()

const swaggerDocument = require('./openapi.json')

const customCss =
	'label { display: inline; padding: 0; } ' +
	'.swagger-ui .servers>label select { margin: 0; } ' +
	'span.servers-title { display: none; }' +
	'.swagger-ui select { font-weight: 400; }' +
	'td { padding: 9px 22px !important; } ' +
	'td:hover { background: inherit; } ' +
	'tr:nth-child(even) { background: hsl(200, 0%, 96%); } ' +
	'.swagger-ui .topbar { background: #003082; } ' +
	'.swagger-ui .topbar img { display: none; }' +
	".swagger-ui .topbar .topbar-wrapper:after { content: 'SWR audio lab - Radiohub Documentation'; padding: 15px 0; color: white; font-size: 25px; font-weight: 600; }" +
	'.swagger-ui .topbar .download-url-wrapper { display: none } ' +
	'.swagger-ui * { font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important; }' +
	'div.swagger-ui { max-width: 1080px; margin: 0 auto; } ' +
	'div.swagger-ui .wrapper { padding: 15px; background: rgba(245,245,252,0.7) }' +
	'div.swagger-ui .info .title small pre { padding: 2px 5px; }' +
	'div.information-container.wrapper { margin: 6% 0 6% 0; padding: 15px; }' +
	'div.swagger-ui .scheme-container { background: none; margin: 0 0 6% 0; padding: 0; box-shadow: none; }' +
	'div.swagger-ui .scheme-container .schemes { margin: 0; padding: 15px; }' +
	'section.swagger-ui section.models { border: 0; }' +
	'div.swagger-ui section.models .model-container { background: rgba(255,255,255,0.6) !important; } ' +
	'div.swagger-ui section.models .model-container:hover { background: white !important; } ' +
	'div.box, div.swagger-ui .wrapper { overflow: visible; } ' +
	'div.swagger-ui .btn.authorize { background: rgb(255, 211, 53); border-color: transparent; color: black; } ' +
	'div.swagger-ui .btn.authorize svg { fill: black; } ' +
	'div.swagger-ui .btn.cancel { background: #ff6060; border-color: transparent; color: black; } ' +
	'div.swagger-ui .opblock, div.swagger-ui .response-col_description__inner div.markdown, .swagger-ui .response-col_description__inner div.renderedMarkdown { border-radius: 0; box-shadow: none; } ' +
	'div.swagger-ui .auth-container .wrapper { border: 0; } ' +
	'div.swagger-ui .dialog-ux .modal-ux { border: 0; box-shadow: none; border-radius: 0; } ' +
	'div.swagger-ui .opblock.opblock-get .opblock-summary-method { background: #003082; } ' +
	'div.swagger-ui .opblock.opblock-get .opblock-summary { border-color: #003082; padding: 15px; } ' +
	'div.swagger-ui .opblock.opblock-get { border-color: #003082; background: rgba(0, 148, 230, 0.03); } ' +
	'div.swagger-ui .opblock.opblock-post .opblock-summary { padding: 15px; } '

const options = {
	explorer: true,
	customCss,
	customCssUrl: 'https://dashboard.lab.swr.de/static/css/lab-dashboard-style-v2.css?024',
	customeSiteTitle: 'SWR Radiohub API Documentation',
	customfavIcon:
		'https://api.lab.swr.de/images/v1/get/swr-audio-lab-icon-black-smooth/img?width=512&d=swr-radiohub-docs',
}

app.get('/radiohub-docs/openapi.yaml', (req, res) => {
	res.sendFile(`${__dirname}/openapi.yaml`)
})

app.get('/radiohub-docs/openapi.json', (req, res) => {
	res.sendFile(`${__dirname}/openapi.json`)
})

app.get('/radiohub-docs/changelog', (req, res) => {
	res.redirect('https://github.com/swrlab/swr-radiohub-docs/blob/master/CHANGELOG.md')
})

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
app.use('/radiohub-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

app.listen(process.env.PORT || 8080)

if (IS_GITHUB) {
	process.exit()
}
