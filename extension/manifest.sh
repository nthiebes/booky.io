#!/bin/bash

applications=""
persistent="
    \"persistent\": false,"

firefox_applications="
  \"applications\": {
    \"gecko\": {
      \"id\": \"nico.thiebes@gmail.com\"
    }
  },"
firefox_persistent=""

echo "Browser:"
read browser

if [ "$browser" == "firefox" ]
then
  applications=$firefox_applications
  persistent=$firefox_persistent
fi

manifest="{
  \"name\": \"CSS filter playground\",
  \"version\": \"1.0\",
  \"author\": \"Nico Thiebes\",
  \"description\": \"Apply CSS filters to the current website.\",
  \"permissions\": [\"activeTab\", \"storage\"],${applications}
  \"background\": {${persistent}
    \"scripts\": [\"background.js\"]
  },
  \"browser_action\": {
    \"default_title\": \"CSS filter playground\",
    \"default_popup\": \"popup.html\",
    \"default_icon\": {
      \"16\": \"images/get_started16.png\",
      \"32\": \"images/get_started32.png\",
      \"48\": \"images/get_started48.png\",
      \"128\": \"images/get_started128.png\"
    }
  },
  \"content_scripts\": [
    {
      \"matches\": [\"<all_urls>\"],
      \"js\": [\"content.js\"]
    }
  ],
  \"icons\": {
    \"16\": \"images/get_started16.png\",
    \"32\": \"images/get_started32.png\",
    \"48\": \"images/get_started48.png\",
    \"128\": \"images/get_started128.png\"
  },
  \"manifest_version\": 2
}"

echo "$manifest" > "_source/manifest.json"
