SmaF1 Portfolio — Release 01 / Search-first redesign

Archive files are relative to the root of the existing Portfolio repository.

1. Create new branch: git switch -c feat/search-first-portfolio
2. Extract archive with PowerShell: Expand-Archive -LiteralPath $zip -DestinationPath $repo -Force
3. Remove outdated lockfiles: Remove-Item .\package-lock.json, .\yarn.lock -Force
4. Install dependencies: npm install
5. Run tests: npm run check; npm run lint; npm run build
6. Run locally: npm run dev
7. Commit all changes (including regenerated package-lock.json)

Additional information is in README.md within the archive.
