# Stash rule resources

Domain/IP rule sets for a personal Stash configuration. This repository contains
only public routing-match data and its checksums; it contains no proxy servers,
passwords, UUIDs, subscription links, selections, or complete client configuration.

## Format

Each YAML file contains a `payload` list. Configure the matching Stash provider
as `domain`, `ipcidr`, or `classical` according to the filename group below.
Use a GitHub raw URL and a Stash-managed cache path. See the
[official Stash documentation](https://stash.wiki/rules/rule-set).

| Files | Behavior |
|---|---|
| USBankDomains, AppleMail, SpeedtestServers, AppStore_Control, AppStore_Download | domain |
| ServiceIP_* | ipcidr |
| CompatDomain_gfw, CompatDomain_google-cn, CompatDomain_category-games_cn | domain |
| CompatDomain_category-games_cn__mixed | classical |

Use `no-resolve` on service-IP RULE-SET references where required by the client
configuration. The mixed CN-games file contains three domain regular expressions.

## Provenance and maintenance

These are frozen copies of previously audited routing resources, not a claim
that service IP ranges or domain coverage are current forever. USBankDomains and
SpeedtestServers retain the user's existing domain lists without pruning.
AppleMail and AppStore_Control derive from the corresponding resources in
[blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script).
Compatibility domain/IP snapshots were extracted from previously used GeoSite /
GeoIP data, associated with the [MetaCubeX datasets](https://github.com/MetaCubeX/meta-rules-dat)
and the [v2fly domain collection](https://github.com/v2fly/domain-list-community).
Upstream source attribution and terms remain applicable; no new blanket license
is asserted for third-party data.

Apple-AI and Aethersailor are intentionally not mirrored here. The private main
configuration continues to refer to their original upstream resources.

`manifest.sha256` records exact uploaded file content. Prefer a commit-pinned raw
URL when reproducibility is required; changing the file on the default branch
does not alter an already pinned client resource.
