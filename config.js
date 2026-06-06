const CONFIG = {
  name: "Ankit Singh",
  title: "Senior Software Engineer in Test",
  tagline: "8+ years building automation frameworks and quality systems for cloud-native products at scale.",
  location: "Belfast, UK",
  visa: "",
  availability: "Open to Senior SDET / QE roles · Hybrid or Remote · UK Based",

  bio: [
    "Senior automation engineer with 8+ years building test systems for cloud-native security platforms. Currently at <strong>Sysdig</strong>, leading quality engineering across <strong>5 cloud providers</strong> — and actively building <strong>LLM-powered test generation</strong> and <strong>AI-driven CI/CD failure analysis</strong> tools that are changing how the team ships.",
    "Before that, 6 years at <strong>Lacework</strong> delivering compliance automation for CIS, SOC 2, HIPAA, NIST, and PCI DSS — owning <strong>90% of the shared Kubernetes testing libraries</strong> used across the entire QA team.",
    "I don't treat quality as a gate at the end of a pipeline. I embed it into the deployment lifecycle itself — working directly with DevOps and platform teams so engineers ship with confidence, not crossed fingers."
  ],

  quote: "Quality is not an act, it is a habit — and I've spent 8 years making it the default, not the exception.",

  stats: [
    { value: "8+",  label: "Years Building Test Systems",  color: "#7c3aed" },
    { value: "5",   label: "Cloud Platforms Automated",    color: "#0891b2" },
    { value: "6",   label: "Security Frameworks Automated",color: "#059669" },
    { value: "45%", label: "Less Manual Test Writing",     color: "#ea580c" }
  ],

  aiCard: {
    label: "Current Focus",
    heading: "AI-Augmented Quality Engineering",
    body: "Building the next generation of test tooling — LLM-powered test generation, intelligent CI/CD failure analysis, and prompt engineering workflows that turn traditional QA into a force multiplier for engineering teams."
  },

  experience: [
    {
      company: "Sysdig",
      role: "Senior Software Engineer in Test",
      location: "Belfast, UK (Remote)",
      start: "Nov 2023",
      end: "Present",
      summary: "Leading automation strategy for a cloud-native container security platform serving enterprise customers across 5 cloud providers.",
      highlights: [
        "Reduced manual test case authoring by <strong>45%</strong> and increased edge-case coverage across microservices, by architecting a Generative AI-powered test generation framework using prompt engineering.",
        "Improved developer turnaround time by <strong>30%</strong> on CI/CD failures, by engineering custom LLM-based tooling that automatically categorises failure root causes and surfaces instant remediation suggestions.",
        "Eliminated manual regression gaps across container vulnerability scanning, agentless security, and compliance workloads, by building end-to-end Python/Playwright/Pytest frameworks integrated into CI/CD pipelines and executed on every build.",
        "Validated product reliability across <strong>5 cloud platforms</strong> (AWS, Azure, GCP, IBM Cloud, Oracle Cloud), by architecting fully reproducible multi-cloud test environments provisioned with Terraform and configured with Ansible.",
        "Enabled release-anytime deployment confidence with minimal risk, by embedding automated quality gates into deployment lifecycles in collaboration with DevOps, Security, and Platform teams."
      ]
    },
    {
      company: "Lacework, Inc",
      role: "SDET Engineer",
      location: "Belfast, UK",
      start: "Nov 2017",
      end: "Oct 2023",
      summary: "Owned end-to-end test automation for a cloud security and compliance platform, covering 6 regulatory frameworks across 3 major cloud providers.",
      highlights: [
        "Automated compliance validation across <strong>6 regulatory frameworks</strong> (CIS, SOC 2, HIPAA, NIST, PCI DSS, ISO) on AWS, Azure, and GCP, by designing distributed automation modules that integrate directly with each cloud provider's API.",
        "Achieved realistic security test coverage across Linux hosts and Kubernetes clusters (ECS, Fargate, EKS), by building data-driven automation that generates representative workload traffic for threat detection validation.",
        "Reduced post-deployment regression risk to near zero, by creating Selenium/Pytest UI test suites integrated into post-merge pipelines that execute Sanity, Smoke, and Regression suites automatically on every cloud deployment.",
        "Accelerated team-wide test development velocity, by leading the design and delivery of <strong>90% of shared Kubernetes testing libraries</strong> covering Docker deployments, database validation, and UI verification.",
        "Raised team capability and reduced onboarding time, by mentoring junior QA engineers on automation architecture, test design, and implementation through hands-on code reviews and pairing sessions."
      ]
    },
    {
      company: "Neova Solutions",
      role: "SDET",
      location: "Pune, India",
      start: "Nov 2016",
      end: "Nov 2017",
      summary: "Built the first automated test framework for an IoT product line, establishing quality practices from the ground up.",
      highlights: [
        "Established automated test coverage for a Java/Swing IoT application (Shooting Detectors) from zero, by building an AssertJ-based framework covering functional and regression scenarios.",
        "Achieved full pipeline test coverage with no manual handoff, by developing shell scripts for end-to-end system testing integrated directly with the AssertJ framework.",
        "Maintained weekly release cadence without quality regressions, by triaging defects in Jira, validating developer fixes, and keeping test suites aligned with evolving requirements under Agile sprints."
      ]
    }
  ],

  skillGroups: [
    {
      label: "AI & Emerging",
      color: "#7c3aed",
      skills: ["Generative AI", "Prompt Engineering", "LLM Tooling"]
    },
    {
      label: "Languages",
      color: "#2563eb",
      skills: ["Python", "Java", "TypeScript", "Shell"]
    },
    {
      label: "Test Frameworks",
      color: "#059669",
      skills: ["Playwright", "Pytest", "Selenium", "Cucumber", "TestNG", "Appium"]
    },
    {
      label: "Cloud & Infra",
      color: "#ea580c",
      skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Ansible"]
    },
    {
      label: "CI/CD",
      color: "#db2777",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Harness"]
    },
    {
      label: "APIs & Observability",
      color: "#0891b2",
      skills: ["REST", "GraphQL", "Postman", "Grafana", "Prometheus"]
    }
  ],

  certifications: [
    { name: "Claude 101", issuer: "Anthropic", year: "2026", icon: "🎓", link: "https://verify.skilljar.com/c/2j9ffdh9om7d" },
    { name: "Claude Code in Action", issuer: "Anthropic", year: "2026", icon: "🎓", link: "https://verify.skilljar.com/c/tf8bh5uzvk2n" },
  ],

  education: [
    { degree: "Bachelor of Engineering (BE)", institution: "LNCT, Indore · Rajiv Gandhi Technical University", year: "2015" },
    { degree: "Diploma in Advanced Computing (PG-DAC)", institution: "CDAC (C-DAC), Pune", year: "2016" },
  ],

  recognition: [
    { award: "Customer's Choice Award",      org: "Lacework",  year: "2020", icon: "🏆" },
    { award: "Commitment & Dedication Award", org: "Lacework",  year: "2019", icon: "⭐" },
    { award: "Spot Award",                    org: "Lacework",  year: "2018", icon: "🎯", note: "Delivered automation project ahead of schedule" },
  ],

  sectionTitles: {
    about:        "Building quality into the<br>core, not bolted on at the end.",
    experience:   "8 years. 3 companies.<br>One consistent standard.",
    projects:     "Things I've built.",
    projectsSub:  "Live from GitHub — always up to date.",
    certs:        "Credentials & ongoing learning.",
    recognition:  "A few highlights from the journey.",
    education:    "Foundations behind the craft.",
    contact:      "Let's talk.",
    contactSub:   "Whether you have a role in mind, want to collaborate, or just want to talk engineering — I'm always open to a conversation.",
  },

  email: "ankitsingh7392@gmail.com",
  github: "https://github.com/ankitsingh7392",
  linkedin: "https://www.linkedin.com/in/ankit-singh-37a11ba5/",
  calendly: "https://cal.com/ankit-singh-jw3lep/30min",

  pinnedRepos: ["project-ark", "skill-labs", "ai-toolkit"],
};
