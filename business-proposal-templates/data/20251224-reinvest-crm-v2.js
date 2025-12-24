const FOOTER_LINK = `
  <a href="mailto:g.charikiopoulos@gmail.com">g.charikiopoulos@gmail.com</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://marconium.io" target="_blank">marconium.io</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  ${logoSvg({ width: 28, height: 18 })}
`;

const HORIZONTAL_LINE =
  '<hr style="height:1px;border:none;color:#333;background-color:#aaa;" />';

const TABLE_HEADER_COLOR = 'style="color: var(--green);"';

window.PROPOSAL_DATA = {
  pages: [

    /* =========================
       COVER
       ========================= */
    {
      type: "cover",
      title: "Business<br />Systems<br />Modernization",
      subtitle: "an end-to-end foundation for scalable growth",
      metaHtml: `
        <div><strong style="color: var(--yellow);">client:</strong></div>
        <div>REInvest</div>
        <div>&nbsp;</div>

        <div><strong style="color: var(--yellow);">date:</strong></div>
        <div>December 2025</div>
        <div>&nbsp;</div>

        <div><strong style="color: var(--yellow);">prepared by:</strong></div>
        <div>George Charikiopoulos</div>
        <div>technology architect</div>
        <div>marconium.io</div>
      `
    },

    /* =========================
       CONTEXT
       ========================= */
    {
      type: "standard",
      header: { title: "context" },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
        {
          title: "Current Operating Context",
          text: `
            REInvest operates across several business areas, including agency,
            auctions, rentals, operations, and finance. Incoming demand,
            properties, and transactions are already high and continue to grow.

            <br /><br />
            Over time, the CRM setup and related workflows have grown organically.
            This has resulted in a mix of tools, manual steps, and Excel-based
            processes. While workable at smaller scale, this setup now creates
            friction, limited visibility, and increasing reliance on manual work.

            <br /><br />
            Today, this makes it difficult to:
            <ul>
              <li>Handle incoming demand in a consistent and predictable way</li>
              <li>Match customers, properties, and agents efficiently</li>
              <li>Support different workflows for agency, auctions, and rentals</li>
              <li>Connect commercial activity with finance, reporting, and compliance</li>
            </ul>

            With continued growth in users, properties, and revenue, the current
            operating model is becoming harder to sustain and less aligned with
            REInvest’s future plans.
          `
        }
      ]
    },

    /* =========================
       OBJECTIVES
       ========================= */
    {
      type: "standard",
      header: { title: "objectives" },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
        {
          title: "Engagement Objectives",
          text: `
            The goal is to define a clear, practical path for modernizing CRM
            and commercial systems, so that execution decisions are made with
            confidence and alignment.

            <br /><br />
            This work aims to:
            <ul>
              <li>Create a shared view of the full commercial lifecycle,
              from first contact to completed transaction</li>
              <li>Clarify system boundaries, ownership, and responsibilities
              across teams</li>
              <li>Ensure the operating model can scale as volumes, users,
              and complexity increase</li>
              <li>Set a clear basis for tool selection and integration planning,
              grounded in validated business needs</li>
              <li>Define what a sustainable, right-sized level of CRM investment
              looks like as the business grows</li>
            </ul>

            The outcome is a shared direction that enables confident decisions
            before committing to execution.
          `
        }
      ]
    },

    /* =========================
       ENGAGEMENT STRUCTURE
       ========================= */
    {
      type: "standard",
      header: { title: "engagement structure" },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [

        {
          title: "Engagement Overview",
          text: `
            The engagement is structured in phases, allowing scope, priorities,
            and effort to be reviewed and confirmed step by step.

            <br /><br />
            The initial phase is focused on clarity and alignment, ensuring that
            decisions about execution are made deliberately rather than by assumption.
            <br /><br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 1 — Foundations, Direction & Roadmap",
          text: `
            <strong>Purpose</strong><br />
            Build a shared understanding of the current situation and agree on
            a clear, realistic direction for modernizing CRM and commercial systems.

            <br /><br />
            <strong>Focus Areas</strong>
            <ul>
              <li>Align on goals, constraints, and what success looks like</li>
              <li>Review current systems, data flows, and key processes</li>
              <li>Evaluate suitable tools and platforms, including CRM
              and supporting systems</li>
              <li>Frame realistic investment ranges and trade-offs</li>
              <li>Define a practical, phased path forward that balances
              impact, risk, and effort</li>
            </ul>
          `
        },

        {
          title: "Phase 2 — Execution (Indicative)",
          text: `
            Phase 2 represents a possible next step following Phase 1 and is
            intentionally outlined at a high level.

            <br /><br />
            Its scope, sequencing, and delivery approach are expected to be
            defined only once Phase 1 has established a clear and agreed direction.
          `
        }

      ]
    },

    /* =========================
       PHASE 1 DELIVERABLE
       ========================= */
    {
      type: "standard",
      header: { title: "phase 1 deliverable" },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
        {
          title: "Primary Deliverable",
          text: `
            Phase 1 will result in a consolidated decision package that clearly
            defines the future direction for CRM and commercial systems at REInvest.

            <br /><br />
            The purpose of this deliverable is to turn today’s complexity into a
            shared understanding of what should change, why it should change,
            and how those changes should be approached over time.

            <br /><br />
            The deliverable will:
            <ul>
              <li>Describe the agreed future-state operating model across
              sales, auctions, rentals, operations, and finance</li>
              <li>Clarify system roles, ownership, and boundaries</li>
              <li>Define the target system landscape, including recommended
              tools and platforms</li>
              <li>Outline key integrations and data flows required to support
              end-to-end visibility and automation</li>
              <li>Present a phased execution roadmap with priorities,
              dependencies, and sequencing</li>
              <li>Frame realistic investment ranges to support planning
              and budgeting</li>
            </ul>

            <br />
            This deliverable serves as the shared reference point for moving
            forward, ensuring any subsequent execution builds on agreed
            direction and aligned expectations.

            <br /><br />
            The exact format of the output may vary based on the needs of the
            engagement, but it is defined by the direction, decisions,
            and roadmap it produces.
          `
        }
      ]
    },

    /* =========================
       DURATION & COST
       ========================= */
    {
      type: "standard",
      header: { title: "duration & cost summary" },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [

        {
          title: "Phase 1 — Duration & Commercial Terms",
          text: `
            Phase 1 is proposed as a fixed-scope engagement focused on clarity,
            alignment, and de-risking future execution.

            <br /><br />
            <table>
              <tr>
                <td><strong ${TABLE_HEADER_COLOR}>duration:</strong></td>
                <td style="padding-left:20px;"><strong>6–8 calendar weeks</strong></td>
              </tr>
              <tr>
                <td><strong ${TABLE_HEADER_COLOR}>target:</strong></td>
                <td style="padding-left:20px;"><strong>mid-February 2026</strong></td>
              </tr>
              <tr>
                <td><strong ${TABLE_HEADER_COLOR}>cost:</strong></td>
                <td style="padding-left:20px;"><strong>€7,000</strong> <small>(excl. VAT)</small></td>
              </tr>
            </table>

            <br />
            <small>
              This covers all work required to reach alignment and make the
              key decisions that define the path forward.
            </small>

            <br /><br />
            <strong>Payment terms</strong>
            <br />
            <ul>
              <li>50% invoiced upon agreement signing</li>
              <li>50% invoiced upon delivery of the Phase 1 deliverable</li>
            </ul>

            <br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 2 — Commercial Options (Indicative)",
          text: `
            If REInvest chooses to proceed beyond Phase 1, a follow-up engagement
            can be structured based on the agreed scope and preferred way of working.

            <br /><br />
            Possible models include:
            <ul>
              <li><strong>a time-based engagement</strong></li>
              <li><strong>a milestone-based delivery plan</strong></li>
            </ul>

            <small>
              Pricing and structure would be defined only after Phase 1,
              once priorities and involvement levels are clear.
            </small>
          `
        }

      ]
    },

    /* =========================
       END
       ========================= */
    {
      type: "end",
      header: { title: "" },
      footer: FOOTER_LINK,
      title: "thank you",
      subtitle: "",
      metaHtml: ``
    }

  ]
};
