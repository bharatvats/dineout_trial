try {
    if(!process.env.APP_ENVIRONMENT || process.env.APP_ENVIRONMENT === 'local') {
        require('dotenv').config({path: './config/local.conf'});
    } else if(process.env.APP_ENVIRONMENT === 'prod') {
        require('dotenv').config({path: './config/prod.conf'});       
    } else if(process.env.APP_ENVIRONMENT === 'staging') {
        require('dotenv').config({path: './config/staging.conf'});
    } else {
        throw new Error('config file read error');
    }
  } catch(e) {
    console.log(e);
    throw new Error('config file read error');
  }