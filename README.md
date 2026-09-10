# Project Vyasa

**Vyasa** is a specialized language and open-source ecosystem designed to enrich classical, historical, and ancient texts with deep semantic information. 

Rather than focusing on traditional visual typesetting and layout (paragraphs, pages, fonts), Vyasa treats documents as **Narrative Graphs**. It captures *semantics*—modeling entities, actions, relationships, and sequential context—allowing readers, researchers, and applications to interact with texts in intelligent and structured ways.

---

## 🌟 Core Concepts

### 1. Narrative Graphs
In a Vyasa document, text is modeled as a connected graph:
- **Nodes** represent Entities (actors, people, places, concepts) or Content segments (verses, prose, chapters).
- **Edges** represent Actions and Relationships (speaking, thinking, referencing, commenting, containing).

### 2. Entities & Stable Identity (URNs)
Entities are actors or objects within the narrative (e.g., people, deities, groups, or abstract concepts). Vyasa assigns stable **URNs (Unique Resource Names)** to entities so that different names, epithets, or aliases in the text resolve to the exact same semantic identity (e.g., `"Partha"` and `"Dhananjaya"` both resolve to `urn:entity:arjuna`).

### 3. Actions & Dynamic Binding
Relationships between entities and content blocks are modeled as explicit actions rather than static labels:
- **Speaking (`uvacha`)**: Vocalizing content.
- **Thinking**: Internalizing content.
- **Narrating**: Describing events or scenes.

### 4. Flow State (Sequential Context)
Because narratives unfold sequentially across time and structure, Vyasa models context via **Flow State**:
- **Persistence**: Once an actor becomes the active subject, they remain the subject until explicitly replaced.
- **Action Continuity**: An ongoing action (like speaking a multi-verse discourse) persists across verse and file boundaries automatically.
- **Implicit Attribution**: Unlabeled content inherits attributes from the current active Flow State.

### 5. Segment Addressing & Non-Destructive Overlays
Vyasa provides infinite-granularity addressing—from the macro work level down to specific verses, lines, and atomic words. 

This enables **Overlay Graphs**: authors and scholars can create independent layers of commentary, translation, linguistic analysis, or cross-references that point precisely to segments in the source text *without modifying or cluttering the original source files*.

---

## 🏗️ The Vyasa Ecosystem

Project Vyasa is modularly structured across several specialized repositories:

| Repository / Component | Description | Links |
| :--- | :--- | :--- |
| **`project-vyasa.github.io`** | **Project Portal & Organization Landing Page** (this repository). Provides an overview of the ecosystem and entry points to applications and documentation. | [Web Portal](https://project-vyasa.github.io/) • [GitHub Repo](https://github.com/project-vyasa/project-vyasa.github.io) |
| **`vyasa`** | **Reference Implementation & Compiler**. The core Rust compiler (`vyasac`) and WASM runtime responsible for parsing `.vy` files and generating semantic graphs. | [GitHub Repo](https://github.com/project-vyasa/vyasa) |
| **`vyasa-docs`** | **Documentation & Language Reference**. Comprehensive guides, language syntax reference, conceptual models, and authoring tutorials. | [Read Docs](https://project-vyasa.github.io/vyasa-docs/) • [GitHub Repo](https://github.com/project-vyasa/vyasa-docs) |
| **`vyasa-apps`** | **Vyasa Viewer & Applications**. Interactive web applications including **Vyasa Viewer** (for reading and navigating semantic publications and narrative graphs) and **Sanskrit Studio** (for exploring Sanskrit grammar and Indic transliteration). | [Launch Viewer](https://project-vyasa.github.io/vyasa-apps/) • [Sanskrit Studio](https://project-vyasa.github.io/vyasa-apps/apps/sanskrit-studio/) • [GitHub Repo](https://github.com/project-vyasa/vyasa-apps) |
| **`vyasa-ui`** | **UI Design System**. Reusable Svelte component library and design system tokens used across Vyasa web applications. | [View Demos](https://project-vyasa.github.io/vyasa-ui/) • [GitHub Repo](https://github.com/project-vyasa/vyasa-ui) |
| **`vyasa-samples`** | **Sample Workspaces & Reference Texts**. Example repositories, templates, and classical reference texts modeled in Vyasa. | [GitHub Repo](https://github.com/project-vyasa/vyasa-samples) |
| **`vyutils`** | **Vyasa Utilities**. Helper scripts, automation tools, and utilities for managing the Project Vyasa ecosystem. | [View Utils](https://project-vyasa.github.io/vyutils/) • [GitHub Repo](https://github.com/project-vyasa/vyutils) |

---

## 🔗 Quick Links & Resources

- **🌐 Project Landing Page**: [project-vyasa.github.io](https://project-vyasa.github.io/)
- **📖 Documentation**: [project-vyasa.github.io/vyasa-docs](https://project-vyasa.github.io/vyasa-docs/)
- **💻 Interactive Viewer App**: [project-vyasa.github.io/vyasa-apps](https://project-vyasa.github.io/vyasa-apps/)
- **🕉️ Sanskrit Studio**: [project-vyasa.github.io/vyasa-apps/apps/sanskrit-studio/](https://project-vyasa.github.io/vyasa-apps/apps/sanskrit-studio/)
- **🛠️ Vyasa Utilities**: [project-vyasa.github.io/vyutils](https://project-vyasa.github.io/vyutils/)
- **🐙 GitHub Organization**: [github.com/project-vyasa](https://github.com/project-vyasa)

