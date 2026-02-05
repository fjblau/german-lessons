# German Learning Apps Framework

A comprehensive framework for creating consistent, interactive German language learning applications for B1-level study (ÖSD B1 test preparation).

Built with simplicity in mind: **no build tools, no frameworks, just HTML/CSS/JavaScript** — create a fully functional learning app in under 2 hours!

---

## 🎯 What Is This?

This framework helps you quickly create professional German learning apps based on the **Hueber 5+6 Workbook and Coursebook** methodology. It provides:

- **Ready-to-use templates** for different learning objectives
- **Comprehensive design system** with tested color palettes and typography
- **Reusable exercise types** (multiple choice, fill-in-blank, flashcards, etc.)
- **Clear documentation** with step-by-step guides
- **No dependencies** — each app is a single HTML file that works offline

Perfect for creating focused study tools for grammar topics, vocabulary lists, verb conjugations, and more!

---

## ✨ Key Features

- **📱 Single-File Architecture** — Each app is one HTML file; no build process, no server required
- **🎨 Two Professional Themes** — Light/elegant for grammar, dark/modern for vocabulary
- **🎓 Pedagogically Sound** — Follows proven Hueber textbook methodology
- **⚡ Fast Development** — Create a new app in 1-2 hours using templates
- **🌐 Works Offline** — Perfect for study sessions anywhere
- **♿ Accessible** — Keyboard navigation, semantic HTML, WCAG color contrast
- **🇩🇪 Immersive** — German UI with English explanations when pedagogically helpful

---

## 🚀 Quick Start

### 1. Choose Your Template

**Creating a grammar topic app?** (als vs. wenn, Modalverben, Konjunktiv II)
→ Use the **[Lesson-Based Template](./templates/lesson-based/)**

**Creating a vocabulary or verb reference?** (verb conjugations, word lists)
→ Use the **[Multi-View Template](./templates/multi-view/)**

### 2. Copy and Customize

```bash
# Copy the template
cp templates/lesson-based/template.html my-new-app.html

# Open in your text editor
# Follow the inline comments marked "CUSTOMIZATION POINT"
```

### 3. Add Your Content

Replace the placeholder content with your lessons, exercises, and vocabulary. All data is defined at the top of the `<script>` section.

### 4. Open in Browser

```bash
# Simply open the file
open my-new-app.html
```

That's it! Your app is ready to use.

### 📖 Full Tutorial

For a complete step-by-step guide, see **[Getting Started Guide](./docs/getting-started.md)**

---

## 📁 Repository Structure

```
german-learning-apps/
├── README.md                      # You are here!
├── .gitignore                     # Standard web project ignores
│
├── docs/                          # 📚 Complete framework documentation
│   ├── framework-overview.md      # Architecture and design decisions
│   ├── getting-started.md         # Step-by-step creation guide
│   ├── design-system.md           # Colors, typography, components
│   ├── data-schemas.md            # Data structure standards
│   └── exercise-types.md          # All exercise types with examples
│
├── templates/                     # 🎨 Starter templates
│   ├── lesson-based/
│   │   └── template.html          # For grammar topics and sequential lessons
│   ├── multi-view/
│   │   └── template.html          # For vocabulary and reference apps
│   └── hybrid/                    # Future: combined approach
│
├── components/                    # 🧩 Reusable code snippets
│   ├── css-snippets/              # CSS modules (colors, typography, buttons, etc.)
│   └── js-snippets/               # JavaScript modules (exercise handlers, utilities)
│
├── examples/                      # 💡 Example apps (coming soon)
│   └── [Example apps will be added here]
│
└── assets/                        # 🎨 Shared resources
    └── fonts/                     # Font recommendations
```

---

## 📚 Documentation

### Essential Reading

1. **[Framework Overview](./docs/framework-overview.md)** — Architecture, design philosophy, and best practices
2. **[Getting Started Guide](./docs/getting-started.md)** — Create your first app in under 2 hours
3. **[Design System](./docs/design-system.md)** — Colors, typography, and component patterns

### Reference Documentation

4. **[Data Schemas](./docs/data-schemas.md)** — Standard data structures with TypeScript-style interfaces
5. **[Exercise Types](./docs/exercise-types.md)** — Complete library of 5 exercise types (choice, fill, true/false, match, order)

---

## 🎨 Template Types

### Lesson-Based Template
**Best for:** Grammar topics, contrasts, rules, patterns

**Features:**
- Sequential lesson progression
- Rich content sections (rules, examples, tips, comparison tables)
- Multiple exercise types per lesson
- Progress tracking with visual dots
- Final assessment with scoring

**Visual Theme:** Light/Elegant (cream/parchment palette)

**Example Use Cases:**
- als vs. wenn
- Modalverben (müssen, sollen, dürfen, etc.)
- Konjunktiv II
- Adjektivdeklination
- Präpositionen mit Akkusativ/Dativ

→ **[View Template](./templates/lesson-based/template.html)**

---

### Multi-View Template
**Best for:** Vocabulary, verb forms, reference lists

**Features:**
- Three-tab interface (Browse, Flashcards, Quiz)
- Sortable/filterable reference table
- Interactive flashcards with animations
- Active recall quizzing with streak tracking
- CEFR level filtering (A1-C2)

**Visual Theme:** Dark/Modern (charcoal with neon accents)

**Example Use Cases:**
- German verb conjugations
- Trennbare/Untrennbare Verben
- Nomen-Verb-Verbindungen
- Thematic vocabulary lists

→ **[View Template](./templates/multi-view/template.html)**

---

## 🎯 Exercise Types

This framework includes **5 fully documented exercise types** that match Hueber textbook patterns:

