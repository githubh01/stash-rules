# Surge rule resources

Audited routing-match snapshots for a private Surge Mac 6.4.3+ / iOS 5.17+
profile. Import the private `.conf` only; Surge downloads these resources.
This directory contains no complete client profiles, proxy servers,
credentials, subscription links, or saved selections.

- `*.list`: native Surge RULE-SET syntax, one rule per line, without a policy.
- `geo-regex.js`: pure synchronous hostname matching for GeoSite regexes;
  no network, filesystem, persistent storage, or traffic modification.
- `manifest.sha256`: checksums of all resources and this README.

Resources preserve the already-reviewed export's rule content and ordering.
The private profile uses commit-pinned raw URLs, so changing `main` cannot
silently change its routing. These are frozen snapshots, not live feeds.
First import requires Internet access to GitHub and the original Apple-AI URL.

## Provenance

GeoSite/GeoIP snapshots derive from the previously used MetaCubeX/v2fly
datasets; Apple service lists derive from blackmatrix7/ios_rule_script.
Aethersailor Custom Direct, Custom Proxy, and Steam CDN here are native Surge
conversions of the reviewed snapshots, unlike the root Stash profile's direct
upstream references. Exact business and bank lists preserve the existing
audited rules without publishing client policies or credentials.

Upstream sources and their applicable terms:
- https://github.com/MetaCubeX/meta-rules-dat
- https://github.com/v2fly/domain-list-community
- https://github.com/blackmatrix7/ios_rule_script
- https://github.com/Aethersailor/Custom_OpenClash_Rules

Apple-AI is NOT mirrored. The private profile retains exactly:
https://raw.githubusercontent.com/RocM301/Apple-Rule/refs/heads/main/Apple-AI.list

No new blanket license is asserted for third-party rule data.
Official syntax: https://manual.nssurge.com/rules/ruleset.html
Script references: https://manual.nssurge.com/scripting/overview.html
