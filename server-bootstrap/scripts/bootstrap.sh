#!/bin/bash


set -e


LOG="./logs/bootstrap.log"


echo "Bootstrap started: $(date)" >> $LOG


echo "Updating system..." >> $LOG

sudo apt update >> $LOG


echo "Installing packages..." >> $LOG

sudo apt install -y git curl vim nginx >> $LOG


echo "Creating developer user..." >> $LOG

sudo useradd -m developer || true


echo "Copying configurations..." >> $LOG


cp configs/bashrc /home/developer/.bashrc

cp dotfiles/.vimrc /home/developer/.vimrc


sudo chown developer:developer /home/developer/.bashrc

sudo chown developer:developer /home/developer/.vimrc


echo "Bootstrap completed: $(date)" >> $LOG
