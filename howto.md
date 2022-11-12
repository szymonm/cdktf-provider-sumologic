# Publish to java manually

## Prepare code
```
npx projen upgrade
npx projen build
```

## Version setup

Set proper version using either:
bump -- `npx projen bump`
or manually in `package.json`

## Compile for realease
Compile with the proper version
```
npx projen compile
npx projen package:java
```

## Verify
Go to `dist/java` and make sure the version, code and POMs look sane.
After you publish to artifactory, it cannot be undone.

## Publish
Publish to artifactory

Set credentials
```
export MAVEN_USERNAME=...
export MAVEN_PASSWORD=...
export MAVEN_ENDPOINT="https://oss.sonatype.org"
export MAVEN_STAGING_PROFILE_ID=...
export MAVEN_GPG_PRIVATE_KEY=...
export MAVEN_GPG_PRIVATE_KEY_PASSPHRASE=...
```

Publish
```
npx -p publib publib-maven
```

## Have 🍺