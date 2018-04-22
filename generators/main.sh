#!/usr/bin/env bash

CAMELCASE=$(echo "$1"| gsed -r 's/(^|_)([a-z])/\U\2/g')
SCREAMINGSNAKE=$(echo $1 | tr 'a-z' 'A-Z')

./generate_reducer.sh $CAMELCASE $SCREAMINGSNAKE
./generate_service.sh $CAMELCASE
./generate_saga.sh $CAMELCASE
