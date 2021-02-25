terraform {
  backend "s3" {
    bucket = "codynog-next-blog-tf"
    key    = "state/service"
    region = "ap-northeast-1"
  }
}
