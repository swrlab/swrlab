# SWR Audio Lab - Engineering Principles

_(Last updated: 2024-08-20)_

## Principles

SWR Audio Lab facilitates even better public service media offerings - with a strong focus on audio.

We aim to serve our users from our own platforms instead of third-party aggregators or apps to improve the overall user journey and reduce data transfer to third-parties.

Our goal is to create a seamless ambient media experience - meaning to be where our users are to accompany them during their day across multiple devices, applications and platforms.

We’re involved in several working groups in the ARD and EBU to improve exchange, standardization, and prominence of our content, products, and services.

For Smart Devices and Connected Cars, we developed a set of four principles to guide our work:

1. **Radio must remain easy to use.** It should start with the push of a button or a simple voice command. Audiences love radio precisely because it is so easy and because they don’t need to choose.
2. **Radio should not just be easy to find, it should be impossible to miss.** Just like the physical radio button used to be, it should exist on that first level and not disappear in the jungle of apps.
3. **Radio should be focused and personalized.** We should make smart suggestions based on prior listening but be transparent with the data we collect.
4. And lastly, **radio comes as a package.** It includes public and private stations, as well as local, national and international broadcasters. All radio stations should be found in the same place.

## Project Management & Communication

We make use of agile and user-centered design principles but apply them carefully. For us, it is more important to use something that works instead of strictly following a framework. "_Responding to change over following a plan_" from the [Agile Manifesto](http://agilemanifesto.org) is our guiding principle.

Communication is key for all projects. We don’t rely on historical structures (_“This is how things are done around here.”_) and instead support constructive feedback, trust, new ideas, and input from others (operational over organizational communication).

## Holacratic Principles

We have integrated key principles of Holacracy into our workflow, as a system of democratic team management and for organizational governance. It empowers our team members with increased autonomy and decision-making authority.

This approach includes dynamic roles rather than static job descriptions, enabling individuals to adapt and contribute based on their skills, interests, and the current needs of the organization. By adopting Holacracy, we aim to create a more agile, responsive, and innovative work environment where bureaucracy is minimized, and each member feels a true sense of ownership and engagement in the collective success of our projects.

### Holacracy Resources

- [Holacracy Constitution](https://github.com/holacracyone/Holacracy-Constitution/blob/master/Holacracy-Constitution.md)

## Work-Life Balance & Well-Being

We prioritize the well-being and work-life balance of our team members as a cornerstone of our productivity.

To this end, we offer flexible working arrangements, including options for remote work and adjustable working hours, to accommodate diverse life circumstances. Regular team-building activities are organized to promote a positive work environment and encourage a sense of community. We aim to foster a culture of respect, empathy, and holistic well-being, ensuring that each team member feels valued and supported in both their professional and personal lives.

## Inclusivity, Diversity & Neutral Terminology

We aspire for our products and services to be accessible and usable by everyone.

We only use neutral and inclusive names for our services and in our code and documentation. We advocate and educate others, whenever we come across occurrences of avoidable terms.

For our team we aspire to be as diverse as possible, while still being a small team.

### Inclusitivity & Ethics Resources

- [Inclusive Naming Initiative](https://inclusivenaming.org) has a good [word list](https://inclusivenaming.org/word-lists/) to avoid.
- Diversity in Language and Images from Berlin [DE] [berlin.de/.../diversity-und-sprache-bilder](https://www.berlin.de/sen/lads/schwerpunkte/diversity/diversity-landesprogramm/diversity-und-sprache-bilder/)
- The Fight Over Offensive Terms in Computing [nytimes.com/.../racist-computer-engineering-terms-ietf](https://www.nytimes.com/2021/04/13/technology/racist-computer-engineering-terms-ietf.html)
- Code of Ethics and Professional Conduct from W3C [w3.org/Consortium/cepc](https://www.w3.org/Consortium/cepc/)
- Color Checker for Accessibility [whocanuse.com](https://www.whocanuse.com)

## Sustainability

We pay attention to the ecological footprint our digital applications create. It is essential for us to use carbon-neutral cloud providers, cleaner regions, and use efficient shared hosting solutions like serverless to optimize our consumption.

## Transparency & Open Source

We share our tools and knowledge with others supporting our values.

Technical tools that don’t contain sensitive information should be open-sourced.

Since we benefit from open-source projects, we also aim to spend some of our time contributing to them whenever we see a problem we can help solve.

### More from Audio Lab

- About us: [lab.swr.de](https://lab.swr.de)
- Our NodeJS tools: [`@swrlab/node-utils`](https://github.com/swrlab/node-utils)
- Public repositories on GitHub: [`@swrlab/repositories`](https://github.com/orgs/swrlab/repositories?q=&type=public&language=&sort=name)
- Public packages on npm: [npmjs.com/org/swrlab](https://www.npmjs.com/org/swrlab)

## DevOps & SRE

These two principles are the foundation of our engineering efforts. As we primarily run the services we develop, we also need the skills and knowledge to operate them.

_Background_: **DevOps** is a set of practices that combines software development (_Dev_) and IT operations (_Ops_). It aims to shorten the development life cycle and provide continuous delivery with high software quality. **Site Reliability Engineering** (_SRE_) is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The main goals are to create scalable and highly reliable software systems.

_How it works for us_: We deploy quickly, often, and whenever we need. Small incremental changes have a lower risk of breaking things. We monitor our services and have a clear understanding of their performance and reliability. We aim to automate as much as possible to reduce human error and to save time.

Delivery Performance is the combined ability and agility to make changes, deploy, and recover services. To us, security and reliability are more important than pure delivery performance.

### Get Started with DevOps & SRE

- [DevOps Roadmap](https://roadmap.sh/devops) provides a good overview into tools and processes to become familiar with in the DevOps field.
- [Four steps to jumpstarting your SRE practice](https://cloud.google.com/blog/products/devops-sre/four-steps-to-jumpstarting-your-sre-practice) on the Google Cloud blog is a good starting point for SRE practices.
- [DORA](https://dora.dev) is also a frequent name in this context and stands for _DevOps Research & Assessment_. This program run by Google Cloud provides a yearly report on the state of DevOps.
  - [State of DevOps report](https://cloud.google.com/devops/state-of-devops/) from Google Cloud & DORA
- DevOps Anti-Types [web.devopstopologies.com](https://web.devopstopologies.com/#anti-types)

## GitHub Tooling

GitHub is our primary tool for version control of issues, code, and documentation.

Issues on GitHub are our home for bugs, features, and project planning. They should have a short and clear title with enough description for everyone to understand the scope and tasks involved. All issues must be added to the GitHub board, where they make their way through these steps:

- Backlog
- To Do
- Week
- Today
- In Progress Internal
- Ready
- In Progress External/ Stuck (optional)
- Done

Progress should be tracked and commented on in issues, even when already discussed in separate chat groups, to enable research and follow-ups in the future (searchability).

## Code Structure & Testing

Code should be readable, understandable, and clean. It should include inline comments for documentation about specific steps. Overall documentation should be written in separate Markdown files. We prefer English for filenames, variables, comments, and documentation to keep it universal and avoid unclear "_Denglisch_" (German + English) combinations.

Modules and artifacts used in multiple projects should be managed in a central place to avoid redundancy and to benefit from adaptability (e.g. [`@swrlab/node-utils`](https://github.com/swrlab/node-utils)).

Code should always be written and checked against linters and formatters such as _ESLint_ and _Prettier_. These should also be run automatically for PRs in CI (e.g. with `super-linter`).

Projects should include test routines to check and ensure functionality and avoid regressions (e.g. `mocha`, `jest` or `bun test`).

### Learn about Linters & Formatters

- [Biome](https://biomejs.dev/guides/getting-started/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Super Linter](https://github.com/github/super-linter)
- [Prettier](https://prettier.io)

### Learn Markdown

- [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Versioning, Automation & Deployments

- All services must have a **changelog** document written in Markdown in version control using the _SemVer_ ([Semantic Versioning](https://semver.org/spec/v2.0.0.html)) versioning structure.
- Commits should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure and **must be signed**. We prefer SSH-based signing, but GPG works as well.
- Whenever possible, tools and actions should be automated to optimize processes, save time, and reduce errors from manual interaction.
- All build processes (_CI_) are automated using GitHub Actions. Deployment processes (_CD_) are also mostly automated and handled according to _SRE_ principles.
- A developer who merges a pull request also looks after its deployment or explicitly hands it over to someone else. A task or update is done once it runs stably in production, not once a PR was merged.
- Only the `main` branch can be deployed to production ([trunk-based development](https://trunkbaseddevelopment.com)).
  - All other branches should be named `dev/*` or `feature/*` and can be deployed to dev environments.

### Learn about Changelogs

- [Keep a changelog](https://keepachangelog.com/en/1.0.0/) project
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`feat: something`)
- [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (`1.0.0`)
- Approved [SPDX License List](https://spdx.org/licenses/)
  - [European Union Public License 1.2](https://spdx.org/licenses/EUPL-1.2.html)

### Learn GitHub Actions

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)

### Learn and Set up Git Signing & Encryption

- GitHub: [Signing commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- GitHub: [Setting up GPG and Commit Signatures for GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
- [1Password for SSH & Git (incl. signing)](https://developer.1password.com/docs/ssh)
- GPG for Mac [gpgtools.org](https://gpgtools.org)

## Dependency Upgrades

Regular dependency upgrades are crucial for maintaining the health and security of technical systems at SWR Audio Lab. Keeping dependencies up-to-date ensures that our systems benefit from the latest features, performance improvements, and, most importantly, security patches.

However, these upgrades carry inherent risks, such as compatibility issues or unforeseen bugs introduced by newer versions. These can lead to system instability or conflicts with existing components. To mitigate these risks, we employ testing and validation processes, including automated tests and staged rollouts, to ensure upgrades do not disrupt service functionality or user experience. By balancing the importance of staying current with the need for cautious implementation, we maintain robust, secure, and efficient technical systems.

## Service Lifecycle

All of our projects and services must be actively maintained (dependency and platform updates as well as security and CVE fixes) or need to be reevaluated and eventually turned off.

We aim to avoid quick hacks that build technical debt in the future.

## Service Architecture

We carefully balance our services between monoliths and too fragmented microservices.

We use Infrastructure as Code (_IaC_) to track changes and enable faster restorability.

We use automation to back up mission-critical data and have tested restoring it (_DRP_).

We provide limited support (as our time allows) for our services to internal and external users. However, a person needing support is also the result of a misleading UX, unclear self-help guides, or an incomplete feature that should be assessed and evaluated afterward.

### Introduction to Infrastructure as Code

- [Roadmap for Terraform](https://roadmap.sh/terraform)
- [Terraform Language Docs](https://www.terraform.io/docs/language/index.html) (HCL)
  - [Terraform CLI](https://developer.hashicorp.com/terraform/cli/commands) for local usage
  - [Terraform HCP](https://developer.hashicorp.com/terraform/cloud-docs) as a Cloud managed service

## Cloud-Native & Portability

Cloud-native developments often bring along vendor lock-in to certain features and services. We pay close attention to those effects and use open-source tools wherever possible and applicable. However, being a small team, managed services often reduce the operational overhead for us and allow us to iterate faster.

We encourage and use multi-cloud or multi-region deployments and storage solutions, to avoid issues with single vendors or physical cloud locations.

Our main tool to containerize and virtualize services is Docker. We use those containers to deploy them on a wide range of computing options that boost portability between cloud providers and platforms.

We test and support new networking and technology developments such as _TLS 1.3_, _IPv6_, _HTTP/3_ and _QUIC_ to improve the security and delivery of our services.

## Security & Privacy

Secrets are encrypted using a _GPG_ workflow and stored in version control.

Service Accounts and _IAM_ permissions should be managed using _IaC_. They should apply the principle of least-possible roles, scopes, and privileges.

All web services, platforms, and tools we use must be protected by _MFA_. We prefer using _SSO_ through our organization with its linked _MFA_ protection, if possible. For all other cases, we prefer physical keys (_FIDO_) over basic _OTP_.

We aim to store as little data as possible, meaning that we only store what’s needed to monitor, analyze and improve our services. We always actively engage with our internal data protection officers about changes and our overall services.

### Sharing Secrets

- _Preferred_: GPG-encrypted secrets using the receiver's public key.
- _Alternative_: Signed sharing links from a password manager.
- _Fallback_: Share a secret one time using [onetimesecret.com](https://onetimesecret.com)

### Learning IAM

- AWS: [IAM Introduction](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- GCP: [Using IAM securely](https://cloud.google.com/iam/docs/using-iam-securely)

## Monitoring & Alerting

Internal dashboards and monitoring support the observability and discoverability of our services, data flows, systems, and partners.

Automated monitors and alerts help detect issues and support our manual observations. We aim to discover problems ourselves before our colleagues, partners, or especially users do.

We schedule our on-call calendar around our small teams' availability. Personal life and commitments always have priority.

Alerting has predefined warn and error levels as well as escalation policies. Most of which are managed by _IaC_.

Everyone on-call should only acknowledge incidents that they have the ability and capacity to investigate and resolve. Otherwise, incidents should be escalated to a fellow team member. Large-scale problems must proactively be communicated to other internal and external stakeholders to keep them in the loop.

## Names & Definitions

- **ARD** - Arbeitsgemeinschaft der öffentlich-rechtlichen Rundfunkanstalten der Bundesrepublik Deutschland [ard.de](https://www.ard.de)
- **AWS** - Amazon Web Services [aws.amazon.com](https://aws.amazon.com)
- **CD** - Continuous Delivery [atlassian.com/continuous-delivery](https://www.atlassian.com/continuous-delivery/principles/pipeline)
- **CDN** - Content Delivery Network [cloudflare.com/.../what-is-a-cdn](https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/)
- **CI** - Continuous Integration [atlassian.com/.../continuous-integration](https://www.atlassian.com/continuous-delivery/continuous-integration)
- **DevEx, DX** - Developer Experience [getclockwise.com/blog/what-is-developer-experience](https://www.getclockwise.com/blog/what-is-developer-experience)
- **DevOps** - Development and Operations [azure.microsoft.com/.../what-is-devops](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-devops/)
- **Docker** - Containerized deployment platform [aws.amazon.com/docker](https://aws.amazon.com/docker/) or [ibm.com/cloud/learn/docker](https://www.ibm.com/cloud/learn/docker)
- **DNS** - Domain Name System [cloudflare.com/.../what-is-dns](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)
- **DRP** - Disaster Recovery Plan [ibm.com/.../disaster-recovery-plan](https://www.ibm.com/uk-en/services/business-continuity/disaster-recovery-plan) or [kyndryl.com/.../disaster-recovery-plan](https://www.kyndryl.com/us/en/learn/disaster-recovery-plan)
- **EBU** - European Broadcasting Union [ebu.ch](https://www.ebu.ch)
- **ESLint** - JavaScript Linter [eslint.org](https://eslint.org)
- **FaaS** - Function as a service (e.g. GCP Cloud Functions, AWS Lambda) [redhat.com/.../what-is-faas](https://www.redhat.com/en/topics/cloud-native-apps/what-is-faas)
- **FIDO** - Fast IDentity Online [yubico.com/.../fido-2](https://www.yubico.com/resources/glossary/fido-2/)
- **GCP** - Google Cloud Platform [cloud.google.com](https://cloud.google.com)
- **GPG** - GNU Privacy Guard [gnupg.org](https://gnupg.org)
- **HTTP/3** - Hypertext Transfer Protocol v3 [cloudflare.com/.../what-is-http3](https://www.cloudflare.com/en-gb/learning/performance/what-is-http3/)
- **IaC** - Infrastructure as Code [developer.hashicorp.com/.../infrastructure-as-code](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code)
- **IDP** - Internal Developer Platform [platformengineering.org/blog/what-is-platform-engineering](https://platformengineering.org/blog/what-is-platform-engineering)
- **IPv4/6** - internet Protocol Version 4/6 [juniper.net/.../what-is-ipv4-vs-ipv6.html](https://www.juniper.net/us/en/research-topics/what-is-ipv4-vs-ipv6.html)
- **KPI** - Key Performance Indicators [qlik.com/us/kpi](https://www.qlik.com/us/kpi)
- **Kubernetes, K8s** - Scaleable container orchestration [cloud.google.com/learn/what-is-kubernetes](https://cloud.google.com/learn/what-is-kubernetes)
- **Linter** - [sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it)
- **MFA** - Multi Factor Authentication [yubico.com/.../what-is-multi-factor-authentication](https://www.yubico.com/resources/what-is-multi-factor-authentication/)
- **MTTR** - Mean time to repair [atlassian.com/incident-management/kpis/common-metrics](https://www.atlassian.com/incident-management/kpis/common-metrics)
- **On-Call** - [response.pagerduty.com/oncall](https://response.pagerduty.com/oncall/being_oncall/)
- **OTP** - One-Time Password [cm.com/glossary/what-is-one-time-password](https://www.cm.com/glossary/what-is-one-time-password/)
- **PaaS** - Platform as a service (e.g. GCP App Engine)
- **PR** - Pull Request [docs.github.com/en/pull-requests](https://docs.github.com/en/pull-requests/)
- **Prettier** - Code Formatter [prettier.io](https://prettier.io)
- **QUIC** - Quick UDP internet Connections [akamai.com/.../http3-and-quic-past-present-and-future](https://www.akamai.com/blog/performance/http3-and-quic-past-present-and-future)
- **SCM** - Source Code Management (e.g. in GitHub, Gitlab, etc.)
- **Serverless** - [cloudflare.com/.../what-is-serverless](https://www.cloudflare.com/en-gb/learning/serverless/what-is-serverless/)
- **SLO** - Service Level Objective [datadoghq.com/blog/establishing-service-level-objectives](https://www.datadoghq.com/blog/establishing-service-level-objectives/)
- **SLSA** - Supply chain Levels for Software Artifacts [slsa.dev](https://slsa.dev)
- **SRE** - Site Reliability Engineering [sre.google](https://sre.google)
- **SSL** - Secure Sockets Layer [websecurity.digicert.com/.../what-is-ssl-tls-https](https://www.websecurity.digicert.com/security-topics/what-is-ssl-tls-https)
- **UX** - User Experience [interaction-design.org/literature/topics/ux-design](https://www.interaction-design.org/literature/topics/ux-design)
- **VM** - Virtual Machine (a single virtualized computer unit)

## More Resources

### Standards

- Guidelines from SWR about the usage of AI [DE] [swr.de/unternehmen/ki-guidelines-100.pdf](https://www.swr.de/unternehmen/ki-guidelines-100.pdf)
- Public Service Standards from gov.uk [gov.uk/service-manual/service-standard](https://www.gov.uk/service-manual/service-standard)
- Technical and Data Standards from gov.uk [gov.uk/guidance/gds-api-technical-and-data-standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- Conway’s Law about organizational structures and their output [thoughtworks.com/.../demystifying-conways-law](https://www.thoughtworks.com/insights/articles/demystifying-conways-law)
- Incident Management Handbook from Atlassian [atlassian.com/incident-management](https://www.atlassian.com/incident-management/get-the-handbook)
- Gartner Hype Cycle [gartner.com/.../methodologies/gartner-hype-cycle](https://www.gartner.com/en/research/methodologies/gartner-hype-cycle) or [robertvaneekhout.nl/.../gartner-hype-cycle-...](https://robertvaneekhout.nl/2018/04/gartner-hype-cycle-welke-technologie-blijft-plakken-en-welke-gaat-nodeloos)
- User-Centered Development Process [medien.ifi.lmu.de/lehre/ws0607/mmi1/mmi4](https://www.medien.ifi.lmu.de/lehre/ws0607/mmi1/mmi4.pdf)
- Radio in the Connected Car [tech.ebu.ch/publications/radio-in-the-connected-car](https://tech.ebu.ch/publications/radio-in-the-connected-car)

### Technical Guides & Tools

- Awesome Broadcasting by the EBU [github.com/ebu/awesome-broadcasting](https://github.com/ebu/awesome-broadcasting)
- Coordinated Vulnerability Disclosure (CVD) by BSI in Germany [DE] [bsi.bund.de/...](https://www.bsi.bund.de/DE/IT-Sicherheitsvorfall/IT-Schwachstellen/it-schwachstellen_node.html)

### Web Tools

- Cheatsheets for common tools and applications [quickref.me](https://quickref.me)
- Cloudflare Radar - for insights into data usage [radar.cloudflare.com](https://radar.cloudflare.com)
- Crontab.guru - Visualize cronjob execution times [crontab.guru](https://crontab.guru/)
- In-app browser check to test for JS injections [inappbrowser.com](https://inappbrowser.com)
- Timezone converter [timezones.digital](https://www.timezones.digital/)
- Uptime/ SLA converter [uptime.is](https://uptime.is/)
- UTM Generator - Add UTM/ campaign parameters to a URL [usefathom.com/utm-builder](https://usefathom.com/utm-builder)
- Tech Radar by Zalando [opensource.zalando.com/tech-radar](https://opensource.zalando.com/tech-radar/)

#### Speedtests

- Speed Test from Cloudflare [speed.cloudflare.com](https://speed.cloudflare.com)
- Speed Test from Netflix [fast.com](https://fast.com)
- Speed Test from Ookla [speedtest.net](https://www.speedtest.net)
- Unoffical [latency ping to all GCP regions](https://gcping.com)

#### DNS Tools

- CIDR Range Visualizer [cidr.xyz](https://cidr.xyz)
- Purge 1.1.1.1 - Purge entries from Cloudflare's DNS [1.1.1.1/purge-cache](https://1.1.1.1/purge-cache/)
- Purge Google DNS - Purge entries from Google's DNS [developers.google.com/speed/public-dns/cache](https://developers.google.com/speed/public-dns/cache)

## Public Key

You can find our public key for `lab [at] swr.de` on [keys.openpgp.org](https://keys.openpgp.org/search?q=lab%40swr.de).

## Disclaimer

Tools, products, links, and services mentioned in this document should not be considered endorsements or recommendations and are purely informational.

## Authors

- Daniel Freytag - [GitHub @FRYTG](https://github.com/FRYTG) / [Twitter @FRYTG](https://twitter.com/FRYTG)
- Christian Hufnagel - [GitHub @chhufnagel](https://github.com/chhufnagel) / [Twitter @hufnagel](https://twitter.com/hufnagel)
- Rafael Mäuer - [GitHub @rafaelmaeuer](https://github.com/rafaelmaeuer) / [Twitter @rafaelmaeuer](https://twitter.com/rafaelmaeuer)
- Pascal Weiland - [GitHub @weiland](https://github.com/weiland) / [Twitter @pascalweiland](https://twitter.com/pascalweiland)

## License

This document is licensed under [EUROPEAN UNION PUBLIC LICENCE v. 1.2](https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt).
