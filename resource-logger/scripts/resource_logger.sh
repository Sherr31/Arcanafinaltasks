#!/bin/bash

LOG="./logs/resource.csv"

if [ ! -f $LOG ]
then
    echo "Date,CPU,Memory,Disk" > $LOG
fi


DATE=$(date)

CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}')

MEM=$(free | grep Mem | awk '{print ($3/$2)*100}')

DISK=$(df / | awk 'NR==2 {print $5}')


echo "$DATE,$CPU,$MEM,$DISK" >> $LOG
