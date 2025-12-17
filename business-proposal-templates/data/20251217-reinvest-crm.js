const FOOTER_LINK = '<a href="https://marconium.io" target="_blank">marconium.io</a>';
const LOGO = "svg";
const HORIZONTAL_LINE = '<hr style="height:1px;border:none;color:#333;background-color:#aaa;" />';
const TABLE_PADDING_WITH_UP_AND_DOWN = 'style="padding:10px 20px;"';
const TABLE_PADDING = 'style="padding:0 20px;"';
const TABLE_HEADER_COLOR = 'style=color:var(--green);';
const YELLOW_COLOR = 'style="color: var(--yellow);"';

window.PROPOSAL_DATA = {
  pages: [

    /* =========================
       COVER
       ========================= */
    {
      type: "cover",
      title: "CRM & Commercial Systems<br />Modernization",
      subtitle: "an end-to-end foundation for scalable growth",
      metaHtml: `
        <div><strong ${YELLOW_COLOR}>Client:</strong> REInvest</div>
        <div>&nbsp;</div>
        <div><strong ${YELLOW_COLOR}>Date:</strong> December 2025</div>
        <div>&nbsp;</div>
        <div><strong ${YELLOW_COLOR}>Prepared by:</strong></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;George Charikiopoulos</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;Technology Architect</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;marconium.io</div>
      `
    },

    /* =========================
       CONTEXT
       ========================= */
    {
      type: "standard",
      header: {
        title: "Context"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
        {
          title: "Current Operating Context",
          text: `
            REInvest operates across multiple business lines (agency, auctions,
            rentals, operations, and finance) with a high and rapidly growing
            volume of incoming demand, properties, and transactions.

            <br /><br />
            Over time, CRM and supporting workflows have evolved organically,
            combining multiple tools, manual processes, and Excel-based workarounds.
            While functional at lower volumes, this setup increasingly creates
            operational friction, limited visibility, and a growing dependency
            on manual intervention.

            <br /><br />
            As a result, the current operating model makes it difficult to:
            <br />– Normalize and route incoming demand in a consistent way
            <br />– Match customers, properties, and agents at scale
            <br />– Support distinct workflows across agency, auctions, and rentals
            <br />– Connect commercial activity with finance, reporting, and compliance

            <br /><br />
            With projected growth across users, properties, and revenue,
            the existing model is increasingly misaligned with REInvest’s
            future scale and strategic ambitions.
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
        title: "Objectives"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [
        {
          title: "Engagement Objectives",
          text: `
            The objective of this engagement is not to immediately replace
            systems or implement new tools, but to establish a clear,
            durable operating model for CRM and commercial systems.

            <br /><br />
            The engagement aims to:
            <br />– Establish a unified view of the commercial lifecycle,
            from demand intake to transaction completion
            <br />– Define clear system boundaries, roles, and responsibilities
            across teams and workflows
            <br />– Enable scalable matching, routing, and prioritization
            of customers, properties, and agents
            <br />– Provide a solid basis for tool selection, integration strategy,
            and investment planning
            <br />– Reduce operational risk and manual dependency as volumes increase

            <br /><br />
            The intended outcome is a shared, actionable direction that enables
            confident decision-making before committing to execution.
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
        title: "Engagement Structure"
      },
      accent: "green",
      footer: FOOTER_LINK,
      sections: [

        {
          title: "Engagement Overview",
          text: `
            The engagement is structured as a phased collaboration,
            allowing scope, priorities, and effort to be validated incrementally.

            <br /><br />
            The initial phase focuses on alignment, clarity, and decision-making,
            establishing a solid foundation before any execution commitments
            are made.
            <br /><br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 1 - Foundations, Direction & Roadmap",
          text: `
            <strong>Purpose</strong><br />
            Create a shared understanding of the current landscape and agree
            on a clear, realistic direction for CRM and commercial systems
            modernization.

            <br /><br />
            <strong>Focus Areas</strong>
            <br />– Alignment on goals, constraints, and success criteria
            <br />– Understanding of current systems, data flows, and processes
            <br />– Definition of a future direction for architecture and operating model
            <br />– Evaluation of suitable tools and platforms (e.g. CRM and supporting systems)
            <br />– Budget framing and indicative investment ranges
            <br />– Definition of a pragmatic, phased path forward
          `
        },

        {
          title: "Phase 2 - Execution, Enablement & Improvement (Preview)",
          text: `
            <strong>Purpose</strong><br />
            Implement the agreed direction from Phase 1 and support teams
            through change, adoption, and operational stabilization.

            <br /><br />
            <strong>Indicative Scope</strong>
            <br />– Implementation of the agreed solution approach
            <br />– System configuration and integrations
            <br />– Enablement, training, and knowledge transfer
            <br />– Ongoing refinement and continuous improvement

            <br /><br />
            The exact scope, sequencing, and delivery model for this phase
            will be defined following completion of Phase 1.
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
        title: "Duration & Cost Summary"
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
                <td ${TABLE_PADDING}><strong ${TABLE_HEADER_COLOR}>Duration:</strong></td>
                <td ${TABLE_PADDING}></td>
                <td ${TABLE_PADDING}><strong>~8 calendar weeks</strong></td>
              </tr>
              <tr>
                <td ${TABLE_PADDING}><strong ${TABLE_HEADER_COLOR}>Target:</strong></td>
                <td ${TABLE_PADDING}></td>
                <td ${TABLE_PADDING}><strong>mid-February 2026</strong></td>
              </tr>
              <tr>
                <td ${TABLE_PADDING_WITH_UP_AND_DOWN}>------</td>
                <td ${TABLE_PADDING_WITH_UP_AND_DOWN}></td>
                <td ${TABLE_PADDING_WITH_UP_AND_DOWN}>---------------</td>
              </tr>
              <tr>
                <td ${TABLE_PADDING}><strong ${TABLE_HEADER_COLOR}>Cost:</strong></td>
                <td ${TABLE_PADDING}></td>
                <td ${TABLE_PADDING}><strong>€ 5,000</strong> <small>(excl. VAT)</small></td>
              </tr>
            </table>

            <br />
            This covers the full Phase 1 collaboration, regardless of the
            form in which outcomes are expressed (workshops, discussions,
            diagrams, notes, or lightweight documentation).
            <br /><br />${HORIZONTAL_LINE}
          `
        },

        {
          title: "Phase 2 - Commercial Options (Indicative)",
          text: `
            Following Phase 1, Phase 2 can be structured based on the
            agreed scope and preferred way of working, for example:

            <br /><br />
            – <strong>a time-based engagement</strong>, or
            <br />– <strong>a milestone-based delivery plan</strong>

            <br /><br />
            Pricing and structure for Phase 2 will be defined once the
            solution direction, priorities, and level of involvement
            are clear.
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
      title: "Thank you",
      subtitle: "<br /><br /><br />Happy to walk through this proposal and align on next steps.",
      metaHtml: `
        <br /><br /><br /><br /><br />
        ${logoSvg({ width: 136, height: 136 })}
        <div><strong>Email:</strong> <a href="mailto:g.charikiopoulos@gmail.com">g.charikiopoulos@gmail.com</a></div>
        <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/george-charikiopoulos" target="_blank">/george-charikiopoulos</a></div>
        <div><strong>Web:</strong> <a href="https://marconium.io" target="_blank">marconium.io</a></div>
      `
    }

  ]
};
