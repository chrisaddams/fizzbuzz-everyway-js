#!/bin/bash
for x in {1..7}
do
    for i in {1..50}
    do
        cat <(echo $x) | yarn start
    done
done
node average.js