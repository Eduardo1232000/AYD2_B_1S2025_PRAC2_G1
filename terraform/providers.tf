terraform{
    required_providers {
      google = {
        source = "hashicorp/google"
        version = "~> 4.60"
      }
    }
}

provider "google"{
    project = "wired-plateau-455803-b9"
    region = "us-central1"
    credentials = file("./key.json")
}