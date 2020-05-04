/*

	yHostname

	AUTHOR		Daniel Freytag
			daniel@frytg.com
			https://twitter.com/FRYTG

*/

var os 		= require('os')

module.exports	= function() {
	if((process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET) && os.hostname().indexOf('.local') === -1) {
		console.log('yHostname', 'gcf');
		return 'gcf'

	} else if(process.env.K_CONFIGURATION && process.env.K_SERVICE) {
		console.log('yHostname', 'gcr');
		return 'gcr'

	} else if(process.env.KUBERNETES_SERVICE_HOST) {
		console.log('yHostname', 'gke');
		return 'gke'

	} else if(os.hostname().indexOf('.local') !== -1) {
		console.log('yHostname', 'local');
		return 'local'

	} else if(os.hostname().indexOf('s00') !== -1) {
		console.log('yHostname', 'onPrem', os.hostname());
		return os.hostname()

	} else {
		console.log('yHostname', 'null');
		return 'null'

	}
}
