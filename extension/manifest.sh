#!/bin/bash

browser="$1"

applications=""
persistent="
    \"persistent\": false,"

firefox_applications="
  \"applications\": {
    \"gecko\": {
      \"id\": \"hello@booky.io\"
    }
  },"
firefox_persistent=""

if [ "$browser" == "firefox" ]
then
  applications=$firefox_applications
  persistent=$firefox_persistent
fi

manifest="{
  \"name\": \"booky.io Extension\",
  \"version\": \"2.0\",
  \"author\": \"Nico Thiebes\",
  \"description\": \"Add new links to booky.io and browse your existing bookmarks.\",
  \"permissions\": [\"activeTab\", \"storage\"],${applications}
  \"background\": {${persistent}
    \"scripts\": [\"background.js\"]
  },
  \"browser_action\": {
    \"default_title\": \"booky.io Extension\",
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

if [ "$browser" == "firefox" ]
then
  echo "$manifest" > "_public/firefox/manifest.json"
fi

if [ "$browser" == "chrome" ]
then
  echo "$manifest" > "_public/chrome/manifest.json"
  echo "$manifest" > "_source/manifest.json"
fi
