#!/usr/bin/env bash

STARTING_DIR=$(pwd)

for PKG in $(find ./service -name package.json | grep -v node_modules); do
   cd $(dirname $PKG)
   echo "Entered $(pwd) for install"
   npm install || exit 1
   cd "${STARTING_DIR}"
done
