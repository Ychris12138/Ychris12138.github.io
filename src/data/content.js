const shared = {
  email: "12245039@zju.edu.cn",
  githubUrl: "https://github.com/Ychris12138",
  avatar: "https://avatars.githubusercontent.com/u/194215355?v=4",
};

export const content = {
  en: {
    seo: {
      title: "Rui Yang | Molecular Simulation & Statistical Physics",
      description:
        "Personal homepage of Rui Yang, a PhD candidate at Zhejiang University working on molecular simulation, statistical physics, water and ice, and AI for Science.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      research: "Research",
      contact: "Contact",
      menuLabel: "Toggle navigation menu",
      languageLabel: "Switch to Chinese",
    },
    profile: {
      ...shared,
      name: "Rui Yang",
      initials: "RY",
      role: "PhD Candidate in Condensed Matter Physics",
      taglineLead: "Understanding water through",
      rotatingWords: [
        "molecular simulation",
        "statistical physics",
        "phase transitions",
        "reproducible computing",
      ],
      heroSub:
        "I combine molecular simulation, statistical-mechanical modeling, and scientific software to study supercooled water, ice nucleation, and liquid-liquid transitions.",
      location: "Hangzhou, China",
      resumeUrl: "",
    },
    hero: {
      greeting: "Hi, I'm",
      workButton: "View my work",
      resumeButton: "Resume",
      contactButton: "Get in touch",
      stats: [
        { value: "4", label: "Public repositories" },
        { value: "1", label: "Published paper" },
        { value: "4", label: "Research projects" },
      ],
    },
    about: {
      tag: "About me",
      title: "Physics, simulation, and reproducible tools",
      bio: [
        "I am a PhD candidate in Condensed Matter Physics at Zhejiang University, where I also earned my BSc in Physics. My research focuses on microscopic structure, phase behavior, and crystallization in supercooled water.",
        "My current work spans ice nucleation near free surfaces, liquid-liquid transitions, two-state modeling, and long-timescale molecular dynamics. I connect physical models with simulation data through parameter fitting, hypothesis testing, free-energy analysis, and time-correlation methods.",
        "I also build reproducible scientific-computing workflows and open-source tools for research automation, HPC batch analysis, and agent-assisted development.",
      ],
      skillGroups: [
        {
          title: "Simulation & Modeling",
          icon: "flask",
          items: [
            "OpenMM",
            "GROMACS",
            "LAMMPS",
            "Molecular Dynamics",
            "Monte Carlo",
            "Statistical Physics",
          ],
        },
        {
          title: "Scientific Computing",
          icon: "code",
          items: [
            "Python",
            "NumPy",
            "Matplotlib",
            "MATLAB",
            "PyTorch",
            "Data Analysis",
          ],
        },
        {
          title: "Research Infrastructure",
          icon: "wrench",
          items: ["Linux", "Slurm", "HPC", "Git", "LaTeX", "Coding Agents"],
        },
      ],
    },
    projectsSection: {
      tag: "Open source",
      title: "Projects on GitHub",
      intro:
        "Public tools I build for scientific workflows and developer productivity. Repository details are based on my current GitHub profile.",
      repoLabel: "repository",
      demoLabel: "live demo",
    },
    projects: [
      {
        name: "dsh-usage-stats",
        description:
          "A bilingual DeepSeek Harness web plugin with token-usage heatmaps, per-model breakdowns, and privacy-conscious account-balance reporting.",
        tags: ["JavaScript", "DeepSeek Harness", "Data Visualization"],
        repo: "https://github.com/Ychris12138/dsh-usage-stats",
        demo: "",
      },
      {
        name: "md-project-kickoff",
        description:
          "An Agent Skill for Git-first research setup, literature grounding, reproducible project state, remote execution, and Slurm workflows.",
        tags: ["Python", "Agent Skills", "HPC", "Reproducibility"],
        repo: "https://github.com/Ychris12138/md-project-kickoff",
        demo: "",
      },
      {
        name: "dsh-md-plugins",
        description:
          "An early-stage collection of DeepSeek Harness plugins designed for molecular-dynamics researchers.",
        tags: ["Molecular Dynamics", "DeepSeek Harness", "In development"],
        repo: "https://github.com/Ychris12138/dsh-md-plugins",
        demo: "",
      },
    ],
    research: {
      tag: "Research",
      title: "Publications & current work",
      interestsLabel: "Research interests",
      interests: [
        "Supercooled Water",
        "Ice Nucleation",
        "Liquid-Liquid Transitions",
        "Statistical Modeling",
        "AI for Science",
      ],
      items: [
        {
          year: "2026",
          kind: "Published",
          title:
            "Composite Structural Descriptors Reveal Microscopic Structural Heterogeneity in Liquid Water",
          authors: "J. Chen, Z. Yu, B. Yang, Y. Zeng, Y. Tian, R. Yang, R. Shi",
          venue: "The Journal of Physical Chemistry Letters 17, 5355-5361",
          links: [
            {
              label: "DOI",
              url: "https://doi.org/10.1021/acs.jpclett.6c00789",
            },
          ],
        },
        {
          year: "Current",
          kind: "Co-first-author manuscript",
          title:
            "Crystallization mechanisms of supercooled water from a modified two-state model",
          authors: "R. Yang et al.",
          venue:
            "Model development, parameter fitting, crystallization analysis, and energetic interpretation; manuscript in preparation.",
          links: [],
        },
        {
          year: "Current",
          kind: "PhD research",
          title: "Free-surface effects on ice nucleation in supercooled water",
          authors: "Independent OpenMM simulation and analysis workflow",
          venue:
            "Microsecond-scale simulations, dynamic nucleus tracking, instantaneous interface detection, and free-energy reconstruction.",
          links: [],
        },
        {
          year: "Current",
          kind: "PhD research",
          title:
            "Competition between liquid-liquid transitions and crystallization",
          authors: "Long-timescale molecular dynamics and statistical modeling",
          venue:
            "Two-state fits, critical scaling, free-energy surfaces, and time-correlation analysis in the HDL-LDL-crystal pathway.",
          links: [],
        },
      ],
    },
    contact: {
      title: "Let's connect",
      text:
        "I welcome conversations and collaborations around molecular simulation, statistical physics, scientific software, and AI-assisted research workflows.",
      emailLabel: "Email Rui Yang",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with",
      deployed: "Deployed on",
    },
    socials: [
      { label: "GitHub", icon: "github", url: shared.githubUrl },
      { label: "Email", icon: "mail", url: `mailto:${shared.email}` },
    ],
  },
  zh: {
    seo: {
      title: "杨锐 | 分子模拟与统计物理",
      description:
        "杨锐的个人主页。浙江大学凝聚态物理博士研究生，研究方向包括分子模拟、统计物理、水与冰以及 AI for Science。",
    },
    nav: {
      about: "关于",
      projects: "项目",
      research: "科研",
      contact: "联系",
      menuLabel: "展开或收起导航菜单",
      languageLabel: "Switch to English",
    },
    profile: {
      ...shared,
      name: "杨锐",
      initials: "杨锐",
      role: "浙江大学凝聚态物理博士研究生",
      taglineLead: "以多尺度计算探索",
      rotatingWords: ["分子模拟", "统计物理", "水与冰", "可复现科研"],
      heroSub:
        "我结合分子模拟、统计物理建模与科研软件，研究过冷水、冰成核及液-液转变等相变问题。",
      location: "中国杭州",
      resumeUrl: "",
    },
    hero: {
      greeting: "你好，我是",
      workButton: "查看我的项目",
      resumeButton: "个人简历",
      contactButton: "联系我",
      stats: [
        { value: "4", label: "公开仓库" },
        { value: "1", label: "已发表论文" },
        { value: "4", label: "科研项目" },
      ],
    },
    about: {
      tag: "关于我",
      title: "物理、模拟与可复现工具",
      bio: [
        "我是浙江大学凝聚态物理博士研究生，本科就读于浙江大学物理学专业。我的研究聚焦过冷水的微观结构、相行为与结晶过程。",
        "目前的工作涉及自由表面对冰成核的影响、液-液转变、两态模型以及长时间尺度分子动力学。我通过参数拟合、假设检验、自由能分析与时间关联方法，将物理模型同分子模拟数据连接起来。",
        "除科研外，我也关注可复现计算与开放工具，持续开发面向科研自动化、HPC 批量分析和智能编程工作流的开源项目。",
      ],
      skillGroups: [
        {
          title: "模拟与建模",
          icon: "flask",
          items: [
            "OpenMM",
            "GROMACS",
            "LAMMPS",
            "分子动力学",
            "蒙特卡洛",
            "统计物理",
          ],
        },
        {
          title: "科学计算",
          icon: "code",
          items: [
            "Python",
            "NumPy",
            "Matplotlib",
            "MATLAB",
            "PyTorch",
            "数据分析",
          ],
        },
        {
          title: "科研基础设施",
          icon: "wrench",
          items: ["Linux", "Slurm", "HPC", "Git", "LaTeX", "智能编程工具"],
        },
      ],
    },
    projectsSection: {
      tag: "开源项目",
      title: "我的 GitHub 项目",
      intro: "以下是我为科研工作流与开发效率构建的公开工具，内容来自当前 GitHub 仓库。",
      repoLabel: "代码仓库",
      demoLabel: "在线演示",
    },
    projects: [
      {
        name: "dsh-usage-stats",
        description:
          "面向 DeepSeek Harness 网页端的中英双语插件，提供 Token 用量热图、分模型统计与注重隐私的账户余额查询。",
        tags: ["JavaScript", "DeepSeek Harness", "数据可视化"],
        repo: "https://github.com/Ychris12138/dsh-usage-stats",
        demo: "",
      },
      {
        name: "md-project-kickoff",
        description:
          "面向科研项目的 Agent Skill，覆盖 Git-first 项目初始化、文献依据、可复现状态管理、远程运行与 Slurm 工作流。",
        tags: ["Python", "Agent Skills", "HPC", "可复现科研"],
        repo: "https://github.com/Ychris12138/md-project-kickoff",
        demo: "",
      },
      {
        name: "dsh-md-plugins",
        description: "为分子动力学研究者设计的 DeepSeek Harness 插件集合，目前处于早期开发阶段。",
        tags: ["分子动力学", "DeepSeek Harness", "开发中"],
        repo: "https://github.com/Ychris12138/dsh-md-plugins",
        demo: "",
      },
    ],
    research: {
      tag: "科研",
      title: "论文与当前工作",
      interestsLabel: "研究兴趣",
      interests: ["过冷水", "冰成核", "液-液转变", "统计建模", "AI for Science"],
      items: [
        {
          year: "2026",
          kind: "已发表",
          title: "复合结构描述符揭示液态水中的微观结构异质性",
          authors: "J. Chen, Z. Yu, B. Yang, Y. Zeng, Y. Tian, R. Yang, R. Shi",
          venue: "The Journal of Physical Chemistry Letters 17, 5355-5361",
          links: [
            {
              label: "DOI",
              url: "https://doi.org/10.1021/acs.jpclett.6c00789",
            },
          ],
        },
        {
          year: "进行中",
          kind: "共同第一作者论文",
          title: "基于修正两态模型的过冷水结晶机制研究",
          authors: "杨锐 等",
          venue: "负责模型构建、参数拟合、结晶分析与能量解释；论文准备投稿。",
          links: [],
        },
        {
          year: "进行中",
          kind: "博士科研项目",
          title: "自由表面对过冷水冰成核的影响",
          authors: "独立搭建 OpenMM 模拟与分析流程",
          venue: "开展微秒级模拟、晶核动态追踪、瞬时界面识别和自由能重构。",
          links: [],
        },
        {
          year: "进行中",
          kind: "博士科研项目",
          title: "过冷水液-液转变与结晶的动力学竞争",
          authors: "长时间分子动力学与统计物理建模",
          venue: "通过两态模型、临界标度、自由能曲面及时间关联分析 HDL-LDL-结晶演化路径。",
          links: [],
        },
      ],
    },
    contact: {
      title: "欢迎联系",
      text: "欢迎围绕分子模拟、统计物理、科研软件与 AI 辅助科研工作流进行交流与合作。",
      emailLabel: "给杨锐发送邮件",
    },
    footer: {
      rights: "保留所有权利。",
      built: "使用",
      deployed: "部署于",
    },
    socials: [
      { label: "GitHub", icon: "github", url: shared.githubUrl },
      { label: "邮箱", icon: "mail", url: `mailto:${shared.email}` },
    ],
  },
};
