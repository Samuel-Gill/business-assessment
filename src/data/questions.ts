import type { AssessmentQuestion, AssessmentMode } from '../types/assessment';
export const questions: AssessmentQuestion[] = [
  {
    "id": "operations-01",
    "category": "operations",
    "text": "Are core business processes documented and consistently followed?",
    "description": "Consider the steps your team uses to deliver its main products or services.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for documented processes?",
      "high": "Which tools, routines, or evidence support your documented processes?"
    },
    "recommendationIds": [
      "rec-operations-01"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "operations-02",
    "category": "operations",
    "text": "Are operational performance indicators regularly monitored?",
    "description": "A KPI is a measurable indicator such as on-time delivery, error rate, or cycle time.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for operational kpis?",
      "high": "Which tools, routines, or evidence support your operational kpis?"
    },
    "recommendationIds": [
      "rec-operations-02"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "operations-03",
    "category": "operations",
    "text": "Are tasks assigned to clearly defined owners?",
    "description": "Look for a named person accountable for completion, rather than shared assumptions.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for task ownership?",
      "high": "Which tools, routines, or evidence support your task ownership?"
    },
    "recommendationIds": [
      "rec-operations-03"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "operations-04",
    "category": "operations",
    "text": "Does the organization regularly identify and eliminate inefficient processes?",
    "description": "Think about unnecessary approvals, duplicate entry, bottlenecks, and avoidable waiting.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for process improvement?",
      "high": "Which tools, routines, or evidence support your process improvement?"
    },
    "recommendationIds": [
      "rec-operations-04"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "operations-05",
    "category": "operations",
    "text": "Are customer complaints tracked and resolved systematically?",
    "description": "Consider logging, response ownership, resolution deadlines, and recurring causes.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for complaint resolution?",
      "high": "Which tools, routines, or evidence support your complaint resolution?"
    },
    "recommendationIds": [
      "rec-operations-05"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "operations-06",
    "category": "operations",
    "text": "Are service delivery or production timelines consistently met?",
    "description": "Compare agreed commitments with actual completion dates.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for reliable delivery?",
      "high": "Which tools, routines, or evidence support your reliable delivery?"
    },
    "recommendationIds": [
      "rec-operations-06"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "operations-07",
    "category": "operations",
    "text": "Are quality assurance procedures established and followed?",
    "description": "Include service checks, production inspections, or peer reviews appropriate to your work.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for quality assurance?",
      "high": "Which tools, routines, or evidence support your quality assurance?"
    },
    "recommendationIds": [
      "rec-operations-07"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "operations-08",
    "category": "operations",
    "text": "Are operational risks identified and reviewed?",
    "description": "Include supplier interruptions, key-person dependencies, and capacity constraints.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for operational resilience?",
      "high": "Which tools, routines, or evidence support your operational resilience?"
    },
    "recommendationIds": [
      "rec-operations-08"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "operations-09",
    "category": "operations",
    "text": "Are vendors and suppliers evaluated for performance?",
    "description": "Review reliability, quality, service levels, and dependency on a single supplier.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for supplier performance?",
      "high": "Which tools, routines, or evidence support your supplier performance?"
    },
    "recommendationIds": [
      "rec-operations-09"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "operations-10",
    "category": "operations",
    "text": "Does management use operational data to improve decision-making?",
    "description": "Consider whether changes are based on measured problems and whether results are checked.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for data-driven operations?",
      "high": "Which tools, routines, or evidence support your data-driven operations?"
    },
    "recommendationIds": [
      "rec-operations-10"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "finance-01",
    "category": "finance",
    "text": "Does the organization maintain an annual financial budget?",
    "description": "Consider a written plan for income, expenses, and operating needs.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for annual budgeting?",
      "high": "How frequently is the budget reviewed, and who owns the review?"
    },
    "recommendationIds": [
      "rec-finance-01"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "finance-02",
    "category": "finance",
    "text": "Are actual financial results regularly compared against the budget?",
    "description": "Review differences, causes, and corrective actions rather than just the totals.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for budget variance reviews?",
      "high": "Which tools, routines, or evidence support your budget variance reviews?"
    },
    "recommendationIds": [
      "rec-finance-02"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "finance-03",
    "category": "finance",
    "text": "Does management monitor cash flow and liquidity?",
    "description": "Cash flow means the timing of money coming in and going out, which differs from profit.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What are the main challenges preventing regular cash flow monitoring?",
      "high": "What tools or processes are used, and how often is cash flow reviewed?"
    },
    "recommendationIds": [
      "rec-finance-03"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "finance-04",
    "category": "finance",
    "text": "Are revenue and profitability trends regularly analyzed?",
    "description": "Compare periods and identify what changes in sales, costs, and margins mean.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for profitability trends?",
      "high": "Which tools, routines, or evidence support your profitability trends?"
    },
    "recommendationIds": [
      "rec-finance-04"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "finance-05",
    "category": "finance",
    "text": "Does the organization maintain financial forecasts?",
    "description": "Consider a forward view with realistic assumptions and downside scenarios.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for financial forecasting?",
      "high": "Which tools, routines, or evidence support your financial forecasting?"
    },
    "recommendationIds": [
      "rec-finance-05"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "finance-06",
    "category": "finance",
    "text": "Are operating expenses systematically reviewed?",
    "description": "Consider recurring contracts, discretionary spending, and approval ownership.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for expense discipline?",
      "high": "Which tools, routines, or evidence support your expense discipline?"
    },
    "recommendationIds": [
      "rec-finance-06"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "finance-07",
    "category": "finance",
    "text": "Does management understand the profitability of major products or services?",
    "description": "Include direct costs and a consistent method for shared operating costs.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for product and service margins?",
      "high": "Which tools, routines, or evidence support your product and service margins?"
    },
    "recommendationIds": [
      "rec-finance-07"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "finance-08",
    "category": "finance",
    "text": "Are financial risks identified and managed?",
    "description": "Think about customer concentration, financing exposure, funding continuity, and cost volatility.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for financial risk management?",
      "high": "Which tools, routines, or evidence support your financial risk management?"
    },
    "recommendationIds": [
      "rec-finance-08"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "finance-09",
    "category": "finance",
    "text": "Are financial performance reports available to decision-makers?",
    "description": "Reports should be timely, understandable, and relevant to decisions.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for decision-ready financial reports?",
      "high": "Which financial metrics are tracked, and how often are reports shared?"
    },
    "recommendationIds": [
      "rec-finance-09"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "finance-10",
    "category": "finance",
    "text": "Does the organization have a documented process for capital investment decisions?",
    "description": "Include options, costs, assumptions, risk, and approval criteria.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for capital investment decisions?",
      "high": "Which tools, routines, or evidence support your capital investment decisions?"
    },
    "recommendationIds": [
      "rec-finance-10"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "accounting-01",
    "category": "accounting",
    "text": "Are financial transactions recorded accurately and promptly?",
    "description": "Consider entry timeliness, consistency, and correction of errors in accounting software.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for timely accounting records?",
      "high": "Which tools, routines, or evidence support your timely accounting records?"
    },
    "recommendationIds": [
      "rec-accounting-01"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "accounting-02",
    "category": "accounting",
    "text": "Are bank and accounting records reconciled regularly?",
    "description": "Reconciliation checks that recorded activity agrees and differences are explained.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for regular reconciliations?",
      "high": "Which tools, routines, or evidence support your regular reconciliations?"
    },
    "recommendationIds": [
      "rec-accounting-02"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "accounting-03",
    "category": "accounting",
    "text": "Are accounts receivable monitored for overdue payments?",
    "description": "Consider invoice aging, collection ownership, and dispute follow-up.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for receivables monitoring?",
      "high": "Which tools, routines, or evidence support your receivables monitoring?"
    },
    "recommendationIds": [
      "rec-accounting-03"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "accounting-04",
    "category": "accounting",
    "text": "Are accounts payable tracked and managed effectively?",
    "description": "Look for accurate due dates, duplicate checks, and planned payment approvals.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for payables management?",
      "high": "Which tools, routines, or evidence support your payables management?"
    },
    "recommendationIds": [
      "rec-accounting-04"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "accounting-05",
    "category": "accounting",
    "text": "Are financial approval procedures documented?",
    "description": "Include spending limits, authorization levels, and evidence of approval.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for financial approvals?",
      "high": "Which tools, routines, or evidence support your financial approvals?"
    },
    "recommendationIds": [
      "rec-accounting-05"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "accounting-06",
    "category": "accounting",
    "text": "Are financial duties appropriately separated or independently reviewed?",
    "description": "Small teams can use an owner or external reviewer when full separation is impractical.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for independent financial review?",
      "high": "Which tools, routines, or evidence support your independent financial review?"
    },
    "recommendationIds": [
      "rec-accounting-06"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "accounting-07",
    "category": "accounting",
    "text": "Are financial statements prepared consistently?",
    "description": "Consider a defined close timetable and consistent reporting methods.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for consistent financial statements?",
      "high": "Which tools, routines, or evidence support your consistent financial statements?"
    },
    "recommendationIds": [
      "rec-accounting-07"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "accounting-08",
    "category": "accounting",
    "text": "Are accounting records supported by appropriate documentation?",
    "description": "Include searchable invoices, receipts, approvals, and retention practices.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for supporting documentation?",
      "high": "Which tools, routines, or evidence support your supporting documentation?"
    },
    "recommendationIds": [
      "rec-accounting-08"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "accounting-09",
    "category": "accounting",
    "text": "Are tax filing and financial reporting responsibilities clearly assigned?",
    "description": "Assess ownership and deadline tracking; this question does not determine legal compliance.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for reporting responsibility?",
      "high": "Which tools, routines, or evidence support your reporting responsibility?"
    },
    "recommendationIds": [
      "rec-accounting-09"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "accounting-10",
    "category": "accounting",
    "text": "Are accounting errors and irregularities reviewed and resolved systematically?",
    "description": "Consider an exception log, investigation, resolution, and repeat-error prevention.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for accounting exception resolution?",
      "high": "Which tools, routines, or evidence support your accounting exception resolution?"
    },
    "recommendationIds": [
      "rec-accounting-10"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "management-01",
    "category": "management",
    "text": "Does the organization have clearly defined strategic goals?",
    "description": "Look for a small set of written priorities with measurable outcomes and timeframes.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for strategic direction?",
      "high": "Which tools, routines, or evidence support your strategic direction?"
    },
    "recommendationIds": [
      "rec-management-01"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "management-02",
    "category": "management",
    "text": "Are business objectives communicated to employees?",
    "description": "Consider whether teams understand the priorities and their contribution.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for communicated objectives?",
      "high": "Which tools, routines, or evidence support your communicated objectives?"
    },
    "recommendationIds": [
      "rec-management-02"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "management-03",
    "category": "management",
    "text": "Are department responsibilities clearly established?",
    "description": "Look for clear decision authority, handoffs, and responsibility across functions.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for organizational responsibilities?",
      "high": "Which tools, routines, or evidence support your organizational responsibilities?"
    },
    "recommendationIds": [
      "rec-management-03"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "management-04",
    "category": "management",
    "text": "Does leadership regularly review organizational performance?",
    "description": "Consider a recurring review of results, risks, decisions, and actions.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for performance governance?",
      "high": "Which tools, routines, or evidence support your performance governance?"
    },
    "recommendationIds": [
      "rec-management-04"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "management-05",
    "category": "management",
    "text": "Are important management decisions supported by relevant data?",
    "description": "Look for reliable evidence, stated assumptions, and review of results.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for evidence-informed decisions?",
      "high": "Which tools, routines, or evidence support your evidence-informed decisions?"
    },
    "recommendationIds": [
      "rec-management-05"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "management-06",
    "category": "management",
    "text": "Are managers held accountable for agreed performance objectives?",
    "description": "Consider clear targets, progress discussions, and agreed responses to missed commitments.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for management accountability?",
      "high": "Which tools, routines, or evidence support your management accountability?"
    },
    "recommendationIds": [
      "rec-management-06"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "management-07",
    "category": "management",
    "text": "Does the organization maintain a structured business improvement plan?",
    "description": "Include prioritized initiatives, resources, responsibilities, and milestone reviews.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for business improvement plan?",
      "high": "Which tools, routines, or evidence support your business improvement plan?"
    },
    "recommendationIds": [
      "rec-management-07"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "management-08",
    "category": "management",
    "text": "Are major business risks periodically reviewed?",
    "description": "Think about commercial, financial, people, operational, and technology risks together.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for enterprise risk reviews?",
      "high": "Which tools, routines, or evidence support your enterprise risk reviews?"
    },
    "recommendationIds": [
      "rec-management-08"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "management-09",
    "category": "management",
    "text": "Does management have a succession or continuity plan?",
    "description": "Include access to essential knowledge and cover for unavailable decision-makers.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for leadership continuity?",
      "high": "Which tools, routines, or evidence support your leadership continuity?"
    },
    "recommendationIds": [
      "rec-management-09"
    ],
    "impact": 5,
    "effort": 3
  },
  {
    "id": "management-10",
    "category": "management",
    "text": "Are employees and departments aligned with organizational priorities?",
    "description": "Look for consistent objectives, shared dependencies, and resolution of conflicts.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for aligned priorities?",
      "high": "Which tools, routines, or evidence support your aligned priorities?"
    },
    "recommendationIds": [
      "rec-management-10"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "hr-01",
    "category": "hr",
    "text": "Are job descriptions clearly documented?",
    "description": "Consider role purpose, main duties, reporting lines, and expectations.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for clear job descriptions?",
      "high": "Which tools, routines, or evidence support your clear job descriptions?"
    },
    "recommendationIds": [
      "rec-hr-01"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "hr-02",
    "category": "hr",
    "text": "Is there a structured recruitment and hiring process?",
    "description": "Look for consistent selection criteria, interview records, and an approval process.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for structured hiring?",
      "high": "Which tools, routines, or evidence support your structured hiring?"
    },
    "recommendationIds": [
      "rec-hr-02"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "hr-03",
    "category": "hr",
    "text": "Do new employees receive a consistent onboarding experience?",
    "description": "Include orientation, role training, system access, and early check-ins.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for employee onboarding?",
      "high": "Which tools, routines, or evidence support your employee onboarding?"
    },
    "recommendationIds": [
      "rec-hr-03"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "hr-04",
    "category": "hr",
    "text": "Are employee performance reviews conducted regularly?",
    "description": "Consider clear expectations, feedback, development goals, and follow-up.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for performance conversations?",
      "high": "Which tools, routines, or evidence support your performance conversations?"
    },
    "recommendationIds": [
      "rec-hr-04"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "hr-05",
    "category": "hr",
    "text": "Are employees provided appropriate training opportunities?",
    "description": "Include skill gaps, job-specific learning, and checks that learning is applied.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for relevant employee training?",
      "high": "Which tools, routines, or evidence support your relevant employee training?"
    },
    "recommendationIds": [
      "rec-hr-05"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "hr-06",
    "category": "hr",
    "text": "Are workplace policies documented and communicated?",
    "description": "Assess communication and access; this is not a legal compliance opinion.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for workplace policies?",
      "high": "Which tools, routines, or evidence support your workplace policies?"
    },
    "recommendationIds": [
      "rec-hr-06"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "hr-07",
    "category": "hr",
    "text": "Are employee concerns addressed through established procedures?",
    "description": "Look for accessible reporting channels, fair review, confidentiality, and follow-up.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for employee concerns?",
      "high": "Which tools, routines, or evidence support your employee concerns?"
    },
    "recommendationIds": [
      "rec-hr-07"
    ],
    "impact": 5,
    "effort": 3
  },
  {
    "id": "hr-08",
    "category": "hr",
    "text": "Does the organization monitor employee turnover and retention?",
    "description": "Consider exit themes, retention patterns, and employee engagement feedback.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for retention visibility?",
      "high": "Which tools, routines, or evidence support your retention visibility?"
    },
    "recommendationIds": [
      "rec-hr-08"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "hr-09",
    "category": "hr",
    "text": "Are staffing needs evaluated against business objectives?",
    "description": "Consider required capacity, essential skills, workload, and future demand.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for workforce planning?",
      "high": "Which tools, routines, or evidence support your workforce planning?"
    },
    "recommendationIds": [
      "rec-hr-09"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "hr-10",
    "category": "hr",
    "text": "Are compensation and employee development practices periodically reviewed?",
    "description": "Look for a consistent review process and clear criteria appropriate to the organization.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for compensation and development?",
      "high": "Which tools, routines, or evidence support your compensation and development?"
    },
    "recommendationIds": [
      "rec-hr-10"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "technology-01",
    "category": "technology",
    "text": "Does the organization use appropriate software to manage core business processes?",
    "description": "Consider task fit, staff adoption, duplicate tools, and reliable integrations.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for fit-for-purpose systems?",
      "high": "Which tools, routines, or evidence support your fit-for-purpose systems?"
    },
    "recommendationIds": [
      "rec-technology-01"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "technology-02",
    "category": "technology",
    "text": "Are repetitive administrative tasks automated where practical?",
    "description": "Consider repeated entry, approvals, scheduling, and reporting; retain human checks where needed.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for practical automation?",
      "high": "Which tools, routines, or evidence support your practical automation?"
    },
    "recommendationIds": [
      "rec-technology-02"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "technology-03",
    "category": "technology",
    "text": "Is business information organized and easily accessible to authorized employees?",
    "description": "Look for a clear shared structure, ownership, cloud sharing rules, and appropriate permissions.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for organized business information?",
      "high": "Which tools, routines, or evidence support your organized business information?"
    },
    "recommendationIds": [
      "rec-technology-03"
    ],
    "impact": 3,
    "effort": 1
  },
  {
    "id": "technology-04",
    "category": "technology",
    "text": "Are important business systems backed up regularly?",
    "description": "Include monitored backup jobs and periodic tests that data can actually be restored.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for reliable backups?",
      "high": "Which tools, routines, or evidence support your reliable backups?"
    },
    "recommendationIds": [
      "rec-technology-04"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "technology-05",
    "category": "technology",
    "text": "Are access permissions and employee accounts managed appropriately?",
    "description": "Consider least privilege, multifactor authentication, and prompt removal of departed users.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for account and access controls?",
      "high": "Which tools, routines, or evidence support your account and access controls?"
    },
    "recommendationIds": [
      "rec-technology-05"
    ],
    "impact": 5,
    "effort": 2
  },
  {
    "id": "technology-06",
    "category": "technology",
    "text": "Are cybersecurity risks reviewed and addressed?",
    "description": "Use ownership, risk reviews, staff awareness, monitoring, and an incident response process as practical prompts.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for cybersecurity risk governance?",
      "high": "Which tools, routines, or evidence support your cybersecurity risk governance?"
    },
    "recommendationIds": [
      "rec-technology-06"
    ],
    "impact": 5,
    "effort": 1
  },
  {
    "id": "technology-07",
    "category": "technology",
    "text": "Are technology systems regularly maintained and updated?",
    "description": "Consider supported software, security patches, ownership, and staff guidance.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for system maintenance?",
      "high": "Which tools, routines, or evidence support your system maintenance?"
    },
    "recommendationIds": [
      "rec-technology-07"
    ],
    "impact": 3,
    "effort": 3
  },
  {
    "id": "technology-08",
    "category": "technology",
    "text": "Does the organization use dashboards or reports to support decisions?",
    "description": "Look for trusted data sources, defined metrics, and actual use in business reviews.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for decision dashboards?",
      "high": "Which tools, routines, or evidence support your decision dashboards?"
    },
    "recommendationIds": [
      "rec-technology-08"
    ],
    "impact": 3,
    "effort": 2
  },
  {
    "id": "technology-09",
    "category": "technology",
    "text": "Are technology investments aligned with business objectives?",
    "description": "Consider business needs, integration, adoption, total costs, and a named business sponsor.",
    "answerType": "maturity",
    "weight": 1,
    "critical": false,
    "quick": false,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for aligned technology investment?",
      "high": "Which tools, routines, or evidence support your aligned technology investment?"
    },
    "recommendationIds": [
      "rec-technology-09"
    ],
    "impact": 3,
    "effort": 4
  },
  {
    "id": "technology-10",
    "category": "technology",
    "text": "Does the organization have a plan for technology disruptions and data recovery?",
    "description": "Consider recovery priorities, named responders, communication, and practiced scenarios.",
    "answerType": "maturity",
    "weight": 2,
    "critical": true,
    "quick": true,
    "applicableIndustries": [],
    "followUp": {
      "low": "What is preventing a more consistent practice for disruption and recovery planning?",
      "high": "Which tools, routines, or evidence support your disruption and recovery planning?"
    },
    "recommendationIds": [
      "rec-technology-10"
    ],
    "impact": 5,
    "effort": 3
  }
];
export const questionsForMode = (mode:AssessmentMode) => questions.filter(q=>mode==='comprehensive'||q.quick);
