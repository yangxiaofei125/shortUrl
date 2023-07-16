import hyRequest from './request'

export function getShortUrl(url) {
  return hyRequest.get({
    url: '/get-short',
    params: {
      originUrl: url
    }
  })
}