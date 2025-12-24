const FOOTER_LINK = `
  <a href="mailto:g.charikiopoulos@gmail.com">g.charikiopoulos@gmail.com</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://marconium.io" target="_blank">marconium.io</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  ${logoSvg({ width: 28, height: 18 })}
`;
const LOGO = "svg";
const HORIZONTAL_LINE = '<hr style="height:1px;border:none;color:#333;background-color:#aaa;" />';
const TABLE_PADDING_WITH_UP_AND_DOWN = 'style="padding:10px 20px;"';
const TABLE_PADDING = 'style="padding:0 20px;"';
const TABLE_HEADER_COLOR = 'style="color: var(--green);"';
const YELLOW_COLOR = 'style="color: var(--yellow);"';

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
        <div><strong ${YELLOW_COLOR}>client:</strong></div>
        <div>REInvest</div>
        <div>&nbsp;</div>
        <div><strong ${YELLOW_COLOR}>date:</strong></div>
        <div>December 2025</div>
        <div>&nbsp;</div>
        <div><strong ${YELLOW_COLOR}>prepared by:</strong></div>
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
      header: {
        title: "context"
      },
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
            This has led to a mix of tools, manual steps, and Excel-based processes.
            While this worked at smaller scale, it now creates friction, limited
            visibility, and a growing reliance on manual work.

            <br /><br />
            Today, this makes it hard to:
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
      header: {
        title: "objectives"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
      {
        title: "Engagement Objectives",
        text: `
          The goal is to define a clear, practical path
          for modernizing CRM and commercial systems, so that execution decisions
          are made with confidence and alignment.

          <br /><br />
          This work aims to:
          <ul>
            <li>Create a shared view of the full commercial lifecycle, from first contact to completed transaction</li>
            <li>Clarify system boundaries, ownership, and responsibilities across teams</li>
            <li>Ensure the operating model can scale as volumes, users, and complexity increase</li>
            <li>Set a clear basis for tool selection and integration planning according to validated business needs</li>
            <li>Define what a sustainable, right-sized level of CRM investment looks like as the business grows</li>
          </ul>

          The outcome is a clear, shared direction that supports confident decisions before moving into execution.
        `
      }
      ]
    },

    /* =========================
       ENGAGEMENT STRUCTURE
       ========================= */
    {
      type: "standard",
      header: {
        title: "engagement structure"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [

        {
          title: "Engagement Overview",
          text: `
            The engagement is structured in phases, allowing scope, priorities,
            and effort to be reviewed and confirmed step by step.

            <br /><br />
            The first phase focuses on clarity and alignment, so that execution
            decisions are made with confidence rather than assumption.
            <br /><br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 1 - Foundations, Direction & Roadmap",
          text: `
            <strong>Purpose</strong><br />
            Build a shared understanding of the current situation and agree on
            a clear, realistic direction for modernizing CRM and commercial systems.

            <br /><br />
            <strong>Focus Areas</strong>
            <ul>
              <li>Align on goals, constraints, and what success looks like</li>
              <li>Review current systems, data flows, and key processes</li>
              <li>Evaluate suitable tools and platforms (such as CRM and supporting systems)</li>
              <li>Frame realistic investment ranges and trade-offs</li>
              <li>Define a practical, phased path forward that balances impact, risk, and effort</li>
            </ul>
          `
        },

        {
          title: "Phase 2 - Execution, Enablement & Improvement (Preview)",
          text: `
            <strong>Purpose</strong><br />
            Put the agreed direction from Phase 1 into practice and support teams
            through change and adoption.

            <br /><br />
            <strong>Indicative Scope</strong>
            <ul>
              <li>Implement the agreed approach</li>
              <li>Configure systems and integrations</li>
              <li>Support teams through training and handover</li>
              <li>Refine and improve the setup over time</li>
            </ul>

            The exact scope and delivery approach will be defined once Phase 1
            is complete.
          `
        }

      ]
    },

    /* =========================
       DURATION & COST SUMMARY
       ========================= */
    {
      type: "standard",
      header: {
        title: "duration & cost summary"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [

        {
          title: "Phase 1 - Duration & Commercial Terms",
          text: `
            Phase 1 is proposed as a fixed-scope engagement focused on
            alignment, clarity, and de-risking future execution.

            <br /><br />
            <table>
              <tr>
                <td style="padding: 0 10px;"></td>
                <td><strong ${TABLE_HEADER_COLOR}>duration:</strong></td>
                <td style="padding: 0 20px;"></td>
                <td><strong>6-8 calendar weeks</strong></td>
              </tr>
              <tr>
                <td style="padding: 0 10px;"></td>
                <td style="padding-bottom: 20px; border-bottom: 1pt dashed #aaa;"><strong ${TABLE_HEADER_COLOR}>target date:</strong></td>
                <td style="padding: 0 20px;"></td>
                <td style="padding-bottom: 20px; border-bottom: 1pt dashed #aaa;"><strong>mid-February 2026</strong></td>
              </tr>
              <tr>
                <td style="padding: 0 10px;"></td>
                <td style="padding-top: 20px;"><strong ${TABLE_HEADER_COLOR}>cost:</strong></td>
                <td style="padding: 0 20px;"></td>
                <td style="padding-top: 20px;"><strong>€ 7,000</strong> <small>(excl. VAT)</small></td>
              </tr>
            </table>

            <br />
            <small>This covers all work needed in order to reach alignment and make the key decisions that define the path forward.</small>
            <br /><br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 2 - Commercial Options (Indicative)",
          text: `
            After Phase 1, Phase 2 can be structured based on the agreed scope
            and preferred way of working, for example:

            <br />
            <ul>
              <li><strong>a time-based engagement</strong>, or</li>
              <li><strong>a milestone-based delivery plan</strong></li>
            </ul>

            <small>Pricing and structure for Phase 2 will be defined once the solution direction,
            priorities, and level of involvement are clear.</small>
          `
        }

      ]
    },

    /* =========================
       END / NEXT STEPS
       ========================= */
    {
      type: "end",
      header: {
        title: ""
      },
      //accent: "green",
      footer: FOOTER_LINK,
      title: "thank you",
      subtitle: "",
      metaHtml: ``
    }

  ]
};
