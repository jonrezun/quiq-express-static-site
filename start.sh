#!/usr/bin/env bash

cd /var/www/front
rm -rf /var/www/front/cache/*
npm install
npm run dev