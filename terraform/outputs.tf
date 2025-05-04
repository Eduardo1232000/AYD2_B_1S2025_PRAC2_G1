output "instance_id" {
  value       = google_compute_instance.frontend.instance_id
  description = "Instance ID"
}

output "public_ip" {
  value       = google_compute_instance.frontend.network_interface[0].access_config[0].nat_ip
  description = "Public IP Address of the instance"
}

output "instance_name_1" {
  value       = google_compute_instance.microservicio1.instance_id
  description = "Instance ID del microservicio 1"
}
output "public_ip_1" {
  value       = google_compute_instance.microservicio1.network_interface[0].access_config[0].nat_ip
  description = "Microservicio 1 tiene la ip:"
}

output "instance_name_2" {
  value       = google_compute_instance.microservicio2.instance_id
  description = "Instance ID del microservicio 2"
}
output "public_ip_2" {
  value       = google_compute_instance.microservicio2.network_interface[0].access_config[0].nat_ip
  description = "Microservicio 2 tiene la ip:"
}

output "instance_name_3" {
  value       = google_compute_instance.microservicio3.instance_id
  description = "Instance ID del microservicio 3"
}
output "public_ip_3" {
  value       = google_compute_instance.microservicio3.network_interface[0].access_config[0].nat_ip
  description = "Microservicio 1 tiene la ip:"
}

