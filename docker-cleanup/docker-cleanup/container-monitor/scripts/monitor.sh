#!/bin/bash


CONTAINERS=("nginx" "mysql")


LOG_FILE="./logs/monitor.log"


for container in "${CONTAINERS[@]}"
do

echo "Checking $container" >> $LOG_FILE


STATUS=$(docker inspect -f '{{.State.Running}}' $container)


if [ "$STATUS" = "true" ]
then

echo "$container is running" >> $LOG_FILE


else

echo "$container is down. Restarting..." >> $LOG_FILE


docker restart $container


fi


done
