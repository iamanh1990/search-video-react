import axios from 'axios';

const KEY = 'AIzaSyB7mGIABOu4q70TToPtZEBWtY7Qghy46aw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
