#!/bin/bash
find . -type d -name "node_modules" -exec rm -rf '{}' +
find . -type d -name "dist" -exec rm -rf '{}' +
# find . -type d -regex ".*\(/node_modules\|/dist\)" -exec rm -rf '{}' +