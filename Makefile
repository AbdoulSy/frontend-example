app:
	docker build -t frontend:latest .

run:
	docker run -p 1234:1234 -t frontend:latest
