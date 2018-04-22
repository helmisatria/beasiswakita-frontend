#!/usr/bin/env bash

touch ../src/services/$1.js

cat <<EOF >> ../src/services/$1.js
/**
 * $1 services API
 */

export const $1 = (api) => {
  const get = {
  };

  const post = {
  };

  const put = {
  };

  const patch = {
  };

  const _delete = {
  };

  return {
    get,
    post,
    put,
    patch,
    delete: _delete
  };
};

// src/services/$1.js
EOF

gsed -i "/import { create } from 'apisauce';/ {
n
a\import { $1 } from './$1';
}" ../src/services/index.js

gsed -i "/return {/a\ \t\t$1: $1(api)," ../src/services/index.js
