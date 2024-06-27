import mime from 'mime-types';

export const PROJECT_UID = '05ffe129-2c85-44a3-9478-5b59505802fc'
export const REQUEST_URL = `https://api.hashsnap.net/posts/upload/${ PROJECT_UID }`;
export const CANVAS_WIDTH = 1200;
export const CANVAS_HEIGHT = 1200;
export const IMAGE_TYPE = 'image/png';
export const IMAGE_NAME = 'qr_upload.png';
export const AVAILABLE_TYPES = 'png,jpg,jpeg,gif'.split(',').map(item => mime.lookup(item));