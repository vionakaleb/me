function buildSocial(profile) {
  const social = [];
  if (profile.linkedin)
    social.push({
      name: "LinkedIn",
      url: profile.linkedin,
      className: "fa fa-linkedin",
    });
  if (profile.website)
    social.push({
      name: "Website",
      url: profile.website,
      className: "fa fa-globe",
    });
  if (profile.email)
    social.push({
      name: "Email",
      url: profile.email,
      className: "fa fa-envelope",
    });
  return social;
}

function buildWork(profile) {
  return profile.work.map((job) => ({
    company: job.company,
    title: job.title,
    years: job.years,
    location: job.location || "",
    description: "",
    descriptions: job.descriptions,
    website: job.website || "",
    skills: [],
    projects: [],
    logo: "",
  }));
}

function buildEducation(profile) {
  return profile.education.map((entry) => ({
    school: entry.school,
    degree: entry.degree,
    graduated: entry.graduated,
    description: entry.field || entry.raw || "",
    logo: "",
  }));
}

function buildSkills(profile) {
  const names = profile.technicalSkills.length
    ? profile.technicalSkills
    : profile.topSkills;
  return names.map((name) => ({ name, level: "" }));
}

function buildPortfolioProjects(profile) {
  return profile.projects.map((project) => ({
    title: project.title,
    description: project.description,
    image: "",
    url: "",
    github: "",
    technology: [],
  }));
}

export function toPortfolioData(profile) {
  return {
    main: {
      fullname: profile.fullname,
      description: profile.headline || "A Software Engineer",
      bios: profile.summary ? [profile.summary] : [],
      email: profile.email || "",
      phone: profile.phone || "",
      address: { city: profile.city || "", country: profile.country || "" },
      social: buildSocial(profile),
    },
    resume: {
      education: buildEducation(profile),
      work: buildWork(profile),
      skills: buildSkills(profile),
    },
    portfolio: {
      projects: buildPortfolioProjects(profile),
    },
    certifications: profile.certifications,
    honorsAwards: profile.honorsAwards,
  };
}
