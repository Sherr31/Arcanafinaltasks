#!/bin/bash


set -e


VERSION_FILE="VERSION"


echo "Reading current version..."


CURRENT_VERSION=$(cat $VERSION_FILE)


echo "Current version: $CURRENT_VERSION"


MAJOR=$(echo $CURRENT_VERSION | cut -d. -f1)

MINOR=$(echo $CURRENT_VERSION | cut -d. -f2)

PATCH=$(echo $CURRENT_VERSION | cut -d. -f3)


PATCH=$((PATCH + 1))


NEW_VERSION="$MAJOR.$MINOR.$PATCH"


echo $NEW_VERSION > $VERSION_FILE


echo "New version: $NEW_VERSION"


git add VERSION

git commit -m "Release version $NEW_VERSION"


git tag "v$NEW_VERSION"


git push origin versiontest

git push origin "v$NEW_VERSION"


echo "Version tagging completed!"
