module.exports = {
  /* config options here */
  trailingSlash: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    CMS_ROOT: process.env.CMS_ROOT || "https://yoyoyotest.microcms.io/api/v1",
    CMS_API_KEY: process.env.CMS_API_KEY
  }
}