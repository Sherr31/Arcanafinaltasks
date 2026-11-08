#!/bin/bash


SERVICES=("nginx" "mysql")

LOG="./logs/watchdog.log"


for service in "${SERVICES[@]}"
do

systemctl status $service > /dev/null


if [ $? -ne 0 ]
then

echo "$(date): $service stopped. Restarting..." >> $LOG

systemctl restart $service

echo "$(date): $service restarted" >> $LOG


else

echo "$(date): $service running" >> $LOG

fi


done
