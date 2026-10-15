# Graph Report - roxware  (2026-10-14)

## Corpus Check
- 8 files · ~247,056 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 179 nodes · 199 edges · 11 communities (6 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `initStoryScene()` - 15 edges
2. `Roxware Consultancy — Website` - 11 edges
3. `initHeroScene()` - 10 edges
4. `Project: Roxware Consultancy Landing Page & Web App` - 9 edges
5. `design_tokens` - 8 edges
6. `global_scroll_config` - 7 edges
7. `scripts` - 4 edges
8. `Architecture Overview` - 4 edges
9. `create3DReactAtom()` - 3 edges
10. `createCrystalGemGeometry()` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (11 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (25): 1. Project Overview, 2. Purpose, 3. Tech Stack, 4. Installation & Development Setup, 5. Folder Structure, 6. Architecture & Design Tokens Overview, 7. Roadmap & Milestones, 8. Current Status (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (69): allNavLinks, bentoCards, btnSendPlannerIdea, contactForm, contactObserver, contactSec, contactSection, dots (+61 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (22): create3DCodeTagMesh(), create3DCpuMesh(), create3DDatabaseMesh(), create3DDesktopMonitorMesh(), create3DGpuMesh(), create3DLaptopMesh(), create3DReactAtom(), create3DServerBladeMesh() (+14 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (11): author, description, keywords, license, main, name, scripts, dev (+3 more)

### Community 10 - "Community 10"
Cohesion: 0.1
Nodes (19): design_tokens, content_fade_multiplier, content_shift_px, hero_final_scale, hero_initial_scale, hero_max_translateY, overlay_gradient_dark, overlay_gradient_light (+11 more)

## Knowledge Gaps
- **114 isolated node(s):** `themeToggleBtn`, `mobileThemeToggleBtn`, `themeStorage`, `initialTheme`, `header` (+109 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `themeToggleBtn`, `mobileThemeToggleBtn`, `themeStorage` to the rest of the system?**
  _114 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Community 10` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._