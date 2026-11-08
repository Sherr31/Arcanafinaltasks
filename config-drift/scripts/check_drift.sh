#!/bin/bash

GOLDEN="./golden/nginx.conf"

CURRENT="./server/nginx.conf"

LOG="./logs/drift.log"


echo "Checking configuration..."


if diff $GOLDEN $CURRENT > /dev/null
then

echo "No drift detected"

echo "$(date): No drift" >> $LOG


else

echo "Configuration drift detected"

echo "$(date): Drift detected" >> $LOG

diff $GOLDEN $CURRENT >> $LOG

fi
