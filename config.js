const CONFIG = {
  name: "Ankit Singh",
  title: "Senior Software Engineer in Test",
  tagline: "8+ years building automation frameworks and quality systems for cloud-native products at scale.",
  location: "Belfast, UK",
  visa: "UK Skilled Worker Visa",
  availability: "Open to Senior SDET / QE roles · Remote or Belfast · UK Skilled Worker Visa",

  bio: [
    "I architect test frameworks that simulate real-world customer workflows and validate the reliability of distributed systems — across REST and GraphQL microservices, container security, and multi-cloud infrastructure.",
    "Currently at <strong>Sysdig</strong>, I lead automation across AWS, Azure, GCP, IBM Cloud, and Oracle Cloud, provisioning environments with Terraform and Ansible. Previously at <strong>Lacework</strong>, I delivered compliance automation covering CIS, SOC 2, HIPAA, NIST, and PCI DSS, and built UI regression suites at scale with Selenium and Pytest.",
    "I care about quality as a culture — embedding gates into deployment lifecycles, mentoring engineers, and collaborating with DevOps and platform teams to make <em>release-anytime</em> a reality rather than an aspiration."
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
      skills: ["Generative AI", "Prompt Engineering", "LLM Tooling"]
    },
    {
      label: "Languages",
      skills: ["Python", "Java", "TypeScript", "Shell"]
    },
    {
      label: "Test Frameworks",
      skills: ["Playwright", "Pytest", "Selenium", "Cucumber", "TestNG", "Appium"]
    },
    {
      label: "Cloud & Infra",
      skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Ansible"]
    },
    {
      label: "CI/CD",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Harness"]
    },
    {
      label: "APIs & Observability",
      skills: ["REST", "GraphQL", "Postman", "Grafana", "Prometheus"]
    }
  ],

  recognition: [
    { award: "Customer's Choice Award",      org: "Lacework",  year: "2020", icon: "🏆" },
    { award: "Commitment & Dedication Award", org: "Lacework",  year: "2019", icon: "⭐" },
    { award: "Spot Award",                    org: "Lacework",  year: "2018", icon: "🎯", note: "Delivered automation project ahead of schedule" }
  ],

  github: "https://github.com/ankitsingh7392",
  linkedin: "https://www.linkedin.com/in/ankit-singh-37a11ba5/",
  calendly: "https://calendly.com/ankitsingh7392/30min",

  pinnedRepos: ["project-ark"],
};
