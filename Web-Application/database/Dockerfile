# Use the official MongoDB image from the Docker Hub
FROM mongo:8

# Set the working directory inside the container
WORKDIR /data

# Copy the JSON file into the container
COPY Users.json /data/


# Run the MongoDB server and import the JSON file
CMD ["/bin/sh", "-c", "mongod --logpath /var/log/mongodb.log --dbpath /data/db --bind_ip_all & sleep 5 && mongoimport --db Data --collection Users --file /data/Users.json --jsonArray && wait"]

EXPOSE 27017