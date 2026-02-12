import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import "./DocsPage.css";
import "./RoadmapDocs.css";

interface RoadmapItem {
  label: string;
  done: boolean;
}

interface RoadmapSection {
  title: string;
  items: RoadmapItem[];
}

const phase1: RoadmapItem[] = [
  { label: "Project setup and structure", done: true },
  { label: "Design tokens system", done: true },
  { label: "Core components (Button, ColorSwatch)", done: true },
  { label: "Documentation and examples", done: true },
  { label: "Theme system (dark/light/system)", done: true },
  { label: "Accessibility foundation (WCAG contrast, ARIA, keyboard nav)", done: true },
];

const phase2: RoadmapSection[] = [
  {
    title: "Typography",
    items: [
      { label: "Heading (h1-h6 with consistent styling)", done: true },
      { label: "Text (body copy with size/weight variants)", done: true },
      { label: "Link (styled anchor with hover/focus states)", done: true },
    ],
  },
  {
    title: "Layout",
    items: [
      { label: "Container (max-width wrapper)", done: false },
      { label: "Divider (section separator)", done: false },
      { label: "Grid (responsive layout helper)", done: false },
    ],
  },
  {
    title: "Content Display",
    items: [
      { label: "Card (project showcase, flexible slots)", done: false },
      { label: "Badge (skills, tech stack tags)", done: false },
      { label: "Avatar (profile image with fallback)", done: false },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "Navbar (site header with logo + links)", done: false },
      { label: "Footer (site footer with social links)", done: false },
    ],
  },
  {
    title: "Forms (Contact)",
    items: [
      { label: "Input (text input with label, validation)", done: false },
      { label: "Textarea (multi-line input)", done: false },
      { label: "FormField (label + input + error wrapper)", done: false },
    ],
  },
];

const phase3: RoadmapItem[] = [
  { label: "Modal (project detail popups)", done: false },
  { label: "Toast (form submission feedback)", done: false },
  { label: "Skeleton (loading states)", done: false },
  { label: "Tooltip (hover hints)", done: false },
];

const phase4: RoadmapItem[] = [
  { label: "Animation utilities", done: false },
  { label: "Storybook integration", done: false },
  { label: "Component playground/docs site", done: false },
  { label: "Bundle optimization", done: false },
];

const RoadmapItemRow: React.FC<{ item: RoadmapItem }> = ({ item }) => (
  <li className={`roadmap-item ${item.done ? "roadmap-item--done" : ""}`}>
    <span className="roadmap-item__checkbox">
      {item.done ? "✓" : "○"}
    </span>
    <span className="roadmap-item__label">{item.label}</span>
  </li>
);

export const RoadmapDocs: React.FC = () => {
  const completedPhase1 = phase1.filter((i) => i.done).length;
  const totalPhase1 = phase1.length;
  
  const phase2Items = phase2.flatMap((s) => s.items);
  const completedPhase2 = phase2Items.filter((i) => i.done).length;
  const totalPhase2 = phase2Items.length;

  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Roadmap</Heading>
      <p className="docs-page__description">
        Track the progress of Killua UI development. This roadmap prioritizes shipping 
        a functional portfolio site, then expanding the component library based on real-world needs.
      </p>

      {/* Phase 1 */}
      <section className="roadmap-phase roadmap-phase--complete">
        <div className="roadmap-phase__header">
          <Heading level={2} size="lg">Phase 1: Foundation</Heading>
          <span className="roadmap-phase__badge roadmap-phase__badge--complete">
            Complete ({completedPhase1}/{totalPhase1})
          </span>
        </div>
        <ul className="roadmap-list">
          {phase1.map((item) => (
            <RoadmapItemRow key={item.label} item={item} />
          ))}
        </ul>
      </section>

      {/* Phase 2 */}
      <section className="roadmap-phase roadmap-phase--current">
        <div className="roadmap-phase__header">
          <Heading level={2} size="lg">Phase 2: Portfolio Site MVP</Heading>
          <span className="roadmap-phase__badge roadmap-phase__badge--current">
            In Progress ({completedPhase2}/{totalPhase2})
          </span>
        </div>
        <Text color="secondary" style={{ marginBottom: "var(--spacing-md)" }}>
          Building the components needed for a personal portfolio site.
        </Text>
        
        {phase2.map((section) => (
          <div key={section.title} className="roadmap-subsection">
            <Heading level={3} size="md">{section.title}</Heading>
            <ul className="roadmap-list">
              {section.items.map((item) => (
                <RoadmapItemRow key={item.label} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Phase 3 */}
      <section className="roadmap-phase">
        <div className="roadmap-phase__header">
          <Heading level={2} size="lg">Phase 3: Enhanced Interactions</Heading>
          <span className="roadmap-phase__badge">Planned</span>
        </div>
        <ul className="roadmap-list">
          {phase3.map((item) => (
            <RoadmapItemRow key={item.label} item={item} />
          ))}
        </ul>
      </section>

      {/* Phase 4 */}
      <section className="roadmap-phase">
        <div className="roadmap-phase__header">
          <Heading level={2} size="lg">Phase 4: Polish &amp; DX</Heading>
          <span className="roadmap-phase__badge">Planned</span>
        </div>
        <ul className="roadmap-list">
          {phase4.map((item) => (
            <RoadmapItemRow key={item.label} item={item} />
          ))}
        </ul>
      </section>

      {/* Future */}
      <section className="roadmap-phase">
        <div className="roadmap-phase__header">
          <Heading level={2} size="lg">Future Considerations</Heading>
        </div>
        <ul className="roadmap-list">
          <li className="roadmap-item">
            <span className="roadmap-item__checkbox">○</span>
            <span className="roadmap-item__label">Additional input types (select, checkbox, radio)</span>
          </li>
          <li className="roadmap-item">
            <span className="roadmap-item__checkbox">○</span>
            <span className="roadmap-item__label">Advanced form validation</span>
          </li>
          <li className="roadmap-item">
            <span className="roadmap-item__checkbox">○</span>
            <span className="roadmap-item__label">React Native / other framework ports</span>
          </li>
        </ul>
      </section>
    </article>
  );
};
