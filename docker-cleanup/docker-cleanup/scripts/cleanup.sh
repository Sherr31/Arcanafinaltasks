#!/bin/bash

LOG_FILE="./logs/cleanup.log"


echo "Docker cleanup started: $(date)" >> $LOG_FILE


echo "Removing stopped containers..." >> $LOG_FILE

docker container prune -f >> $LOG_FILE


echo "Removing unused images..." >> $LOG_FILE

docker image prune -a -f >> $LOG_FILE


echo "Removing unused volumes..." >> $LOG_FILE

docker volume prune -f >> $LOG_FILE


echo "Cleanup completed: $(date)" >> $LOG_FILE