| Exercise Type | German Instruction | Use Case |
|--------------|-------------------|----------|
| **Multiple Choice** | "Kreuzen Sie an" | Select correct answer from 2-4 options |
| **Fill-in-the-Blank** | "Ergänzen Sie" | Type the missing word/phrase |
| **True/False** | "Richtig oder falsch?" | Binary choice with explanation |
| **Matching** | "Ordnen Sie zu" | Connect related items |
| **Ordering** | "Bringen Sie in die richtige Reihenfolge" | Arrange items in correct sequence |

Each type includes:
- HTML structure template
- CSS styling patterns
- JavaScript interaction logic
- Data schema with examples
- Accessibility support

→ **[Full Exercise Type Library](./docs/exercise-types.md)**

---

## 🛠️ Technical Details

- **Architecture:** Pure client-side web application (HTML/CSS/JavaScript)
- **Dependencies:** Google Fonts only (no npm packages, no frameworks)
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
- **Deployment:** Static file hosting (GitHub Pages, Netlify, Vercel, or local files)
- **Character Encoding:** UTF-8 with proper handling of German characters (ä, ö, ü, ß)
- **Accessibility:** Keyboard navigation, semantic HTML, WCAG AA color contrast

---

## 🎓 Pedagogical Approach

Apps follow the **Hueber textbook methodology**:

### For Grammar Topics (Lesson-Based)
1. **Introduction** — Present core concept simply
2. **Rules & Patterns** — Explicit grammar rules in digestible chunks
3. **Examples** — Bilingual demonstration sentences
4. **Signal Words** — Teach recognition patterns
5. **Guided Practice** — Exercises with immediate feedback
6. **Edge Cases** — Address exceptions and nuances
7. **Final Assessment** — Mixed test of all concepts

### For Vocabulary Topics (Multi-View)
1. **Browse/Reference** — Complete list for orientation
2. **Flashcards** — Spaced repetition-ready format
3. **Quiz** — Active recall testing with score tracking
4. **Level Filtering** — Focus on appropriate CEFR level

### Feedback Philosophy
- ✅ **Immediate** — No "submit quiz" delay
- 📝 **Explanatory** — Not just "correct/incorrect"
- 💪 **Encouraging** — Positive reinforcement
- 🌐 **Bilingual** — German for authenticity, English for clarity

---

## 🤝 Contributing

### Creating Your First App

1. Follow the **[Getting Started Guide](./docs/getting-started.md)**
2. Choose the appropriate template
3. Customize with your content
4. Test in multiple browsers
5. Share with fellow learners!

### Best Practices

- Keep lessons focused (one concept per lesson)
- Provide 5-7 exercises per lesson
- Mix exercise types for variety
- Always include explanatory feedback
- Use memory aids and metaphors
- Test with German language learners

### Common Pitfalls to Avoid

❌ **Smart quotes in JavaScript** (", ", „, ") — Use HTML entities or straight quotes  
❌ **Hardcoded answers** — Handle variations (normalize, trim, lowercase)  
❌ **Missing UTF-8 declaration** — Always include `<meta charset="UTF-8">`  
❌ **Too many topics in one app** — Keep it focused!

→ **[Full Best Practices Guide](./docs/framework-overview.md#best-practices)**

---

## 📖 Example Apps

Example apps demonstrating framework usage will be added to the `examples/` folder.

Each example app showcases:
- Different exercise types
- Content organization patterns
- Theme customization
- Pedagogical approaches

**Coming soon:**
- Example lesson-based app (grammar topic)
- Example multi-view app (vocabulary list)

---

## 🗺️ Roadmap

### Current Status
✅ Framework documentation complete  
✅ Lesson-Based template complete  
✅ Multi-View template complete  
✅ Design system documented  
✅ Exercise type library complete  
✅ Reusable CSS/JS snippets created

### Planned Enhancements
- [ ] Hybrid template (combining both approaches)
- [ ] More example apps showcasing different topics
- [ ] Additional exercise types (sentence building, transformation)
- [ ] Print-friendly styling for offline worksheets
- [ ] Audio pronunciation support
- [ ] Spaced repetition algorithm documentation

---

## ❓ FAQ

### Do I need Node.js or npm?
**No!** This framework uses zero dependencies. Just a text editor and a web browser.

### Can I use these apps on mobile?
**Yes!** All templates are fully responsive and work on phones, tablets, and desktops.

### Do the apps work offline?
**Yes!** Each app is a single HTML file that works without an internet connection (except for Google Fonts, which will fall back to system fonts).

### Can I customize the colors?
**Absolutely!** Each template includes CSS custom properties (CSS variables) that you can easily modify. See the inline comments marked "CUSTOMIZATION POINT".

### How do I deploy my app?
Simply upload the HTML file to any static hosting service (GitHub Pages, Netlify, Vercel) or share it directly as a file.

### What if I want to add a feature not in the framework?
The templates are designed to be extended. All JavaScript is vanilla JS with clear comments. Feel free to modify and expand!

### How long does it take to create an app?
With the templates, you can create a basic functional app in **1-2 hours**. More complex apps with extensive content may take 3-4 hours.

---

## 📄 License

For educational use.

---

## 🙏 Acknowledgments

Based on the **Hueber 5+6 Workbook and Coursebook** methodology for B1-level German learning.

Built for learners preparing for the **ÖSD B1 test**.

---

## 📞 Support

For questions or issues:
1. Check the **[Getting Started Guide](./docs/getting-started.md)**
2. Review the **[Troubleshooting Section](./docs/getting-started.md#troubleshooting)**
3. Consult the **[Framework Overview](./docs/framework-overview.md)**

---

**Ready to create your first German learning app? Start with the [Getting Started Guide](./docs/getting-started.md)! 🚀**
