# Spec and build

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification
<!-- chat-id: d68540fe-3714-4aba-9653-bb286d905245 -->

Assess the task's difficulty, as underestimating it leads to poor outcomes.
- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:
- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `{@artifacts_path}/spec.md`:
- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Important: unit tests must be part of each implementation task, not separate tasks. Each task should implement the code and its tests together, if relevant.

Save to `{@artifacts_path}/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [x] Step: Initialize Repository Structure
<!-- chat-id: 08d3f35a-93ad-4aab-b816-f75dabb5d8da -->

Set up the foundational directory structure and essential files:

**Tasks:**
- Create GitHub repository structure with all necessary folders
- Add .gitignore file for web projects
- Move existing apps to examples/ folder
- Create placeholder README.md

**Verification:**
- All folders exist with correct naming
- .gitignore prevents unwanted files from being committed
- Repository structure matches spec.md

---

### [x] Step: Extract and Document Design System
<!-- chat-id: cfca77ad-384b-4aad-a7fc-7620e5c3ab9b -->

Create comprehensive design system documentation based on existing apps:

**Tasks:**
- Analyze color palettes from both existing apps
- Extract typography patterns (fonts, scales, hierarchies)
- Document component patterns (buttons, cards, inputs)
- Define animation standards
- Create design-system.md with complete specifications
- Create CSS snippet files for each design element

**Verification:**
- design-system.md is comprehensive and clear
- CSS snippets are valid and reusable
- Color palettes include both light and dark themes
- Typography system is well-defined

---

### [x] Step: Define and Document Data Schemas
<!-- chat-id: 00558bf1-bb59-48b4-af09-2c052118c80e -->

Standardize data structures for different content types:

**Tasks:**
- Define lesson-based data schema (extracted from als-vs-wenn)
- Define vocabulary/reference data schema (extracted from german-verbs)
- Document exercise type schemas (choice, fill, match, truefalse)
- Create data-schemas.md with TypeScript-style interfaces
- Provide examples for each schema

**Verification:**
- All schemas are clearly documented
- Examples are included for each schema type
- TypeScript interfaces are syntactically correct
- Schemas cover all use cases from existing apps

---

### [x] Step: Document Exercise Type Library
<!-- chat-id: 8f859f1c-e9cf-40bc-875d-56b98903b868 -->

Create comprehensive guide for all exercise types:

**Tasks:**
- Document multiple choice exercise pattern (HTML/CSS/JS)
- Document fill-in-blank exercise pattern
- Document true/false exercise pattern
- Document matching exercise pattern (design new)
- Document ordering exercise pattern (design new)
- Create exercise-types.md with complete specifications
- Extract JavaScript snippets for each exercise type

**Verification:**
- Each exercise type has HTML structure documented
- Each exercise type has CSS styling documented
- Each exercise type has JavaScript logic documented
- Code snippets are copy-paste ready
- exercise-types.md is comprehensive

---

### [x] Step: Create Lesson-Based Template
<!-- chat-id: aa1d97c1-73cd-4ca4-943e-d4a716e4c5d7 -->

Build template based on als-vs-wenn pattern:

**Tasks:**
- Create template.html with cleaned structure
- Remove specific content, leave placeholder examples
- Add comprehensive inline comments explaining each section
- Include example lesson data structure
- Include example exercises for each type
- Document customization points
- Ensure template is self-contained and functional

**Verification:**
- Template opens in browser without errors
- Placeholder content demonstrates all features
- Comments are clear and helpful
- Template is responsive
- All exercise types work correctly

---

### [x] Step: Create Multi-View Template
<!-- chat-id: 8ae672ce-ed95-4fe2-a4ef-c7ace7b78837 -->

Build template based on german-verbs pattern:

**Tasks:**
- Create template.html with cleaned structure
- Remove specific content, leave placeholder examples
- Add comprehensive inline comments explaining each section
- Include example data structure for browse view
- Include flashcard view with sample data
- Include quiz view with sample data
- Document customization points
- Ensure template is self-contained and functional

**Verification:**
- Template opens in browser without errors
- All three views (browse, flashcard, quiz) work
- Tab switching functions correctly
- Placeholder content demonstrates all features
- Comments are clear and helpful
- Template is responsive

---

### [x] Step: Create Framework Documentation
<!-- chat-id: bfb4769a-2c03-4235-881d-febdda049935 -->

Write comprehensive documentation for using the framework:

**Tasks:**
- Create framework-overview.md explaining architecture and decisions
- Create getting-started.md with step-by-step guide to creating new app
- Include decision trees for choosing template type
- Document naming conventions
- Document best practices
- Add troubleshooting section
- Create examples of common customizations

**Verification:**
- Documentation is clear and beginner-friendly
- Getting started guide can be followed step-by-step
- All templates are referenced
- Code examples are included
- Common pitfalls are addressed

---

### [x] Step: Create Main README and Polish
<!-- chat-id: decf62fd-61ea-4a20-8640-67ff43caad66 -->

Finalize repository with welcoming README and final polish:

**Tasks:**
- Create comprehensive README.md for repository root
- Include project overview and goals
- Add links to all documentation
- Include screenshots of example apps
- Add "Quick Start" section
- Document folder structure
- Add contribution guidelines (if applicable)
- Review all documentation for consistency
- Add any missing cross-references

**Verification:**
- README renders properly on GitHub
- All links work correctly
- Documentation is consistent across all files
- Project is welcoming to newcomers
- No broken references or missing files

---

### [x] Step: Validation and Testing
<!-- chat-id: 8b554e70-e6c3-4fde-b354-24c1381fb072 -->

Test framework by creating a new sample app:

**Tasks:**
- Choose a new B1-level topic (e.g., Modalverben, Adjektivdeklination)
- Follow getting-started.md to create new app
- Time the process (should be < 2 hours for basic version)
- Document any issues or unclear instructions
- Update templates/documentation based on findings
- Create simple app and add to examples/
- Verify all example apps work when repository is cloned fresh

**Verification:**
- New sample app functions correctly
- Process took reasonable time
- Documentation was sufficient
- Any issues found were fixed
- All example apps work
- Repository is ready for use

---

### [x] Step: Final Report
<!-- chat-id: 71a11149-e769-441a-879e-45a2c745235b -->

Document completion:

**Tasks:**
- Write completion report to `{@artifacts_path}/report.md`
- Describe what was implemented
- Explain how framework was tested
- Document biggest challenges encountered
- Provide recommendations for future enhancements

**Verification:**
- Report is comprehensive
- All deliverables are documented
- Challenges and solutions are noted
