


export const serverUrl = process.env.VUE_APP_SERVER_URL || 'http://localhost:3000';

export const getProject = serverUrl + '/articles/project';

export const getLastProjectsSumsUrl = serverUrl + '/articles/projects/last-sums';
export const getAllProjectsSumsUrl = serverUrl + '/articles/projects/all-sums';

export const getArticleImageUrl = serverUrl + '/images'; // /:filename/:articleId