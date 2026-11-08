#!/bin/bash


CONTAINERS=("nginx" "mysql" "redis")


OUTPUT="./logs/all-containers.log"


for container in "${CONTAINERS[@]}"
do


echo "=================" >> $OUTPUT

echo "Container: $container" >> $OUTPUT

echo "Time: $(date)" >> $OUTPUT


docker logs $container >> $OUTPUT 2>&1


echo "" >> $OUTPUT


done


echo "Logs collected"
