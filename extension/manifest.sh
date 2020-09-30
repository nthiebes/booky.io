#!/bin/bash

browser="$1"
version="$2"

if [ "$browser" == "chrome" ]
then
  cp -r _source/ _public/chrome/tmp
fi

if [ "$browser" == "firefox" ]
then
  cp -r _source/ _public/firefox/tmp
fi


applications=""

firefox_applications="
  \"applications\": {
    \"gecko\": {
      \"id\": \"hello@booky.io\"
    }
  },"

if [ "$browser" == "firefox" ]
then
  applications=$firefox_applications
fi

manifest="{
  \"name\": \"booky.io Extension\",
  \"version\": \"${version}\",
  \"author\": \"Nico Thiebes\",
  \"description\": \"Add new links to booky.io and browse your existing bookmarks.\",
  \"permissions\": [\"activeTab\", \"storage\"],${applications}
  \"externally_connectable\": {
    \"matches\": [
      \"https://booky.io/*\",
      \"https://beta.booky.io/*\"
    ]
  },
  \"browser_action\": {
    \"default_title\": \"booky.io Extension\",
    \"default_popup\": \"popup.html\",
    \"default_icon\": {
      \"16\": \"images/icon-16x16.png\",
      \"32\": \"images/icon-32x32.png\",
      \"48\": \"images/icon-48x48.png\",
      \"128\": \"images/icon-128x128.png\"
    }
  },
  \"content_scripts\": [
    {
      \"matches\": [\"<all_urls>\"],
      \"js\": [\"content.js\"]
    }
  ],
  \"icons\": {
    \"16\": \"images/icon-16x16.png\",
    \"32\": \"images/icon-32x32.png\",
    \"48\": \"images/icon-48x48.png\",
    \"128\": \"images/icon-128x128.png\"
  },
  \"manifest_version\": 2
}"

if [ "$browser" == "chrome" ]
then
  echo "$manifest" > "_public/chrome/tmp/manifest.json"
  echo "$manifest" > "_source/manifest.json"
  cd _public/chrome/tmp
  zip -r ../chrome_$version.zip ./*
  rm -r ../tmp
fi

if [ "$browser" == "firefox" ]
then
  echo "$manifest" > "_public/firefox/tmp/manifest.json"
  echo "$manifest" > "_source/manifest.json"
  cd _public/firefox/tmp
  zip -r ../firefox_$version.zip ./*
  rm -r ../tmp
fi
